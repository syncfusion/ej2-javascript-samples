this.default = function () {

    var chart;
    var chartData = [];
    var selectedSymbol = 'MSFT';
    var selectedRange = 3;
    var selectedSeriesType = 'Candle';
    var baseDataLength = 0;

    // Animation is enabled only for the chart's initial rendering.
    // Every operation-driven refresh (symbol / range / series type
    // change, AI forecast) renders the series without animation.
    var isInitialRenderCompleted = false;

    var symbols = [
        { text: 'MSFT', iconCss: 'e-logo-msft', id: 'MSFT' },
        { text: 'GOOG', iconCss: 'e-logo-goog', id: 'GOOG' },
        { text: 'AMZN', iconCss: 'e-logo-amzn', id: 'AMZN' },
        { text: 'TSLA', iconCss: 'e-logo-tsla', id: 'TSLA' }
    ];

    var seriesOptions = ['Candle', 'Line', 'HiloOpenClose'];

    // ---------------------------------------------
    // Helper methods
    // ---------------------------------------------

    function showSpinnerById(id) {
        var el = document.getElementById(id);
        if (el) {
            el.classList.add('visible');
        }
    }

    function hideSpinnerById(id) {
        var el = document.getElementById(id);
        if (el) {
            el.classList.remove('visible');
        }
    }

    // Turns off series animation. Used before every refresh that is
    // triggered by an operation (dropdown click, AI forecast click),
    // so the chart updates instantly instead of re-animating.
    function disableSeriesAnimation() {
        if (chart && chart.series && chart.series[0] && chart.series[0].animation) {
            chart.series[0].animation.enable = false;
        }
    }

    function getChartStateSnapshot() {
        // IMPORTANT: only return plain, serializable values. Reading
        // `chart.primaryXAxis` etc. directly returns the live Syncfusion
        // objects, which hold a back-reference (`parentObj`) to the chart
        // and therefore cannot be JSON.stringify'd (circular reference).
        return {
            primaryXAxis: {
                valueType: 'DateTime',
                edgeLabelPlacement: 'Shift',
                labelFormat: 'MMM d',
                majorGridLines: { width: 0 },
                stripLines: []
            },
            primaryYAxis: {
                title: 'Price (USD)',
                labelFormat: 'n0',
                rangePadding: 'None'
            },
            legendSettings: { visible: false },
            chartArea: { border: { width: 0 } },
            title: 'Stock Forecasting',
            subTitle: 'AI-powered candlestick/OHLC forecasting (35 days)',
            selectedSymbol: selectedSymbol,
            selectedRange: selectedRange,
            series: [{
                type: selectedSeriesType,
                xName: 'date',
                yName: 'close',
                high: 'high',
                low: 'low',
                open: 'open',
                close: 'close'
            }]
        };
    }

    function generatePrompt(lastN) {

        var lastDate =
            lastN[lastN.length - 1]
                ? lastN[lastN.length - 1].date
                : new Date();

        var startDate = new Date(lastDate);

        startDate.setDate(
            startDate.getDate() + 1
        );

        var prompt =
            'Generate 35 realistic financial data points suitable for candlestick, OHLC, and line charts in \':\' format.\n' +
            'Use the following format: yyyy-MM-dd: High: Low: Open: Close\n' +
            'Start from ' +
            startDate.toISOString().slice(0, 10) +
            ' and increment by 1 day for each row.\n';

        lastN.forEach(function (item) {

            var iso = new Date(item.date).toISOString().slice(0, 10);

            prompt +=
                iso +
                ': ' +
                item.high +
                ', ' +
                item.low +
                ', ' +
                item.open +
                ', ' +
                item.close +
                '\n';

        });

        prompt +=
            '\n### STRICT OUTPUT REQUIREMENTS ###\n' +
            '- Generate EXACTLY 35 rows.\n' +
            '- Format: yyyy-MM-dd:High:Low:Open:Close\n' +
            '- Mix upward/downward trends; no missing/duplicate dates; no extra text.\n' +
            '- Values must be realistic and follow stock behavior.\n';

        return prompt;
    }

    function filterByMonths(all, months) {
        if (!all.length) {
            return [];
        }
        var latest = all.reduce(function (a, b) {
            return (new Date(a.date) > new Date(b.date)) ? a : b;
        });
        var cutoff = new Date(latest.date);
        cutoff.setMonth(cutoff.getMonth() - months + 1);
        return all
            .filter(function (p) {
                return new Date(p.date) >= cutoff;
            })
            .sort(function (a, b) {
                return new Date(a.date) - new Date(b.date);
            });
    }

    function showForecastStripLine(current) {
        if (!current || !current.length || current.length <= baseDataLength) {
            if (chart && chart.primaryXAxis) {
                chart.primaryXAxis.stripLines = [];
                disableSeriesAnimation();
                chart.refresh();
            }
            return;
        }
        var start = current[baseDataLength].date;
        var end = current[current.length - 1].date;
        if (chart && chart.primaryXAxis) {
            chart.primaryXAxis.stripLines = [
                {
                    start: start,
                    end: end,
                    visible: true,
                    color: '#E0E0E0',
                    opacity: 0.5,
                    zIndex: 'Behind'
                }
            ];
            disableSeriesAnimation();
            chart.refresh();
        }
    }

    function getSelectedIconClass() {
        switch (selectedSymbol) {
            case 'MSFT': return 'e-logo-msft';
            case 'GOOG': return 'e-logo-goog';
            case 'AMZN': return 'e-logo-amzn';
            case 'TSLA': return 'e-logo-tsla';
            default: return 'default-icon';
        }
    }

    // ---------------------------------------------
    // Create chart
    // ---------------------------------------------

    chart = new ej.charts.Chart({

        title: 'Stock Forecasting',

        subTitle:
            'AI-powered candlestick/OHLC forecasting (35 days)',

        chartArea: {
            border: {
                width: 0
            }
        },

        primaryXAxis: {
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift',
            labelFormat: 'MMM d',
            majorGridLines: {
                width: 0
            },
            stripLines: []
        },

        primaryYAxis: {
            title: 'Price (USD)',
            labelFormat: 'n0',
            rangePadding: 'None'
        },

        legendSettings: {
            visible: false
        },

        tooltip: {
            enable: true,
            shared: true,
            header: ''
        },

        height: '520',

        series: [{
            dataSource: chartData,
            type: selectedSeriesType,
            xName: 'date',
            yName: 'close',
            high: 'high',
            low: 'low',
            open: 'open',
            close: 'close',
            name: 'Price',
            // The series animates when the chart renders for the
            // first time. Operation-triggered refreshes disable
            // this animation before calling chart.refresh().
            animation: {
                enable: true
            }
        }],
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
         // custom code end
    });

    chart.appendTo('#stock-chart');

    // ---------------------------------------------
    // Symbol selector (DropDownButton)
    // ---------------------------------------------

    var stockSelector = new ej.splitbuttons.DropDownButton({
        content: selectedSymbol,
        items: symbols,
        iconCss: getSelectedIconClass(),
        select: function (args) {
            var id = (args.item && (args.item.id || args.item.text)) || 'MSFT';
            selectedSymbol = id;
            stockSelector.content = id;
            stockSelector.iconCss = getSelectedIconClass();
            loadChartData(id, selectedRange);
        },
        cssClass: 'e-primary'
    });
    stockSelector.appendTo('#stock-selector');

    // ---------------------------------------------
    // Range buttons (3/6/12 month)
    // ---------------------------------------------

    function filterDataByMonths(months) {
        selectedRange = months;
        loadChartData(selectedSymbol, months);
    }

    var btn3m = new ej.buttons.Button({});
    btn3m.appendTo('#btn3m');
    btn3m.element.addEventListener('click', function () { filterDataByMonths(3); });

    var btn6m = new ej.buttons.Button({});
    btn6m.appendTo('#btn6m');
    btn6m.element.addEventListener('click', function () { filterDataByMonths(6); });

    var btn12m = new ej.buttons.Button({});
    btn12m.appendTo('#btn12m');
    btn12m.element.addEventListener('click', function () { filterDataByMonths(12); });

    // ---------------------------------------------
    // Series type dropdown
    // ---------------------------------------------

    var seriesDropdown = new ej.dropdowns.DropDownList({
        dataSource: seriesOptions,
        placeholder: 'Select Chart Type',
        value: selectedSeriesType,
        change: function (e) {
            var newType = (e && e.value) || selectedSeriesType;
            selectedSeriesType = newType;
            if (chart && chart.series && chart.series[0]) {
                chart.series[0].type = newType;
                disableSeriesAnimation();
                chart.refresh();
            }
        },
        width: '150px',
        cssClass: 'ddl-range'
    });
    seriesDropdown.appendTo('#series-type');

    // ---------------------------------------------
    // Data loader
    // ---------------------------------------------

    async function loadChartData(symbol, months) {

        try {

            var response =
                await fetch(
                    'https://cdn.syncfusion.com/blazor/data/chart/' +
                    symbol.toLowerCase() +
                    '-data.json'
                );

            var raw =
                await response.json();

            var all = (raw || []).map(function (item) {
                return {
                    date: new Date(item.Date || item.date),
                    high: Number(item.High || item.high),
                    low: Number(item.Low || item.low),
                    open: Number(item.Open || item.open),
                    close: Number(item.Close || item.close)
                };
            });

            chartData = filterByMonths(all, months);
            baseDataLength = chartData.length;

            chart.series[0].dataSource = chartData;
            chart.series[0].type = selectedSeriesType;
            if (chart.primaryXAxis) {
                chart.primaryXAxis.stripLines = [];
            }
            chart.refresh();

        } catch (e) {

            console.error('Failed to load chart data', e);
            chartData = [];
            baseDataLength = 0;
            if (chart && chart.series && chart.series[0]) {
                chart.series[0].dataSource = [];
                chart.refresh();
            }

        }
    }

    // ---------------------------------------------
    // AI Forecast helper (local to this sample)
    //
    // Builds on top of the shared window.serverAIRequest
    // service; the chart-specific AI helpers are kept
    // inside the ai-chart samples.
    // ---------------------------------------------

    var STOCK_FORECAST_SYSTEM_PROMPT =
        'You generate realistic stock forecasting data for a Syncfusion Chart.\n' +
        'Return ONLY the forecast lines in "yyyy-MM-dd:High:Low:Open:Close" format (no extra text).\n' +
        'Do not change chart configuration.';

    function parseLinesToPoints(text, original) {

        var lines =
            text
                .split('\n')
                .filter(function (l) {
                    return l.trim().length;
                });

        var out = [];

        lines.forEach(function (line) {

            var pieces =
                line.split(':')
                    .map(function (s) {
                        return s.trim();
                    });

            if (pieces.length < 5) {
                return;
            }

            var stamp = pieces[0];
            var highStr = pieces[1];
            var lowStr = pieces[2];
            var openStr = pieces[3];
            var closeStr = pieces[4];

            var dateParts =
                stamp.split('-');

            if (dateParts.length !== 3) {
                return;
            }

            var year =
                parseInt(dateParts[0], 10);

            var month =
                parseInt(dateParts[1], 10);

            var day =
                parseInt(dateParts[2], 10);

            var date =
                new Date(
                    year,
                    month - 1,
                    day
                );

            var high =
                parseFloat(highStr);

            var low =
                parseFloat(lowStr);

            var open =
                parseFloat(openStr);

            var close =
                parseFloat(closeStr);

            if (
                isNaN(high) ||
                isNaN(low) ||
                isNaN(open) ||
                isNaN(close)
            ) {
                return;
            }

            out.push({

                date: date,

                high: high,

                low: low,

                open: open,

                close: close
            });

        });

        return original.concat(out);
    }

    async function fetchAiStockForecast(userPrompt, originalData, forecastCount) {

        try {

            var systemPrompt =
                STOCK_FORECAST_SYSTEM_PROMPT +
                '\n\n' +
                'Current chart state: ' +
                JSON.stringify(getChartStateSnapshot());

            var aiOutput =
                await window.serverAIRequest({

                    messages: [
                        {
                            role: 'system',
                            content: systemPrompt
                        },
                        {
                            role: 'user',
                            content: userPrompt
                        }
                    ]
                });

            if (!aiOutput) {

                return {

                    props: {}
                };
            }

            var cleanedText;

            if (
                aiOutput.indexOf('```') >= 0
            ) {

                cleanedText =
                    aiOutput
                        .split('```')[1]
                        .trim();

            } else {

                cleanedText =
                    aiOutput.trim();
            }

            var parsed =
                parseLinesToPoints(
                    cleanedText,
                    originalData
                );

            // Only keep the appended forecast rows if the AI returned
            // a usable projection; the parse helper concatenated the
            // forecast at the end of the observed data.
            if (parsed.length <= originalData.length) {

                return { props: {} };
            }

            return {

                props: {
                    series: [
                        {
                            dataSource: parsed.slice(0, originalData.length + forecastCount)
                        }
                    ]
                }
            };

        } catch (e) {

            console.error('fetchAiStockForecast error:', e);

            return { props: {} };
        }
    }

    var forecastBtn = new ej.buttons.Button({
        cssClass: 'chart-action-button',
        isPrimary: true,
        iconCss: 'e-icons e-ai-chat'
    });
    forecastBtn.appendTo('#forecastBtn');

    forecastBtn.element.addEventListener('click', processForecast);
    // Initial data load (matches React useEffect on mount)
    loadChartData(selectedSymbol, selectedRange);
    
    // ---------------------------------------------
    // AI Forecast
    // ---------------------------------------------

    async function processForecast() {

        showSpinnerById('chartSpinner');

        try {

            var beforeLen = chartData.length;
            var last10 =
                chartData.slice(
                    Math.max(
                        chartData.length - 10,
                        0
                    )
                );

            var prompt =
                generatePrompt(last10);

            // Chart-specific AI helper local to this sample
            var aiDelta =
                await fetchAiStockForecast(
                    prompt,
                    chartData,
                    35
                );

            if (
                aiDelta &&
                aiDelta.props &&
                aiDelta.props.series &&
                aiDelta.props.series[0] &&
                aiDelta.props.series[0].dataSource
            ) {

                var newData = aiDelta.props.series[0].dataSource;
                chartData = newData;
                chart.series[0].dataSource = chartData;
                if (newData.length >= beforeLen) {
                    baseDataLength = beforeLen;
                }
                chart.refresh();
                showForecastStripLine(newData);
            }

        } catch (e) {

            console.error(
                'processForecast:',
                e
            );

        } finally {

            hideSpinnerById(
                'chartSpinner'
            );
        }
    }
};
