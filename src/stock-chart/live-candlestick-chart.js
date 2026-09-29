/*
 * Simulated one-minute candle in milliseconds.
 */
var ONE_MINUTE_MS = 60 * 1000;

/*
 * Tick frequency for updating the chart.
 */
var UPDATE_INTERVAL_MS = 100;

/*
 * After this many ticks, a new candle is appended.
 */
var UPDATES_PER_CANDLE = 10;

/*
 * Animation duration for setData().
 */
var UPDATE_ANIMATION_DURATION = 0;

/*
 * Animation duration for addPoint().
 */
var ADD_ANIMATION_DURATION = 100;

/*
 * Multiplier used to amplify the random price movement.
 */
var PRICE_MOVEMENT_MULTIPLIER = 2;

/*
 * Number of historical candles generated locally.
 */
var INITIAL_CANDLE_COUNT = 120;

/*
 * Starting price used when generating historical data.
 */
var INITIAL_PRICE = 375;

/*
 * Local in-memory candle data.
 */
var stocksData = [];

/*
 * Reference to the rendered StockChart instance.
 */
var stockChart = null;

/*
 * Interval ID for the dynamic update timer.
 */
var updateTimer = null;

/*
 * Interval ID used while waiting for the Candle series.
 */
var waitForSeriesTimer = null;

/*
 * Timeout ID for the fallback dynamic-update startup.
 */
var fallbackStartTimer = null;

/*
 * Reference to the beforeunload event handler.
 */
var beforeUnloadHandler = null;

/*
 * Counts ticks since the last candle was appended.
 */
var updateIndex = 0;

/*
 * Prevents callbacks from running during sample disposal.
 */
var isPageClosing = false;

/*
 * Prevents disposeSamples() from running recursively.
 */
var isSampleDisposing = false;

/*
 * Identifies the currently active sample instance.
 */
var sampleInstanceId = 0;

/*
 * Holds the currently mounted StockChart.
 */
var activeChart = null;

/*
 * =====================================================
 * HTML ELEMENT IDS
 * =====================================================
 */

var ELEMENT_IDS = {
    stockChart: 'liveStock',
    connectionStatus: 'connection-status',
    candleStatus: 'candle-status',
    openValue: 'open-value',
    highValue: 'high-value',
    lowValue: 'low-value',
    closeValue: 'close-value',
    volumeValue: 'volume-value'
};

/*
 * =====================================================
 * DISPLAY HELPERS
 * =====================================================
 */

function setElementValue(elementId, value) {
    var element = document.getElementById(elementId);

    if (element) {
        element.textContent = value;
    }
}

function updateConnectionStatus(message, statusClass) {
    var element = document.getElementById(ELEMENT_IDS.connectionStatus);

    if (!element) {
        return;
    }

    element.textContent = message;
    element.className = 'connection-status ' + statusClass;
}

function formatPrice(value) {
    if (!isFinite(value)) {
        return '\u2014';
    }

    return Number(value).toFixed(2);
}

function formatVolume(value) {
    if (!isFinite(value)) {
        return '\u2014';
    }

    return Number(value).toFixed(4);
}

function updateMarketValues(candle, status) {
    if (!candle || isSampleDisposing) {
        return;
    }

    setElementValue(ELEMENT_IDS.openValue, formatPrice(candle.open));
    setElementValue(ELEMENT_IDS.highValue, formatPrice(candle.high));
    setElementValue(ELEMENT_IDS.lowValue, formatPrice(candle.low));
    setElementValue(ELEMENT_IDS.closeValue, formatPrice(candle.close));
    setElementValue(ELEMENT_IDS.volumeValue, formatVolume(candle.volume));
    setElementValue(ELEMENT_IDS.candleStatus, status);
}

/*
 * Round a number to four decimal places.
 */
function correctFloat(value) {
    return Number(value.toFixed(4));
}

/*
 * Return a random number between minimum and maximum.
 */
function randomBetween(minimum, maximum) {
    return minimum + Math.random() * (maximum - minimum);
}

/*
 * Return the timestamp representing the start of the current minute.
 */
function getCurrentMinute() {
    return Math.floor(Date.now() / ONE_MINUTE_MS) * ONE_MINUTE_MS;
}

/*
 * Build a single historical OHLCV candle.
 */
function createHistoricalCandle(timestamp, openingPrice) {
    var movement = randomBetween(-1.5, 1.5);
    var close = correctFloat(Math.max(1, openingPrice + movement));
    var high = correctFloat(Math.max(openingPrice, close) + randomBetween(0.05, 0.7));
    var low = correctFloat(Math.max(1, Math.min(openingPrice, close) - randomBetween(0.05, 0.7)));

    return {
        x: new Date(timestamp),
        open: correctFloat(openingPrice),
        high: high,
        low: low,
        close: close,
        volume: correctFloat(randomBetween(1, 30))
    };
}

/*
 * Populate stocksData with historical candles.
 */
function createInitialLocalData() {
    var currentMinute = getCurrentMinute();
    var startingTime = currentMinute - (INITIAL_CANDLE_COUNT - 1) * ONE_MINUTE_MS;
    var price = INITIAL_PRICE;
    var index;
    var timestamp;
    var candle;

    stocksData = [];

    for (index = 0; index < INITIAL_CANDLE_COUNT; index++) {
        timestamp = startingTime + index * ONE_MINUTE_MS;
        candle = createHistoricalCandle(timestamp, price);
        stocksData.push(candle);
        price = candle.close;
    }
}

/*
 * Return whether the current sample element is still mounted.
 */
function isStockChartElementMounted() {
    var chartElement = document.getElementById(ELEMENT_IDS.stockChart);

    return !!chartElement && chartElement.isConnected;
}

/*
 * Clear the dynamic-update interval.
 */
function stopDynamicUpdates() {
    if (updateTimer !== null) {
        window.clearInterval(updateTimer);
        updateTimer = null;
    }
}

/*
 * Clear the interval that waits for the Candle series.
 */
function stopWaitingForSeries() {
    if (waitForSeriesTimer !== null) {
        window.clearInterval(waitForSeriesTimer);
        waitForSeriesTimer = null;
    }
}

/*
 * Clear the fallback startup timeout.
 */
function stopFallbackTimer() {
    if (fallbackStartTimer !== null) {
        window.clearTimeout(fallbackStartTimer);
        fallbackStartTimer = null;
    }
}

/*
 * Remove events registered by this sample.
 */
function removeSampleEvents() {
    if (beforeUnloadHandler !== null) {
        window.removeEventListener('beforeunload', beforeUnloadHandler);
        beforeUnloadHandler = null;
    }
}

/*
 * Destroy the current StockChart instance.
 *
 * The module references are cleared before destroy() is called so that a
 * timer callback cannot obtain the chart while destruction is in progress.
 */
function destroyStockChart() {
    var chartToDestroy = activeChart || stockChart;

    activeChart = null;
    stockChart = null;

    if (!chartToDestroy || chartToDestroy.isDestroyed) {
        return;
    }

    try {
        chartToDestroy.destroy();
    } catch (error) {
        /*
         * The sample browser may already have destroyed the chart.
         */
    }
}

/*
 * Dispose all timers, events, state, and chart instances created by
 * the current sample.
 */
function disposeSamples() {
    if (isSampleDisposing) {
        return;
    }

    isSampleDisposing = true;
    isPageClosing = true;

    /*
     * Invalidate every callback captured by the previous instance.
     */
    sampleInstanceId++;

    /*
     * Stop asynchronous work before destroying the StockChart.
     */
    stopDynamicUpdates();
    stopWaitingForSeries();
    stopFallbackTimer();
    removeSampleEvents();

    /*
     * Destroy the chart only after all sample timers are stopped.
     */
    destroyStockChart();

    stocksData = [];
    updateIndex = 0;
}

/*
 * Resolve the active Candle series.
 *
 * A Syncfusion series object can remain accessible briefly while its
 * internal Chart reference has already been cleared. For that reason,
 * this method validates the StockChart, inner Chart, DOM element, and
 * series Chart reference before returning the series.
 */
function getCandlesSeries() {
    var innerChart;
    var series;

    if (
        isSampleDisposing ||
        isPageClosing ||
        !stockChart ||
        stockChart.isDestroyed ||
        !isStockChartElementMounted()
    ) {
        return null;
    }

    try {
        innerChart = stockChart.chart;

        if (
            !innerChart ||
            innerChart.isDestroyed ||
            !innerChart.element ||
            !innerChart.element.isConnected
        ) {
            return null;
        }

        if (stockChart.series && stockChart.series.length) {
            series = stockChart.series[0];

            if (
                series &&
                series.chart &&
                !series.chart.isDestroyed &&
                typeof series.setData === 'function' &&
                typeof series.addPoint === 'function'
            ) {
                return series;
            }
        }

        if (innerChart.series && innerChart.series.length) {
            series = innerChart.series[0];

            if (
                series &&
                series.chart &&
                !series.chart.isDestroyed &&
                typeof series.setData === 'function' &&
                typeof series.addPoint === 'function'
            ) {
                return series;
            }
        }
    } catch (error) {
        return null;
    }

    return null;
}

/*
 * Build an updated version of the current candle.
 */
function createUpdatedCandle(currentCandle) {
    var movement = correctFloat((Math.random() - 0.5) * PRICE_MOVEMENT_MULTIPLIER);
    var newClose = correctFloat(Math.max(1, currentCandle.close + movement));

    return {
        x: currentCandle.x,
        open: currentCandle.open,
        high: correctFloat(Math.max(currentCandle.high, newClose)),
        low: correctFloat(Math.min(currentCandle.low, newClose)),
        close: newClose,
        volume: correctFloat(currentCandle.volume + randomBetween(0.01, 0.3))
    };
}

/*
 * Build the next one-minute candle.
 */
function createNewCandle(previousCandle) {
    var openingPrice = previousCandle.close;

    return {
        x: new Date(previousCandle.x.getTime() + ONE_MINUTE_MS),
        open: openingPrice,
        high: openingPrice,
        low: openingPrice,
        close: openingPrice,
        volume: correctFloat(randomBetween(0.1, 1))
    };
}

/*
 * Update the current point through setData().
 */
function updateCurrentPoints(candle) {
    var series = getCandlesSeries();

    if (!series) {
        return false;
    }

    try {
        series.setData(candle, UPDATE_ANIMATION_DURATION);
        return true;
    } catch (error) {
        /*
         * The chart may have entered its destruction cycle after the
         * series was validated but before setData() was executed.
         */
        disposeSamples();
        return false;
    }
}

/*
 * Append a new point through addPoint().
 */
function addNewPoint(candle) {
    var series = getCandlesSeries();

    if (!series) {
        return false;
    }

    try {
        series.addPoint(candle, ADD_ANIMATION_DURATION);
        return true;
    } catch (error) {
        /*
         * The chart may have entered its destruction cycle after the
         * series was validated but before addPoint() was executed.
         */
        disposeSamples();
        return false;
    }
}

/*
 * Update the current candle or append a new candle.
 */
function processDynamicUpdate(myInstanceId) {
    var lastIndex;
    var currentCandle;
    var shouldAddNewCandle;
    var newCandle;
    var updatedCandle;

    if (
        myInstanceId !== sampleInstanceId ||
        isSampleDisposing ||
        isPageClosing
    ) {
        return;
    }

    /*
     * A culture change or sample navigation can remove the sample DOM
     * without triggering beforeunload.
     */
    if (!isStockChartElementMounted()) {
        disposeSamples();
        return;
    }

    if (!stocksData.length || !getCandlesSeries()) {
        return;
    }

    lastIndex = stocksData.length - 1;
    currentCandle = stocksData[lastIndex];
    shouldAddNewCandle = updateIndex > 0 && updateIndex % UPDATES_PER_CANDLE === 0;

    if (shouldAddNewCandle) {
        newCandle = createNewCandle(currentCandle);

        /*
         * Update the series first. Do not mutate the local data if the
         * chart was destroyed while the update was being processed.
         */
        if (!addNewPoint(newCandle)) {
            return;
        }

        stocksData.push(newCandle);
        updateMarketValues(newCandle, 'New simulated one-minute candle');
    } else {
        updatedCandle = createUpdatedCandle(currentCandle);

        if (!updateCurrentPoints(updatedCandle)) {
            return;
        }

        stocksData[lastIndex] = updatedCandle;
        updateMarketValues(updatedCandle, 'Current candle updated');
    }

    updateIndex++;
}

/*
 * Start updating after the Candle series becomes available.
 */
function startDynamicUpdates(myInstanceId) {
    stopDynamicUpdates();
    stopWaitingForSeries();
    stopFallbackTimer();

    waitForSeriesTimer = window.setInterval(function () {
        if (
            myInstanceId !== sampleInstanceId ||
            isSampleDisposing ||
            isPageClosing
        ) {
            stopWaitingForSeries();
            return;
        }

        if (!isStockChartElementMounted()) {
            disposeSamples();
            return;
        }

        if (getCandlesSeries()) {
            stopWaitingForSeries();

            updateTimer = window.setInterval(function () {
                processDynamicUpdate(myInstanceId);
            }, UPDATE_INTERVAL_MS);
        }
    }, 20);

    /*
     * Keep the timeout reference so culture changes and sample navigation
     * can cancel the fallback callback before it creates another interval.
     */
    fallbackStartTimer = window.setTimeout(function () {
        fallbackStartTimer = null;

        if (
            myInstanceId !== sampleInstanceId ||
            isSampleDisposing ||
            isPageClosing ||
            updateTimer !== null
        ) {
            return;
        }

        if (!isStockChartElementMounted() || !getCandlesSeries()) {
            return;
        }

        stopWaitingForSeries();

        updateTimer = window.setInterval(function () {
            processDynamicUpdate(myInstanceId);
        }, UPDATE_INTERVAL_MS);
    }, 5000);
}

/*
 * Register browser events using a removable function reference.
 */
function addSampleEvents() {
    removeSampleEvents();

    beforeUnloadHandler = function () {
        disposeSamples();
    };

    window.addEventListener('beforeunload', beforeUnloadHandler);
}

/*
 * Sample entry point.
 */
this.default = function () {
    var myInstanceId;
    var REGISTRY_KEY = 'stock-chart/_liveSampleTeardowns';
    var registry = window[REGISTRY_KEY] = window[REGISTRY_KEY] || {};
    var myKey = 'stock-chart/live-candlestick-chart';

    /*
     * default() can run again during a culture or theme change.
     * Dispose the previous chart, interval, timeout, and events first.
     */
    disposeSamples();

    /*
     * Start a clean sample lifecycle after the previous instance has
     * been completely disposed.
     */
    isSampleDisposing = false;
    isPageClosing = false;
    sampleInstanceId++;

    myInstanceId = sampleInstanceId;

    /*
     * Dispose any other live StockChart sample registered by the
     * sample browser.
     */
    Object.keys(registry).forEach(function (key) {
        if (key !== myKey && typeof registry[key] === 'function') {
            try {
                registry[key]();
            } catch (error) {
                /*
                 * The previous sample teardown may already be complete.
                 */
            }

            delete registry[key];
        }
    });

    /*
     * Register this sample's navigation cleanup.
     */
    registry[myKey] = function () {
        disposeSamples();

        var cachedTag = document.querySelector(
            'script[src="src/stock-chart/live-candlestick-chart.js"]'
        );

        if (cachedTag && cachedTag.parentNode) {
            cachedTag.parentNode.removeChild(cachedTag);
        }

        if (
            typeof execFunction !== 'undefined' &&
            execFunction['stock-chart/live-candlestick-chart']
        ) {
            delete execFunction['stock-chart/live-candlestick-chart'];
        }

        if (window.default) {
            window.default = undefined;
        }
    };

    createInitialLocalData();
    addSampleEvents();

    updateConnectionStatus('Local data ready', 'connected');
    updateMarketValues(
        stocksData.length ? stocksData[stocksData.length - 1] : null,
        stocksData.length ? 'Local data loaded' : 'No local data available'
    );

    stockChart = new ej.charts.StockChart({
        width: '100%',
        height: '100%',
        title: 'Real-Time Stock Market Data',
        chartArea: {
            border: {
                width: 0
            }
        },
        primaryXAxis: {
            valueType: 'DateTime',
            intervalType: 'Auto',
            labelFormat: 'HH:mm',
            lineStyle: {
                color: 'transparent'
            },
            crosshairTooltip: {
                enable: false
            }
        },
        primaryYAxis: {
            labelPosition: 'Outside',
            lineStyle: {
                color: 'transparent'
            },
            majorTickLines: {
                color: 'transparent',
                height: 0
            },
            crosshairTooltip: {
                enable: false
            }
        },
        crosshair: {
            enable: false
        },
        tooltip: {
            enable: false
        },
        series: [
            {
                dataSource: stocksData,
                type: 'Candle',
                xName: 'x',
                open: 'open',
                high: 'high',
                low: 'low',
                close: 'close',
                volume: 'volume',
                name: 'Local dynamic data',
                bullFillColor: '#90EE90',
                bearFillColor: '#FF7F7F',
                enableSolidCandles: true,
                border: {
                    width: 1
                },
                animation: {
                    enable: false
                },
                lastValueLabel: {
                    enable: true,
                    background: '#FF7F7F',
                    dashArray: '3,2',
                    lineWidth: 0.5,
                    font: {
                        color: '#ffffff',
                        size: '11px'
                    }
                }
            }
        ],
        seriesType: [],
        indicatorType: [],
        trendlineType: [],
        periods: [
            {
                text: '15m',
                interval: 15,
                intervalType: 'Minutes'
            },
            {
                text: '1h',
                interval: 1,
                intervalType: 'Hours',
                selected: true
            },
            {
                text: 'All'
            }
        ],
        enableCustomRange: false,

        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];

            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.stockChart.theme = (
                selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
            ).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
        // custom code end
    });

    activeChart = stockChart;
    stockChart.appendTo('#liveStock');

    /*
     * Start the interval only for the current sample instance.
     */
    startDynamicUpdates(myInstanceId);
};

