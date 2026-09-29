this.default = function () {
    // Helper function for array spreading
    var __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
    
    var PALETTE = [
        '#1089E9', '#08CDAA', '#F58400', '#9656FF', '#F9C200', '#F954A3', '#05BB3D', '#06B1E2', '#FF4E4E'
    ];
    var CHART_SUGGESTIONS = [
        'Visualize profit trends over time',
        'Display regional sales comparison',
        'Track monthly website traffic'
    ];
    
    var CHART_SYSTEM_PROMPT = `
    You are an expert AI Chart Assistant. Determine whether the user is requesting chart generation, data-to-chart conversion, chart modification, or chart analysis.

    For chart generation, data-to-chart conversion, and chart modification requests, return exactly one valid JSON object. Do not include markdown, code fences, comments, explanations, or text outside the JSON object.

    Use this schema:
    {
    "props": {
        "chartType": "cartesian | circular",
        "title": "Meaningful chart title",
        "showLegend": true,
        "xAxis": [
        {
            "type": "category | numerical | datetime | datetimecategory | logarithmic",
            "title": "X-axis title",
            "labelRotation": 0
        }
        ],
        "yAxis": [
        {
            "type": "numerical | logarithmic",
            "title": "Y-axis title",
            "min": 0
        }
        ]
    },
    "properties": {
        "series": [
        {
            "type": "line | column | bar | area | spline | stepline | steparea | splinearea | multicoloredline | multicoloredarea | rangecolumn | rangearea | splinerangearea | bubble | scatter | stackingcolumn | stackingcolumn100 | stackingbar | stackingbar100 | stackingarea | stackingarea100 | stackingline | stackingline100 | stackingsteparea | pareto | polar | radar | waterfall | histogram | pie | doughnut | funnel | pyramid",
            "name": "Series name",
            "dataSource": [
            {
                "xvalue": "Sample",
                "yvalue": 100
            }
            ]
        }
        ]
    }
    }

    Available Chart Public APIs:
    Properties: width, height, title, subTitle, dataSource, theme, selectionMode, highlightMode, enableExport, enableAnimation, enableCanvas, isTransposed, background, primaryXAxis, primaryYAxis, series, annotations, legendSettings, tooltip, crosshair, zoomSettings, palettes, indicators, chartArea, margin, border
    Methods: export, print, addSeries, removeSeries, clearSeries, addAxes, removeAxis, showTooltip, hideTooltip, refreshLiveData, setAnnotationValue, animate
    Events: loaded, resized, chartMouseClick, pointClick, chartMouseMove, pointMove, chartMouseDown, chartMouseUp, chartMouseLeave, chartDoubleClick, pointDoubleClick, tooltipRender, legendRender, axisLabelRender, seriesRender, pointRender

    Rules:
    1. Use "cartesian" for trends, comparisons, distributions, and values plotted against axes.
    2. Use "circular" only for Pie, Doughnut, Funnel, and Pyramid series.
    3. Cartesian charts must include both xAxis and yAxis.
    4. Circular charts must not require xAxis or yAxis.
    5. Every data point must contain an xvalue and a finite numeric yvalue.
    6. Use meaningful axis titles based on the represented data instead of the property names "xvalue" and "yvalue".
    7. Preserve all values, categories, series names, titles, and explicitly requested settings supplied by the user.
    8. When the user provides no data values, generate realistic representative sample data relevant to the requested subject.
    9. When multiple groups or measures are provided, create separate series with consistent xvalue categories.
    10. For DateTime axes, return xvalue as an ISO 8601 date string.
    11. Use a Category axis for textual categories and a Numerical axis for numeric X values.
    12. For chart modification requests, return the complete updated chart configuration and preserve every property, series, axis, data point,
    and feature that the user did not explicitly request to change.
    13. Do not return an empty series or an empty dataSource.
    14. Do not include JavaScript functions, undefined values, NaN, Infinity, trailing commas, or other values that are invalid in JSON.
    15. You can use any of the available Chart Public APIs in your response when appropriate.
    16. For chart modification requests, users can also request changes to:
        - Chart dimensions: "set width to 800px" or "change height to 600px"
        - Theme: "set theme to material" or "change theme to bootstrap"
        - Background: "set background to #f0f0f0" or "change background color to blue"
        - Title: "set title to Sales Report" or "change chart title to Revenue Analysis"
        - Subtitle: "add subtitle Quarterly Performance" or "set subtitle to 2023 Financial Year"
        - Border: "set border to 2px solid red" or "change border to 1px #000000"
        - Margin: "set margin to 20" or "change margin to 30"
        - Palette: "set palette to red, blue, green" or "change colors to #ff0000, #00ff00, #0000ff"
        - Axis properties: "set xaxis title to Months" or "change yaxis range from 0 to 100"
        - Axis visibility: "hide xaxis" or "show yaxis"
        - Axis label rotation: "set xaxis rotation to 45"
        - Series properties: "set series 1 name to Revenue" or "change series 2 color to blue"
        - Series width: "set series 1 width to 3"
        - Marker properties: "set marker size to 10" or "change marker shape to circle"
        - Scrollbar: "enable scrollbar" or "disable scrollbar"
        - Stack labels: "show stack labels" or "hide stack labels"
        - Public methods: Users can request to "add series", "remove series", "export chart", "print chart", "show tooltip", "hide tooltip", "refresh data", "animate chart"
        - Data label font properties: Users can request to "set data label font size to 14px", "change data label font family to Arial", "set data label font weight to bold", "change data label font style to italic", "set data label font color to red"

    For chart analysis requests, return concise analysis text only. Do not return JSON unless the user also requests a generated or modified chart.
    Never mix JSON configuration and analysis text in the same response.
    `.trim();
    var HISTORY_STORAGE_KEY = 'ai-chart-history-sessions';
    function saveHistorySessions(sessions) {
        try {
            sessionStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(sessions));
        }
        catch (error) {
            console.error('Unable to save chart history sessions:', error);
        }
    }
    function loadHistorySessions() {
        var storedHistory = sessionStorage.getItem(HISTORY_STORAGE_KEY);
        if (!storedHistory) {
            return [];
        }
        try {
            var parsedSessions = JSON.parse(storedHistory);
            if (!Array.isArray(parsedSessions)) {
                return [];
            }
            return parsedSessions.map(function (session) {
                return ({
                    ...session,
                    createdAt: new Date(session.createdAt),
                    updatedAt: new Date(session.updatedAt),
                    messages: Array.isArray(session.messages)
                        ? session.messages.map(function (message) {
                            return ({
                                ...message,
                                createdAt: new Date(message.createdAt)
                            });
                        })
                        : []
                });
            });
        }
        catch (error) {
            console.error('Unable to load chart history sessions:', error);
            sessionStorage.removeItem(HISTORY_STORAGE_KEY);
            return [];
        }
    }
    function createId(prefix) {
        return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    }
    function createHistorySession() {
        var now = new Date();
        return {
            id: createId('session'),
            title: 'New Chart Session',
            createdAt: now,
            updatedAt: now,
            messages: []
        };
    }
    var historySessions = loadHistorySessions();
    var currentSession = createHistorySession();
    var selectedSessionId = null;
    var showHistory = false;
    var promptSuggestions = CHART_SUGGESTIONS.slice();
    var aiAssist = null;
    var requestController = null;
    var activeChart = null;
    var currentChartConfig = null;
    var renderedCharts = new Map();
    var chartPreviewId = 0;
    var latestChartRenderSequence = 0;
    function cloneChartConfig(config) {
        return JSON.parse(JSON.stringify(config));
    }
    function mapAxisType(type) {
        switch ((type || 'category').toLowerCase()) {
            case 'numerical':
            case 'number':
            case 'double':
                return 'Double';
            case 'datetime':
            case 'date':
                return 'DateTime';
            case 'datetimecategory':
            case 'datetime-category':
                return 'DateTimeCategory';
            case 'logarithmic':
            case 'log':
                return 'Logarithmic';
            default:
                return 'Category';
        }
    }
    function mapSeriesType(type) {
        var normalizedType = (type || 'column').toLowerCase().replace(/[\s-]/g, '');
        var types = {
            line: 'Line', column: 'Column', bar: 'Bar', area: 'Area', spline: 'Spline', stepline: 'StepLine', steparea: 'StepArea',
            splinearea: 'SplineArea', multicoloredline: 'MultiColoredLine', multicoloredarea: 'MultiColoredArea',
            rangecolumn: 'RangeColumn', rangearea: 'RangeArea', splinerangearea: 'SplineRangeArea', hilo: 'Hilo',
            hiloopenclose: 'HiloOpenClose', candle: 'Candle', candlestick: 'Candle', boxandwhisker: 'BoxAndWhisker', bubble: 'Bubble',
            scatter: 'Scatter', stackingcolumn: 'StackingColumn', stackedcolumn: 'StackingColumn', stackingcolumn100: 'StackingColumn100',
            stackedcolumn100: 'StackingColumn100', stackingbar: 'StackingBar', stackedbar: 'StackingBar', stackingbar100: 'StackingBar100',
            stackedbar100: 'StackingBar100', stackingarea: 'StackingArea', stackedarea: 'StackingArea', stackingarea100: 'StackingArea100',
            stackedarea100: 'StackingArea100', stackingline: 'StackingLine', stackedline: 'StackingLine', stackingline100: 'StackingLine100',
            stackedline100: 'StackingLine100', stackingsteparea: 'StackingStepArea', pareto: 'Pareto', polar: 'Polar', radar: 'Radar',
            waterfall: 'Waterfall', histogram: 'Histogram'
        };
        return types[normalizedType] || 'Column';
    }
    function mapAccumulationSeriesType(type) {
        switch ((type || 'pie').toLowerCase()) {
            case 'funnel':
                return 'Funnel';
            case 'pyramid':
                return 'Pyramid';
            default:
                return 'Pie';
        }
    }
    function isCircularSeriesType(type) {
        return ['pie', 'doughnut', 'donut', 'funnel', 'pyramid'].includes((type || '').toLowerCase());
    }
    function destroyChartInContainer(container) {
        var existingChart = renderedCharts.get(container);
        if (existingChart && !existingChart.isDestroyed) {
            existingChart.destroy();
        }
        renderedCharts.delete(container);
        if (activeChart === existingChart) {
            activeChart = null;
        }
        container.innerHTML = '';
    }
    function destroyAllCharts() {
        latestChartRenderSequence += 1;
        renderedCharts.forEach(function (chart) {
            if (!chart.isDestroyed) {
                chart.destroy();
            }
        });
        renderedCharts.clear();
        activeChart = null;
    }
    function normalizeAxis(axis, fallbackTitle, fallbackType) {
        var { type, min, max, ...properties } = axis;
        return {
            ...properties,
            title: axis.title || fallbackTitle,
            valueType: mapAxisType(axis.valueType || type || fallbackType),
            minimum: typeof axis.minimum === 'number' ? axis.minimum : typeof min === 'number' ? min : null,
            maximum: typeof axis.maximum === 'number' ? axis.maximum : typeof max === 'number' ? max : null
        };
    }
    function getAdditionalChartProperties(config) {
        var { title, chartType, showLegend, xAxis, yAxis, series, legendSettings, ...additionalProperties } = config;
        return additionalProperties;
    }
    function getCartesianSeries(config) {
        return (config.series || []).map(function (item, index) {
            return ({
                ...item,
                type: mapSeriesType(item.type),
                name: item.name,
                dataSource: item.dataSource || [],
                xName: item.xName || 'xvalue',
                yName: item.yName || 'yvalue',
                fill: item.fill || PALETTE[index % PALETTE.length],
                marker: item.marker || { visible: true, height: 7, width: 7, shape: 'Circle', isFilled: true }
            });
        });
    }
    function getCurrentChartTheme() {
        var themeName = location.hash.split('/')[1] || 'fluent2';
        var themeMap = {
            material: 'Material',
            materialdark: 'MaterialDark',
            fabric: 'Fabric',
            fabricdark: 'FabricDark',
            bootstrap: 'Bootstrap',
            bootstrapdark: 'BootstrapDark',
            bootstrap4: 'Bootstrap4',
            bootstrap5: 'Bootstrap5',
            bootstrap5dark: 'Bootstrap5Dark',
            tailwind: 'Tailwind',
            tailwinddark: 'TailwindDark',
            tailwind3: 'Tailwind3',
            tailwind3dark: 'Tailwind3Dark',
            fluent: 'Fluent',
            fluentdark: 'FluentDark',
            fluent2: 'Fluent2',
            fluent2dark: 'Fluent2Dark',
            highcontrast: 'HighContrast'
        };
        return themeMap[themeName.toLowerCase()] || 'Fluent2';
    }
    function refreshChartsForCurrentTheme() {
        var chartTheme = getCurrentChartTheme();
        renderedCharts.forEach(function (chart, container) {
            if (!chart || chart.isDestroyed || !container || !container.isConnected) {
                return;
            }
            chart.theme = chartTheme;
            chart.refresh();
        });
        setLatestRestoredChartAsActive();
    }
    function buildCartesianChart(container, config) {
        var _a, _b;
        var xAxis = ((_a = config.xAxis) === null || _a === void 0 ? void 0 : _a[0]) || {};
        var yAxis = ((_b = config.yAxis) === null || _b === void 0 ? void 0 : _b[0]) || {};
        var primaryXAxis = normalizeAxis(xAxis, 'Categories', 'category');
        var primaryYAxis = normalizeAxis(yAxis, 'Values', 'numerical');
        primaryXAxis.stripLines = (xAxis.stripLines || []).map(function (stripLine) {
            return ({
                ...stripLine
            });
        });
        primaryYAxis.stripLines = (yAxis.stripLines || []).map(function (stripLine) {
            return ({
                ...stripLine
            });
        });
        var annotations = (config.annotations || []).map(function (annotation) {
            return ({
                ...annotation,
                content: typeof annotation.content === 'string'
                    ? decodeHtmlEntities(annotation.content)
                    : annotation.content
            });
        });
        var indicators = (config.indicators || []).map(function (indicator) {
            var _a, _b;
            var sourceSeries = ((_a = config.series) === null || _a === void 0 ? void 0 : _a.find(function (series) {
                return series.name === indicator.seriesName;
            })) || ((_b = config.series) === null || _b === void 0 ? void 0 : _b[0]);
            return {
                ...indicator,
                seriesName: sourceSeries === null || sourceSeries === void 0 ? void 0 : sourceSeries.name,
                dataSource: indicator.dataSource || (sourceSeries === null || sourceSeries === void 0 ? void 0 : sourceSeries.dataSource) || [],
                xName: indicator.xName || (sourceSeries === null || sourceSeries === void 0 ? void 0 : sourceSeries.xName) || 'xvalue',
                close: indicator.close || (sourceSeries === null || sourceSeries === void 0 ? void 0 : sourceSeries.yName) || 'yvalue',
                period: indicator.period || 14
            };
        });
        var chart = new ej.charts.Chart({
            ...getAdditionalChartProperties(config),
            theme: getCurrentChartTheme(),
            title: config.title || 'Chart',
            chartArea: config.chartArea || {
                border: {
                    width: 0.5
                }
            },
            primaryXAxis,
            primaryYAxis,
            tooltip: config.tooltip || {
                enable: true
            },
            crosshair: config.crosshair,
            zoomSettings: config.zoomSettings,
            selectionMode: config.selectionMode,
            highlightMode: config.highlightMode,
            annotations: annotations,
            indicators: indicators,
            legendSettings: {
                ...(config.legendSettings || {}),
                visible: config.showLegend !== false
            },
            series: getCartesianSeries(config)
        });
        chart.appendTo(container);
        renderedCharts.set(container, chart);
        if (annotations.length) {
            schedulePreviewChartRefresh(chart, container);
        }
    }
    function buildAccumulationChart(container, config) {
        var annotations = (config.annotations || []).map(function (annotation) {
            return ({
                ...annotation,
                content: typeof annotation.content === 'string'
                    ? decodeHtmlEntities(annotation.content)
                    : annotation.content
            });
        });
        var chart = new ej.charts.AccumulationChart({
            ...getAdditionalChartProperties(config),
            title: config.title || 'Chart',
            theme: getCurrentChartTheme(),
            tooltip: config.tooltip || {
                enable: true
            },
            legendSettings: {
                ...(config.legendSettings || {}),
                visible: config.showLegend !== false
            },
            annotations: annotations,
            series: (config.series || []).map(function (item) {
                return ({
                    ...item,
                    type: mapAccumulationSeriesType(item.type),
                    name: item.name,
                    dataSource: item.dataSource || [],
                    xName: item.xName || 'xvalue',
                    yName: item.yName || 'yvalue',
                    innerRadius: item.innerRadius ||
                        (['doughnut', 'donut'].includes((item.type || '').toLowerCase()) ? '70%' : '0%')
                });
            })
        });
        chart.appendTo(container);
        renderedCharts.set(container, chart);
        if (annotations.length) {
            schedulePreviewChartRefresh(chart, container);
        }
    }
    function schedulePreviewChartRefresh(chart, container) {
        window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () {
                var renderedChart = renderedCharts.get(container);
                if (renderedChart === chart &&
                    container.isConnected &&
                    !chart.isDestroyed) {
                    chart.refresh();
                }
            });
        });
    }
    function assignUniqueChartContainerId(container) {
        chartPreviewId += 1;
        container.id = `ai-chart-preview-${Date.now()}-${chartPreviewId}`;
    }
    function renderChartWhenReady(container, config) {
        var attempt = 0;
        var maximumAttempts = 30;
        var renderSequence = ++latestChartRenderSequence;
        var render = function () {
            attempt += 1;
            if (container.isConnected && container.clientWidth > 0 && container.clientHeight > 0) {
                buildChart(container, config);
                var renderedChart = renderedCharts.get(container);
                if (renderSequence === latestChartRenderSequence && renderedChart && !renderedChart.isDestroyed) {
                    activeChart = renderedChart;
                    currentChartConfig = cloneChartConfig(config);
                }
                return;
            }
            if (attempt < maximumAttempts) {
                window.requestAnimationFrame(render);
            }
        };
        window.requestAnimationFrame(render);
    }
    function refreshRestoredCharts() {
        renderedCharts.forEach(function (chart, container) {
            if (container.isConnected && container.clientWidth > 0 && container.clientHeight > 0 && !chart.isDestroyed) {
                chart.refresh();
            }
        });
    }
    function setLatestRestoredChartAsActive() {
        var charts = Array.from(renderedCharts.entries());
        var latestEntry = charts[charts.length - 1];
        if (latestEntry && !latestEntry[1].isDestroyed) {
            activeChart = latestEntry[1];
        }
    }
    function buildChart(container, config) {
        destroyChartInContainer(container);
        assignUniqueChartContainerId(container);
        if (config.chartType === 'circular') {
            buildAccumulationChart(container, config);
        }
        else {
            buildCartesianChart(container, config);
        }
    }
    function getChartConfigFromResponse(data) {
        var _a, _b, _c, _d;
        if (!data) {
            return null;
        }
        if (data.ChartConfig || data.chartConfig) {
            return data.ChartConfig || data.chartConfig;
        }
        if (data.props && data.properties) {
            return { ...data.props, ...data.properties, series: data.properties.series || data.props.series };
        }
        if ((_a = data.props) === null || _a === void 0 ? void 0 : _a.properties) {
            return { ...data.props, ...data.props.properties, series: data.props.properties.series };
        }
        if (Array.isArray(data.blocks)) {
            var block = data.blocks.find(function (item) {
                return (item === null || item === void 0 ? void 0 : item.blockType) === 'tool' && (item === null || item === void 0 ? void 0 : item.toolName) === 'chart-tool';
            });
            return ((_b = block === null || block === void 0 ? void 0 : block.props) === null || _b === void 0 ? void 0 : _b.ChartConfig) || ((_c = block === null || block === void 0 ? void 0 : block.props) === null || _c === void 0 ? void 0 : _c.chartConfig) || (block === null || block === void 0 ? void 0 : block.props) || null;
        }
        if ((_d = data.properties) === null || _d === void 0 ? void 0 : _d.series) {
            return { ...data, ...data.properties, series: data.properties.series };
        }
        return Array.isArray(data.series) ? data : null;
    }
    function normalizeDataSource(dataSource) {
        if (!Array.isArray(dataSource)) {
            return [];
        }
        return dataSource.reduce(function (points, point) {
            var _a, _b, _c, _d, _e, _f, _g;
            var xvalue = (_d = (_c = (_b = (_a = point === null || point === void 0 ? void 0 : point.xvalue) !== null && _a !== void 0 ? _a : point === null || point === void 0 ? void 0 : point.xValue) !== null && _b !== void 0 ? _b : point === null || point === void 0 ? void 0 : point.x) !== null && _c !== void 0 ? _c : point === null || point === void 0 ? void 0 : point.category) !== null && _d !== void 0 ? _d : point === null || point === void 0 ? void 0 : point.label;
            var rawYValue = (_g = (_f = (_e = point === null || point === void 0 ? void 0 : point.yvalue) !== null && _e !== void 0 ? _e : point === null || point === void 0 ? void 0 : point.yValue) !== null && _f !== void 0 ? _f : point === null || point === void 0 ? void 0 : point.y) !== null && _g !== void 0 ? _g : point === null || point === void 0 ? void 0 : point.value;
            var yvalue = typeof rawYValue === 'number' ? rawYValue : Number(rawYValue);
            if (xvalue !== undefined && xvalue !== null && Number.isFinite(yvalue)) {
                points.push({ ...point, xvalue: xvalue, yvalue });
            }
            return points;
        }, []);
    }
    function normalizeSeries(series) {
        if (!Array.isArray(series)) {
            return [];
        }
        return series.reduce(function (result, item, index) {
            var _a, _b;
            var dataSource = normalizeDataSource((_b = (_a = item === null || item === void 0 ? void 0 : item.dataSource) !== null && _a !== void 0 ? _a : item === null || item === void 0 ? void 0 : item.data) !== null && _b !== void 0 ? _b : item === null || item === void 0 ? void 0 : item.points);
            if (dataSource.length) {
                result.push({ ...item, name: (item === null || item === void 0 ? void 0 : item.name) || `Series ${index + 1}`, type: (item === null || item === void 0 ? void 0 : item.type) || 'column', dataSource });
            }
            return result;
        }, []);
    }
    function normalizeConfig(data) {
        var responseConfig = getChartConfigFromResponse(data);
        if (!responseConfig) {
            return null;
        }
        var series = normalizeSeries(responseConfig.series || []);
        if (!series.length) {
            return null;
        }
        var requestedChartType = String(responseConfig.chartType || '').toLowerCase();
        var chartType = requestedChartType === 'circular' || requestedChartType === 'cartesian'
            ? requestedChartType
            : series.some(function (item) {
                return isCircularSeriesType(item.type);
            }) ? 'circular' : 'cartesian';
        var config = {
            ...responseConfig,
            title: responseConfig.title || (data === null || data === void 0 ? void 0 : data.Text) || (data === null || data === void 0 ? void 0 : data.text) || 'Generated Chart',
            chartType,
            showLegend: responseConfig.showLegend !== false,
            tooltip: responseConfig.tooltip || { enable: true },
            series
        };
        if (chartType === 'cartesian') {
            config.xAxis = Array.isArray(responseConfig.xAxis) && responseConfig.xAxis.length
                ? responseConfig.xAxis
                : [{ type: 'category', title: 'Categories' }];
            config.yAxis = Array.isArray(responseConfig.yAxis) && responseConfig.yAxis.length
                ? responseConfig.yAxis
                : [{ type: 'numerical', title: 'Values' }];
        }
        return config;
    }
    function normalizeChartPrompt(prompt) {
        return prompt.toLowerCase().replace(/\bstipline\b/g, 'stripline').replace(/\bstrip\s+line\b/g, 'stripline')
            .replace(/\bpriod\b|\bperod\b/g, 'period').replace(/\bx[\s_-]*axis\b/g, 'x-axis').replace(/\by[\s_-]*axis\b/g, 'y-axis')
            .replace(/\s+/g, ' ').trim();
    }
    function isStripLineRequest(prompt) {
        return /\bstripline\b/.test(normalizeChartPrompt(prompt));
    }
    function getRequestedSeriesType(prompt) {
        var _a;
        var text = normalizeChartPrompt(prompt);
        if (isStripLineRequest(text))
            return undefined;
        var rules = [
            { keywords: ['100% stacked column', 'stacking column 100'], type: 'StackingColumn100' },
            { keywords: ['stacked column', 'stacking column'], type: 'StackingColumn' },
            { keywords: ['100% stacked bar', 'stacking bar 100'], type: 'StackingBar100' },
            { keywords: ['stacked bar', 'stacking bar'], type: 'StackingBar' },
            { keywords: ['100% stacked area', 'stacking area 100'], type: 'StackingArea100' },
            { keywords: ['stacked area', 'stacking area'], type: 'StackingArea' },
            { keywords: ['100% stacked line', 'stacking line 100'], type: 'StackingLine100' },
            { keywords: ['stacked line', 'stacking line'], type: 'StackingLine' },
            { keywords: ['doughnut', 'donut'], type: 'Doughnut' }, { keywords: ['funnel'], type: 'Funnel' },
            { keywords: ['pyramid'], type: 'Pyramid' }, { keywords: ['pie'], type: 'Pie' },
            { keywords: ['spline'], type: 'Spline' }, { keywords: ['column'], type: 'Column' },
            { keywords: ['bar'], type: 'Bar' }, { keywords: ['area'], type: 'Area' }, { keywords: ['line'], type: 'Line' }
        ];
        return (_a = rules.find(function (rule) {
            return rule.keywords.some(function (keyword) {
                return text.includes(keyword);
            });
        })) === null || _a === void 0 ? void 0 : _a.type;
    }
    function getRequestedIndicatorType(prompt) {
        var _a;
        var text = prompt.toLowerCase();
        var rules = [
            { keywords: ['bollinger band', 'bollinger'], type: 'BollingerBands' },
            { keywords: ['accumulation distribution', 'ad indicator'], type: 'AccumulationDistribution' },
            { keywords: ['stochastic'], type: 'Stochastic' },
            { keywords: ['momentum'], type: 'Momentum' },
            { keywords: ['macd'], type: 'Macd' },
            { keywords: ['atr', 'average true range'], type: 'Atr' },
            { keywords: ['rsi', 'relative strength index'], type: 'Rsi' },
            { keywords: ['ema', 'exponential moving average'], type: 'Ema' },
            { keywords: ['tma', 'triangular moving average'], type: 'Tma' },
            { keywords: ['sma', 'simple moving average'], type: 'Sma' }
        ];
        return (_a = rules.find(function (rule) {
            return rule.keywords.some(function (keyword) {
                return text.includes(keyword);
            });
        })) === null || _a === void 0 ? void 0 : _a.type;
    }
    function isGenericIndicatorRequest(prompt) {
        return /\bindicator\b/i.test(prompt) && !getRequestedIndicatorType(prompt);
    }
    function getIndicatorClarificationMessage() {
        return [
            'Please specify the indicator type to add.',
            'Supported indicators include SMA, EMA, TMA, RSI, ATR, MACD, Momentum, Stochastic, Bollinger Bands, and Accumulation Distribution.',
            'For example: "Add an SMA indicator with period 3."'
        ].join(' ');
    }
    function addIndicator(config, prompt) {
        var _a;
        var text = normalizeChartPrompt(prompt);
        var indicatorType = getRequestedIndicatorType(text);
        var sourceSeries = (_a = config.series) === null || _a === void 0 ? void 0 : _a[0];
        if (!indicatorType || !sourceSeries || config.chartType === 'circular')
            return null;
        var updated = cloneChartConfig(config);
        var periodMatch = text.match(/\bperiod\s*(?:=|:|of|to|as)?\s*(\d+)\b/i);
        var indicator = {
            type: indicatorType,
            seriesName: sourceSeries.name,
            dataSource: sourceSeries.dataSource || [],
            xName: sourceSeries.xName || 'xvalue',
            close: sourceSeries.close || sourceSeries.yName || 'yvalue',
            period: periodMatch ? Math.max(Number(periodMatch[1]), 1) : 14,
            fill: '#6063ff',
            width: 2
        };
        var duplicateIndex = (updated.indicators || []).findIndex(function (existing) {
            return existing.type === indicator.type && existing.seriesName === indicator.seriesName;
        });
        if (duplicateIndex === -1)
            updated.indicators = [...(updated.indicators || []), indicator];
        else
            updated.indicators[duplicateIndex] = { ...updated.indicators[duplicateIndex], ...indicator };
        return updated;
    }
    function updateIndicatorPeriod(config, prompt) {
        var _a;
        if (!((_a = config.indicators) === null || _a === void 0 ? void 0 : _a.length))
            return null;
        var match = normalizeChartPrompt(prompt).match(/\bperiod\s*(?:as|to|=|:)?\s*(\d+)\b/i);
        if (!match)
            return null;
        var updated = cloneChartConfig(config);
        var index = updated.indicators.length - 1;
        updated.indicators[index] = { ...updated.indicators[index], period: Math.max(Number(match[1]), 1) };
        return updated;
    }
    function isSeriesTypeConversionRequest(prompt) {
        return Boolean(getRequestedSeriesType(prompt)) && /\b(change|convert|make|set|update)\b/i.test(prompt) &&
            /\b(chart|series|type|to|as|into|it|this)\b/i.test(prompt);
    }
    function convertSeriesType(config, requestedType) {
        var _a;
        var updated = cloneChartConfig(config);
        var circular = isCircularSeriesType(requestedType);
        updated.chartType = circular ? 'circular' : 'cartesian';
        updated.series = (_a = updated.series) === null || _a === void 0 ? void 0 : _a.map(function (series) {
            return ({ ...series, type: requestedType });
        });
        if (circular) {
            delete updated.xAxis;
            delete updated.yAxis;
            delete updated.indicators;
        }
        return updated;
    }
    function decodeHtmlEntities(value) {
        return value
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&amp;/g, '&');
    }
    function normalizeAnnotationCategory(value) {
        return String(value !== null && value !== void 0 ? value : '').trim().toLowerCase().replace(/[._-]+/g, ' ').replace(/([a-z])\s+(\d)/g, '$1$2')
            .replace(/(\d)\s+([a-z])/g, '$1$2').replace(/\s+/g, ' ');
    }
    function resolveAnnotationCategory(config, requestedValue) {
        var _a;
        var point = (_a = config.series) === null || _a === void 0 ? void 0 : _a.flatMap(function (series) {
            return series.dataSource || [];
        }).find(function (item) {
            return normalizeAnnotationCategory(item.xvalue) === normalizeAnnotationCategory(requestedValue);
        });
        return (point === null || point === void 0 ? void 0 : point.xvalue) || requestedValue;
    }
    function parseAnnotationRequest(prompt, config) {
        var text = normalizeChartPrompt(prompt);
        var result = {};
        var naturalMatch = text.match(/\bannotation\s+(?:as|text\s+(?:as|to)|content\s+(?:as|to))\s+["']?(.+?)["']?\s+(?:in|at|on)\s+["']?(.+?)["']?\s+(?:and|,|at|y|value)\s*(-?\d+(?:\.\d+)?)\s*$/i);
        if (naturalMatch) {
            result.content = `<div class="chart-annotation">${escapeHtml(naturalMatch[1].trim())}</div>`;
            result.x = resolveAnnotationCategory(config, naturalMatch[2].trim());
            result.y = Number(naturalMatch[3]);
            return result;
        }
        var xMatch = text.match(/\b(?:annotation\s+)?x\s*(?:as|to|=|:)\s*["']?(.+?)["']?(?=\s+(?:and\s+)?(?:y|text|content)\b|$)/i);
        var yMatch = text.match(/\b(?:annotation\s+)?(?:y|value)\s*(?:as|to|=|:)\s*(-?\d+(?:\.\d+)?)/i);
        var contentMatch = prompt.match(/\b(?:annotation\s+)?(?:text|content|label)\s*(?:as|to|=|:)\s*["']?(.+?)["']?(?=\s+(?:and\s+)?(?:x|y|at|value)\b|$)/i);
        if (xMatch === null || xMatch === void 0 ? void 0 : xMatch[1])
            result.x = resolveAnnotationCategory(config, xMatch[1].trim());
        if (yMatch === null || yMatch === void 0 ? void 0 : yMatch[1])
            result.y = Number(yMatch[1]);
        if (contentMatch === null || contentMatch === void 0 ? void 0 : contentMatch[1])
            result.content = `<div class="chart-annotation">${escapeHtml(decodeHtmlEntities(contentMatch[1].trim()))}</div>`;
        return result;
    }
    function addAnnotation(config, prompt) {
        var _a, _b, _c, _d, _e, _f, _g;
        var updated = cloneChartConfig(config);
        var firstPoint = (_c = (_b = (_a = updated.series) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.dataSource) === null || _c === void 0 ? void 0 : _c[0];
        var request = parseAnnotationRequest(prompt, updated);
        updated.annotations = [...(updated.annotations || []), {
                content: request.content || '<div class="chart-annotation">Annotation</div>',
                coordinateUnits: 'Point', region: 'Chart', x: (_e = (_d = request.x) !== null && _d !== void 0 ? _d : firstPoint === null || firstPoint === void 0 ? void 0 : firstPoint.xvalue) !== null && _e !== void 0 ? _e : 0, y: (_g = (_f = request.y) !== null && _f !== void 0 ? _f : firstPoint === null || firstPoint === void 0 ? void 0 : firstPoint.yvalue) !== null && _g !== void 0 ? _g : 0
            }];
        return updated;
    }
    function updateExistingAnnotation(config, prompt) {
        var _a;
        if (!((_a = config.annotations) === null || _a === void 0 ? void 0 : _a.length))
            return null;
        var updated = cloneChartConfig(config);
        var request = parseAnnotationRequest(prompt, updated);
        if (request.content === undefined && request.x === undefined && request.y === undefined)
            return null;
        var index = updated.annotations.length - 1;
        var annotation = { ...updated.annotations[index] };
        if (request.content !== undefined)
            annotation.content = request.content;
        else if (typeof annotation.content === 'string')
            annotation.content = decodeHtmlEntities(annotation.content);
        if (request.x !== undefined)
            annotation.x = request.x;
        if (request.y !== undefined)
            annotation.y = request.y;
        updated.annotations[index] = annotation;
        return updated;
    }
    function addDataPoint(config, prompt) {
        var patterns = [
            /\b(?:add|insert|append|include)\s+["']?(.+?)["']?\s+(?:with\s+)?(?:a\s+)?value\s+(?:of\s+)?(-?\d+(?:\.\d+)?)\b/i,
            /\b(?:add|insert|append|include)\s+["']?(.+?)["']?\s*(?:=|:)\s*(-?\d+(?:\.\d+)?)\b/i,
            /\b(?:add|insert|append|include)\s+["']?([a-z][a-z0-9 ._-]*?)["']?\s+(-?\d+(?:\.\d+)?)\b/i
        ];
        var match = null;
        for (var index = 0; index < patterns.length; index++) {
            match = prompt.match(patterns[index]);
            if (match) {
                break;
            }
        }
        if (!match || !config.series || !config.series.length) {
            return null;
        }
        var category = match[1].trim();
        var value = Number(match[2]);
        if (!category || !Number.isFinite(value)) {
            return null;
        }
        var updated = cloneChartConfig(config);
        var series = updated.series[0];
        var existingPoint = (series.dataSource || []).find(function (point) {
            return normalizeCategoryValue(point.xvalue) === normalizeCategoryValue(category);
        });
        if (existingPoint) {
            existingPoint.yvalue = value;
        }
        else {
            series.dataSource = [
                ...(series.dataSource || []),
                { xvalue: category, yvalue: value }
            ];
        }
        return updated;
    }
    function getDataAdditionClarification(prompt) {
        var text = normalizeChartPrompt(prompt);
        var countMatch = text.match(/\badd\s+(\d+)\s+(?:data|datas|points?|datapoints?|data points?)\b/);
        if (countMatch) {
            return `Please provide the categories and values for the ${countMatch[1]} new data points. ` +
                'For example: "Add July 10500, August 11200, and September 11800."';
        }
        if (/\b(add|append|insert|include)\b/.test(text) &&
            /\b(data|datas|point|points|datapoint|datapoints|data point|data points)\b/.test(text) &&
            !/-?\d+(?:\.\d+)?/.test(text)) {
            return 'Please specify the category and value for the new data point. For example: "Add July with a value of 10500."';
        }
        return null;
    }
    function isIncompleteCreateRequest(prompt) {
        return /^(create|generate|build|draw|make)$/i.test(String(prompt || '').trim());
    }
    function applyLocalChartModification(prompt, config) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
        var text = normalizeChartPrompt(prompt);
        var updated = cloneChartConfig(config);
        var enabling = /\b(add|show|enable|apply|create|insert)\b/.test(text);
        var disabling = /\b(remove|hide|disable|delete|clear)\b/.test(text);
        var editing = /\b(change|update|modify|set|replace|edit)\b/.test(text);

        // Handle chart dimension properties
        var sizeMatch = text.match(/\b(width|height)\s+(?:to\s+)?(\d+(?:px|%|em|rem)?)\b/i);
        if (sizeMatch) {
            var dimension = sizeMatch[1].toLowerCase();
            updated[dimension] = sizeMatch[2];
            return updated;
        }

        // Handle chart theme
        var themeMatch = text.match(/\b(theme|set.*theme)\s+(material|fabric|bootstrap|highcontrast|tailwind|fluent)\b/i);
        if (themeMatch) {
            updated.theme = themeMatch[2].charAt(0).toUpperCase() + themeMatch[2].slice(1).toLowerCase();
            return updated;
        }

        // Handle enableCanvas property
        if (text.includes('enable canvas') || text.includes('disable canvas')) {
            updated.enableCanvas = text.includes('enable canvas');
            return updated;
        }

        // Handle isTransposed property
        if (text.includes('transpose') || text.includes('is transposed')) {
            var enabling = /\b(enable|set|make)\b/.test(text);
            var disabling = /\b(disable|remove|unset)\b/.test(text);
            if (enabling || disabling) {
                updated.isTransposed = enabling;
                return updated;
            }
        }

        // Handle background color
        var bgMatch = text.match(/\b(background|bgcolor|background color)\s+(.*)$/i);
        if (bgMatch) {
            updated.background = bgMatch[2].trim();
            return updated;
        }

        // Handle title
        var titleMatch = text.match(/\b(title)\s+(.*)$/i);
        if (titleMatch && !text.includes('axis')) {
            updated.title = titleMatch[2].trim();
            return updated;
        }

        // Handle subtitle
        var subTitleMatch = text.match(/\bsubtitle\s+(.*)$/i);
        if (subTitleMatch) {
            updated.subTitle = subTitleMatch[1].trim();
            return updated;
        }

        // Handle border
        var borderMatch = text.match(/\b(border)\s+(.*)$/i);
        if (borderMatch) {
            var borderParts = borderMatch[2].trim().split(/\s+/);
            var borderWidth = parseFloat(borderParts.find(function (part) { return /^\d+px$/.test(part); }) || '1px');
            var borderColor = borderParts.find(function (part) { return /^#[0-9a-fA-F]{6}$|^rgb\(|^rgba\(|^[a-zA-Z]+$/.test(part); }) || '#000000';
            
            updated.border = Object.assign(Object.assign({}, (updated.border || {})), {
                width: borderWidth,
                color: borderColor
            });
            return updated;
        }

        // Handle margin
        var marginMatch = text.match(/\bmargin\s+(-?\d+(?:\.\d+)?)\b/i);
        if (marginMatch) {
            var marginValue = parseFloat(marginMatch[1]);
            updated.margin = Object.assign(Object.assign({}, (updated.margin || {})), {
                left: marginValue,
                right: marginValue,
                top: marginValue,
                bottom: marginValue
            });
            return updated;
        }

        // Handle palette
        var paletteMatch = text.match(/\bpalette\s+(.*)$/i);
        if (paletteMatch && updated.series) {
            var colors = paletteMatch[1].split(/[,;]/).map(function (color) { return color.trim(); });
            if (colors.length > 0) {
                updated.palette = colors;
                // Apply colors to series
                updated.series = updated.series.map(function (series, index) { return (Object.assign(Object.assign({}, series), {
                    fill: colors[index % colors.length]
                })); });
            }
            return updated;
        }

        // Handle axis properties
        if (text.includes('axis') && (config.xAxis || config.yAxis)) {
            // Handle axis title
            var axisTitleMatch = text.match(/\b(xaxis|yaxis).*title\s+(.*)$/i);
            if (axisTitleMatch) {
                var axisType = axisTitleMatch[1].toLowerCase();
                var title = axisTitleMatch[2].trim();
                
                if (axisType === 'xaxis' && ((_a = updated.xAxis) === null || _a === void 0 ? void 0 : _a[0])) {
                    updated.xAxis[0].title = title;
                } else if (axisType === 'yaxis' && ((_b = updated.yAxis) === null || _b === void 0 ? void 0 : _b[0])) {
                    updated.yAxis[0].title = title;
                }
                return updated;
            }
            
            // Handle axis label rotation
            var rotationMatch = text.match(/\b(xaxis|yaxis).*rotation\s+(-?\d+)/i);
            if (rotationMatch) {
                var axisType = rotationMatch[1].toLowerCase();
                var rotation = parseInt(rotationMatch[2]);
                
                if (axisType === 'xaxis' && ((_c = updated.xAxis) === null || _c === void 0 ? void 0 : _c[0])) {
                    updated.xAxis[0].labelRotation = rotation;
                } else if (axisType === 'yaxis' && ((_d = updated.yAxis) === null || _d === void 0 ? void 0 : _d[0])) {
                    updated.yAxis[0].labelRotation = rotation;
                }
                return updated;
            }
            
            // Handle axis range (min/max)
            var rangeMatch = text.match(/\b(xaxis|yaxis).*range\s+from\s+(-?\d+(?:\.\d+)?)\s+to\s+(-?\d+(?:\.\d+)?)/i);
            if (rangeMatch) {
                var axisType = rangeMatch[1].toLowerCase();
                var min = parseFloat(rangeMatch[2]);
                var max = parseFloat(rangeMatch[3]);
                
                if (axisType === 'xaxis' && ((_e = updated.xAxis) === null || _e === void 0 ? void 0 : _e[0])) {
                    updated.xAxis[0].minimum = min;
                    updated.xAxis[0].maximum = max;
                } else if (axisType === 'yaxis' && ((_f = updated.yAxis) === null || _f === void 0 ? void 0 : _f[0])) {
                    updated.yAxis[0].minimum = min;
                    updated.yAxis[0].maximum = max;
                }
                return updated;
            }
            
            // Handle axis visibility
            if (text.includes('hide axis') || text.includes('show axis')) {
                var showAxis = text.includes('show axis');
                var axisTypeMatch = text.match(/\b(xaxis|yaxis)\b/i);
                
                if (axisTypeMatch) {
                    var axisType = axisTypeMatch[1].toLowerCase();
                    if (axisType === 'xaxis' && ((_g = updated.xAxis) === null || _g === void 0 ? void 0 : _g[0])) {
                        updated.xAxis[0].visible = showAxis;
                    } else if (axisType === 'yaxis' && ((_h = updated.yAxis) === null || _h === void 0 ? void 0 : _h[0])) {
                        updated.yAxis[0].visible = showAxis;
                    }
                } else {
                    // Apply to both axes if no specific axis mentioned
                    if ((_j = updated.xAxis) === null || _j === void 0 ? void 0 : _j[0]) {
                        updated.xAxis[0].visible = showAxis;
                    }
                    if ((_k = updated.yAxis) === null || _k === void 0 ? void 0 : _k[0]) {
                        updated.yAxis[0].visible = showAxis;
                    }
                }
                return updated;
            }
        }

        // Handle series properties
        if (text.includes('series') && updated.series) {
            // Handle series name
            var seriesNameMatch = text.match(/\bseries\s+(\d+)\s+name\s+(.*)$/i);
            if (seriesNameMatch && updated.series) {
                var seriesIndex = parseInt(seriesNameMatch[1]) - 1;
                var name = seriesNameMatch[2].trim();
                
                if (seriesIndex >= 0 && seriesIndex < updated.series.length) {
                    updated.series[seriesIndex].name = name;
                }
                return updated;
            }
            
            // Handle series color/fill
            var seriesFillMatch = text.match(/\bseries\s+(\d+)\s+(?:color|fill)\s+(.*)$/i);
            if (seriesFillMatch && updated.series) {
                var seriesIndex = parseInt(seriesFillMatch[1]) - 1;
                var fill = seriesFillMatch[2].trim();
                
                if (seriesIndex >= 0 && seriesIndex < updated.series.length) {
                    updated.series[seriesIndex].fill = fill;
                }
                return updated;
            }
            
            // Handle series width
            var seriesWidthMatch = text.match(/\bseries\s+(\d+)\s+width\s+(\d+(?:\.\d+)?)/i);
            if (seriesWidthMatch && updated.series) {
                var seriesIndex = parseInt(seriesWidthMatch[1]) - 1;
                var width = parseFloat(seriesWidthMatch[2]);
                
                if (seriesIndex >= 0 && seriesIndex < updated.series.length) {
                    updated.series[seriesIndex].width = width;
                }
                return updated;
            }
        }

        // Handle marker properties
        if (text.includes('marker')) {
            var markerSizeMatch = text.match(/\bmarker\s+size\s+(\d+(?:\.\d+)?)/i);
            if (markerSizeMatch && updated.series) {
                var size = parseFloat(markerSizeMatch[1]);
                updated.series = updated.series.map(function (series) { return (Object.assign(Object.assign({}, series), {
                    marker: Object.assign(Object.assign({}, (series.marker || {})), {
                        height: size,
                        width: size
                    })
                })); });
                return updated;
            }
            
            var markerShapeMatch = text.match(/\bmarker\s+shape\s+(\w+)/i);
            if (markerShapeMatch && updated.series) {
                var shape = markerShapeMatch[1];
                updated.series = updated.series.map(function (series) { return (Object.assign(Object.assign({}, series), {
                    marker: Object.assign(Object.assign({}, (series.marker || {})), {
                        shape: shape
                    })
                })); });
                return updated;
            }
        }

        // Handle scrollbar settings
        if (text.includes('scrollbar')) {
            if (!updated.zoomSettings) {
                updated.zoomSettings = {};
            }
            
            if (enabling) {
                updated.zoomSettings.enableScrollbarOnZooming = true;
            } else if (disabling) {
                updated.zoomSettings.enableScrollbarOnZooming = false;
            }
            return updated;
        }

        // Handle stack label settings
        if (text.includes('stack label') || text.includes('stacklabel')) {
            if (!updated.primaryYAxis) {
                updated.primaryYAxis = {};
            }
            
            if (!updated.primaryYAxis.stackLabelSettings) {
                updated.primaryYAxis.stackLabelSettings = {};
            }
            
            if (enabling) {
                updated.primaryYAxis.stackLabelSettings.visible = true;
            } else if (disabling) {
                updated.primaryYAxis.stackLabelSettings.visible = false;
            }
            return updated;
        }

        if (text.includes('legend') && (enabling || disabling)) {
            updated.showLegend = enabling;
            return updated;
        }

        if (text.includes('crosshair') && (enabling || disabling)) {
            updated.crosshair = Object.assign(Object.assign({}, (updated.crosshair || {})), {
                enable: enabling,
                lineType: ((_l = updated.crosshair) === null || _l === void 0 ? void 0 : _l.lineType) || 'Both'
            });
            return updated;
        }

        if (text.includes('tooltip') && (enabling || disabling)) {
            updated.tooltip = Object.assign(Object.assign({}, (updated.tooltip || {})), {
                enable: enabling
            });
            return updated;
        }

        if ((text.includes('data label') || text.includes('datalabel')) && (enabling || disabling)) {
            updated.series = (_m = updated.series) === null || _m === void 0 ? void 0 : _m.map(function (series) {
                var _a;
                return updated.chartType === 'circular'
                    ? {
                        ...series,
                        dataLabel: {
                            ...(series.dataLabel || {}),
                            visible: enabling
                        }
                    }
                    : {
                        ...series,
                        marker: {
                            ...(series.marker || {}),
                            dataLabel: {
                                ...(((_a = series.marker) === null || _a === void 0 ? void 0 : _a.dataLabel) || series.dataLabel || {}),
                                visible: enabling
                            }
                        }
                    };
            });
            return updated;
        }

        // Handle data label font properties
        if ((text.includes('data label') || text.includes('datalabel')) && text.includes('font')) {
            var fontSizeMatch = text.match(/\bfont\s*size\s*(\d+(?:\.\d+)?)(px|pt|em)?\b/i);
            var fontFamilyMatch = text.match(/\bfont\s*family\s*(['"]?)([^'"]+?)\1\b/i);
            var fontWeightMatch = text.match(/\bfont\s*weight\s*(\w+)\b/i);
            var fontStyleMatch = text.match(/\bfont\s*style\s*(\w+)\b/i);
            var fontColorMatch = text.match(/\bfont\s*color\s*(#[0-9a-fA-F]{3,8}|[a-zA-Z]+)/i);

            updated.series = (_o = updated.series) === null || _o === void 0 ? void 0 : _o.map(function (series) {
                var newDataLabel = Object.assign(Object.assign({}, (series.dataLabel || {})), {
                    visible: (_p = series.dataLabel) === null || _p === void 0 ? void 0 : _p.visible !== false // Keep visible if already set, otherwise default to true
                });

                // Handle font size
                if (fontSizeMatch) {
                    if (!newDataLabel.font) newDataLabel.font = {};
                    newDataLabel.font.size = "".concat(fontSizeMatch[1]).concat(fontSizeMatch[2] || 'px');
                }

                // Handle font family
                if (fontFamilyMatch) {
                    if (!newDataLabel.font) newDataLabel.font = {};
                    newDataLabel.font.family = fontFamilyMatch[2];
                }

                // Handle font weight
                if (fontWeightMatch) {
                    if (!newDataLabel.font) newDataLabel.font = {};
                    newDataLabel.font.weight = fontWeightMatch[1];
                }

                // Handle font style
                if (fontStyleMatch) {
                    if (!newDataLabel.font) newDataLabel.font = {};
                    newDataLabel.font.style = fontStyleMatch[1];
                }

                // Handle font color
                if (fontColorMatch) {
                    newDataLabel.fill = fontColorMatch[1];
                }

                if (updated.chartType === 'circular') {
                    return Object.assign(Object.assign({}, series), {
                        dataLabel: newDataLabel
                    });
                } else {
                    return Object.assign(Object.assign({}, series), {
                        marker: Object.assign(Object.assign({}, (series.marker || {})), {
                            dataLabel: newDataLabel
                        })
                    });
                }
            });

            return updated;
        }

        if (text.includes('zoom') && (enabling || disabling)) {
            updated.zoomSettings = Object.assign(Object.assign({}, (updated.zoomSettings || {})), {
                enableSelectionZooming: enabling,
                enableMouseWheelZooming: enabling,
                enablePinchZooming: enabling,
                enablePan: enabling
            });
            return updated;
        }

        if (text.includes('selection') && (enabling || disabling)) {
            updated.selectionMode = enabling ? 'Point' : 'None';
            return updated;
        }

        if (text.includes('highlight') && (enabling || disabling)) {
            updated.highlightMode = enabling ? 'Point' : 'None';
            return updated;
        }

        if (text.includes('annotation') && disabling) {
            updated.annotations = [];
            return updated;
        }
        if (text.includes('annotation') && editing) {
            var changedAnnotation = updateExistingAnnotation(updated, prompt);
            if (changedAnnotation)
                return changedAnnotation;
        }
        if (text.includes('annotation') && enabling)
            return addAnnotation(updated, prompt);

        if ((text.includes('stripline') || text.includes('strip line')) && disabling) {
            return removeStripLines(updated);
        }

        if ((text.includes('stripline') || text.includes('strip line')) && enabling) {
            return addStripLine(updated, prompt);
        }

        if (/\bperiod\b/.test(text) && editing) {
            var changedIndicator = updateIndicatorPeriod(updated, text);
            if (changedIndicator)
                return changedIndicator;
        }
        if (getRequestedIndicatorType(prompt) && /\b(add|show|enable|apply)\b/i.test(prompt)) {
            return addIndicator(updated, prompt);
        }

        if (text.includes('indicator') && disabling) {
            updated.indicators = [];
            return updated;
        }

        var requestedSeriesType = getRequestedSeriesType(prompt);
        if (requestedSeriesType && isSeriesTypeConversionRequest(prompt)) {
            return convertSeriesType(updated, requestedSeriesType);
        }

        var addedDataPoint = addDataPoint(updated, prompt);
        if (addedDataPoint) {
            return addedDataPoint;
        }

        var dataMatch = prompt.match(/(?:change|update|set|replace)\s+(.+?)\s+(?:to|as)\s+(-?\d+(?:\.\d+)?)/i);
        if (dataMatch) {
            var category = dataMatch[1].trim().toLowerCase();
            var value = Number(dataMatch[2]);
            var changed = false;
            (_q = updated.series) === null || _q === void 0 ? void 0 : _q.forEach(function (series) {
                var _a;
                (_a = series.dataSource) === null || _a === void 0 ? void 0 : _a.forEach(function (point) {
                    if (String(point.xvalue).toLowerCase() === category) {
                        point.yvalue = value;
                        changed = true;
                    }
                });
            });
            return changed ? updated : null;
        }

        return null;
    }
    function applyRequestedSeriesType(config, prompt) {
        var _a;
        var requestedType = getRequestedSeriesType(prompt);
        if (!requestedType || !((_a = config.series) === null || _a === void 0 ? void 0 : _a.length)) {
            return config;
        }
        var circular = isCircularSeriesType(requestedType);
        return {
            ...config,
            chartType: circular ? 'circular' : 'cartesian',
            xAxis: circular ? undefined : config.xAxis,
            yAxis: circular ? undefined : config.yAxis,
            series: config.series.map(function (series) {
                return ({ ...series, type: requestedType });
            })
        };
    }
    function applyPublicMethod(prompt, config) {
        var text = normalizeChartPrompt(prompt);
        var updated = cloneChartConfig(config);
        
        // Handle export method
        if (text.includes('export') && /\b(png|jpeg|svg|pdf|xlsx|csv)\b/i.test(text)) {
            // This would be handled by calling the export method on the chart instance
            // For now, we'll just return the config as-is since export doesn't change the config
            return updated;
        }
        
        // Handle print method
        if (text.includes('print') || text.includes('print chart')) {
            // This would be handled by calling the print method on the chart instance
            // For now, we'll just return the config as-is since print doesn't change the config
            return updated;
        }
        
        // Handle addSeries method
        if (text.includes('add series') || text.includes('add new series')) {
            // Extract series details from the prompt
            var seriesTypeMatch = text.match(/\b(line|column|bar|area|spline|stepline|steparea|splinearea|rangecolumn|rangearea|bubble|scatter|stackingcolumn|stackingcolumn100|stackingbar|stackingbar100|stackingarea|stackingarea100|stackingline|stackingline100|pie|doughnut|funnel|pyramid)\b/i);
            if (seriesTypeMatch && updated.series) {
                var seriesType = seriesTypeMatch[1];
                var circular = ['pie', 'doughnut', 'funnel', 'pyramid'].includes(seriesType);
                
                // Add a new series with default values
                var newSeries = {
                    type: seriesType,
                    name: "Series ".concat((updated.series.length + 1)),
                    dataSource: []
                };
                
                // Add default data points if it's a circular chart
                if (circular && updated.series[0] && updated.series[0].dataSource) {
                    // Copy data structure from existing series
                    newSeries.dataSource = updated.series[0].dataSource.map(function (point, index) { return (Object.assign(Object.assign({}, point), {
                        yvalue: point.yvalue * (0.5 + Math.random() * 0.5) // Randomize values
                    })); });
                } else if (!circular && updated.series[0] && updated.series[0].dataSource) {
                    // For cartesian charts, copy the x-values and randomize y-values
                    newSeries.dataSource = updated.series[0].dataSource.map(function (point) { return ({
                        xvalue: point.xvalue,
                        yvalue: point.yvalue * (0.5 + Math.random() * 0.5) // Randomize values
                    }); });
                } else {
                    // Add some default data if no existing series
                    if (circular) {
                        newSeries.dataSource = [
                            { xvalue: 'A', yvalue: 50 },
                            { xvalue: 'B', yvalue: 30 },
                            { xvalue: 'C', yvalue: 20 }
                        ];
                    } else {
                        newSeries.dataSource = [
                            { xvalue: 'Jan', yvalue: 50 },
                            { xvalue: 'Feb', yvalue: 30 },
                            { xvalue: 'Mar', yvalue: 20 }
                        ];
                    }
                }
                
                updated.series = __spreadArray(__spreadArray([], updated.series, true), [newSeries], false);
                return updated;
            }
        }
        
        // Handle removeSeries method
        if (text.includes('remove series')) {
            var seriesIndexMatch = text.match(/\bseries\s+(\d+)/i);
            if (seriesIndexMatch && updated.series) {
                var index = parseInt(seriesIndexMatch[1]) - 1;
                if (index >= 0 && index < updated.series.length) {
                    updated.series = updated.series.filter(function (_, i) { return i !== index; });
                    return updated;
                }
            }
        }
        
        // Handle clearSeries method
        if (text.includes('clear series') || text.includes('remove all series')) {
            updated.series = [];
            return updated;
        }
        
        // Handle addAxes method
        if (text.includes('add axis') || text.includes('add axes')) {
            // For cartesian charts, we might add additional axes
            if (updated.chartType === 'cartesian') {
                // This is a simplified implementation
                // In reality, this would depend on the specific requirements
                return updated;
            }
        }
        
        // Handle removeAxis method
        if (text.includes('remove axis')) {
            var axisTypeMatch = text.match(/\b(xaxis|yaxis)\b/i);
            if (axisTypeMatch) {
                var axisType = axisTypeMatch[1].toLowerCase();
                if (axisType === 'xaxis') {
                    updated.xAxis = [];
                } else if (axisType === 'yaxis') {
                    updated.yAxis = [];
                }
                return updated;
            }
        }
        
        // Handle showTooltip method
        if (text.includes('show tooltip')) {
            // Enable tooltip if not already enabled
            if (!updated.tooltip) {
                updated.tooltip = { enable: true };
            } else {
                updated.tooltip.enable = true;
            }
            return updated;
        }
        
        // Handle hideTooltip method
        if (text.includes('hide tooltip')) {
            // Disable tooltip if it exists
            if (updated.tooltip) {
                updated.tooltip.enable = false;
            }
            return updated;
        }
        
        // Handle refreshLiveData method
        if (text.includes('refresh data') || text.includes('update data') || text.includes('live data')) {
            // This would typically involve updating the data source
            // For now, we'll just return the config as-is
            return updated;
        }
        
        // Handle setAnnotationValue method
        if (text.includes('set annotation') || text.includes('update annotation')) {
            // This would update annotation content
            // We'll implement a basic version
            if (updated.annotations && updated.annotations.length > 0) {
                // Just return the config as-is for now
                return updated;
            }
        }
        
        // Handle animate method
        if (text.includes('animate') || text.includes('animation')) {
            // Enable animation if not already enabled
            updated.enableAnimation = true;
            return updated;
        }
        
        // Handle event-related method requests
        if (text.includes('loaded') || text.includes('resized') || text.includes('mouse') || 
            text.includes('pointclick') || text.includes('mousemove') || text.includes('pointmove') ||
            text.includes('mousedown') || text.includes('mouseup') || text.includes('mouseleave') ||
            text.includes('doubleclick') || text.includes('tooltiprender') || text.includes('legendrender') ||
            text.includes('axislabel') || text.includes('seriesrender') || text.includes('pointrender')) {
            // These are event handlers that would be set up separately in the chart configuration
            // For now, we'll just return the config as-is since events don't change the config directly
            return updated;
        }
        
        return null;
    }
    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    function getAIResponseText(value) {
        if (typeof value === 'string') {
            return value.trim();
        }
        if (!value || typeof value !== 'object') {
            return '';
        }
        if (value.response !== undefined) {
            return getAIResponseText(value.response);
        }
        if (value.data !== undefined) {
            return getAIResponseText(value.data);
        }
        if (value.result !== undefined) {
            return getAIResponseText(value.result);
        }
        if (typeof value.content === 'string') {
            return value.content.trim();
        }
        if (typeof value.text === 'string') {
            return value.text.trim();
        }
        if (Array.isArray(value.content)) {
            var content = value.content.map(function (item) {
                return typeof item === 'string' ? item : typeof item?.text === 'string' ? item.text : '';
            }).filter(Boolean).join('\n');
            if (content) {
                return content;
            }
        }
        if (Array.isArray(value.choices) && typeof value.choices[0]?.message?.content === 'string') {
            return value.choices[0].message.content.trim();
        }
        if (value.props || value.properties || value.ChartConfig || value.chartConfig || Array.isArray(value.blocks)) {
            return JSON.stringify(value);
        }
        return '';
    }
    function extractJson(value) {
        if (typeof value !== 'string' || !value.trim()) {
            return undefined;
        }
    
        var normalizedValue = value.replace(/^\uFEFF/, '').trim();
        var fencedMatch = normalizedValue.match(/```(?:json)?\s*([\s\S]*?)```/i);
    
        if (fencedMatch && fencedMatch[1]) {
            return fencedMatch[1].trim();
        }
    
        var firstBrace = normalizedValue.indexOf('{');
        var lastBrace = normalizedValue.lastIndexOf('}');
    
        return firstBrace !== -1 && lastBrace > firstBrace
            ? normalizedValue.slice(firstBrace, lastBrace + 1).trim()
            : undefined;
    }
    function isCodeRequest(prompt) {
        return [
            'show code', 'full code', 'javascript code', 'js code', 'typescript code', 'runnable code',
            'show configuration', 'show config'
        ].some(function (keyword) {
            return prompt.toLowerCase().includes(keyword);
        });
    }
    function isChartModificationRequest(prompt) {
        if (!currentChartConfig) {
            return false;
        }
        return /\b(add|append|insert|include|show|enable|apply|remove|hide|disable|delete|clear|change|update|modify|replace|rename|set|convert|make|increase|decrease|rotate)\b/i.test(
            normalizeChartPrompt(prompt)
        );
    }
    function getNumericAxisRange(config) {
        var _a, _b;
        var yAxis = ((_a = config.yAxis) === null || _a === void 0 ? void 0 : _a[0]) || {};
        var values = [];
        (_b = config.series) === null || _b === void 0 ? void 0 : _b.forEach(function (series) {
            var _a;
            (_a = series.dataSource) === null || _a === void 0 ? void 0 : _a.forEach(function (point) {
                if (Number.isFinite(point.yvalue)) {
                    values.push(point.yvalue);
                }
            });
        });
        var dataMinimum = values.length ? Math.min(...values) : 0;
        var dataMaximum = values.length ? Math.max(...values) : 100;
        var minimum = typeof yAxis.minimum === 'number'
            ? yAxis.minimum
            : typeof yAxis.min === 'number'
                ? yAxis.min
                : dataMinimum;
        var maximum = typeof yAxis.maximum === 'number'
            ? yAxis.maximum
            : typeof yAxis.max === 'number'
                ? yAxis.max
                : dataMaximum;
        if (minimum === maximum) {
            return {
                minimum: minimum - 1,
                maximum: maximum + 1
            };
        }
        return {
            minimum,
            maximum
        };
    }
    function getStripLineAxis(prompt) {
        var normalizedPrompt = prompt
            .toLowerCase()
            .replace(/[_-]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        if (/\b(xaxis|x axis|horizontal axis|category axis)\b/.test(normalizedPrompt)) {
            return 'xAxis';
        }
        if (/\b(yaxis|y axis|vertical axis|value axis|numeric axis|numerical axis)\b/.test(normalizedPrompt)) {
            return 'yAxis';
        }
        return 'yAxis';
    }
    function getStripLineText(prompt) {
        var explicitLabelMatch = prompt.match(/(?:label|text|name)\s*(?:as|is|=|:)?\s*["']?(.+?)["']?(?=\s+(?:color|fill|opacity|on|x-axis|y-axis)\b|$)/i);
        if (explicitLabelMatch) {
            return explicitLabelMatch[1].trim();
        }
        var labelPatterns = [
            {
                pattern: /\bnormal\s+range\b/i,
                text: 'Normal Range'
            },
            {
                pattern: /\bcomfort\s+(?:zone|zoon)\b/i,
                text: 'Comfort Zone'
            },
            {
                pattern: /\bwarning\s+(?:range|zone)\b/i,
                text: 'Warning Range'
            },
            {
                pattern: /\bcritical\s+(?:range|zone)\b/i,
                text: 'Critical Range'
            },
            {
                pattern: /\bsafe\s+(?:range|zone)\b/i,
                text: 'Safe Range'
            },
            {
                pattern: /\bdanger\s+(?:range|zone)\b/i,
                text: 'Danger Range'
            },
            {
                pattern: /\btarget\s+(?:range|zone)\b/i,
                text: 'Target Range'
            }
        ];
        var matchingLabel = labelPatterns.find(function (label) {
            return label.pattern.test(prompt);
        });
        return matchingLabel === null || matchingLabel === void 0 ? void 0 : matchingLabel.text;
    }
    function getStripLineColor(prompt) {
        var _a;
        var colorNames = [
            'red',
            'blue',
            'green',
            'yellow',
            'orange',
            'purple',
            'pink',
            'gray',
            'grey',
            'black',
            'white',
            'brown',
            'cyan',
            'magenta',
            'transparent'
        ];
        var colorPattern = colorNames.join('|');
        var hexMatch = prompt.match(/#[a-f0-9]{3,8}\b/i);
        if (hexMatch) {
            return hexMatch[0];
        }
        var namedColorMatch = prompt.match(new RegExp(`\\b(${colorPattern})\\b`, 'i'));
        return ((_a = namedColorMatch === null || namedColorMatch === void 0 ? void 0 : namedColorMatch[1]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '#808080';
    }
    function getStripLineOpacity(prompt) {
        var opacityMatch = prompt.match(/opacity\s*(?:as|is|=|:)?\s*(0(?:\.\d+)?|1(?:\.0+)?)/i);
        if (!opacityMatch) {
            return 0.25;
        }
        var opacity = Number(opacityMatch[1]);
        return Math.min(Math.max(opacity, 0), 1);
    }
    var monthAliases = {
        jan: 'jan',
        january: 'jan',
        feb: 'feb',
        february: 'feb',
        mar: 'mar',
        march: 'mar',
        apr: 'apr',
        april: 'apr',
        may: 'may',
        jun: 'jun',
        june: 'jun',
        jul: 'jul',
        july: 'jul',
        aug: 'aug',
        august: 'aug',
        sep: 'sep',
        sept: 'sep',
        september: 'sep',
        oct: 'oct',
        october: 'oct',
        nov: 'nov',
        november: 'nov',
        dec: 'dec',
        december: 'dec'
    };
    function normalizeCategoryValue(value) {
        var normalizedValue = String(value !== null && value !== void 0 ? value : '')
            .trim()
            .toLowerCase()
            .replace(/[._-]+/g, ' ')
            .replace(/\s+/g, ' ');
        return monthAliases[normalizedValue] || normalizedValue;
    }
    function findCategoryIndex(categories, requestedCategory) {
        var normalizedRequestedCategory = normalizeCategoryValue(requestedCategory);
        return categories.findIndex(function (category) {
            return normalizeCategoryValue(category) === normalizedRequestedCategory;
        });
    }
    function getStripLineRange(prompt, config, axis) {
        var _a, _b;
        var numericalRangeMatch = prompt.match(/(?:from|between|in|range)?\s*(-?\d+(?:\.\d+)?)\s*(?:to|-|and)\s*(-?\d+(?:\.\d+)?)/i);
        if (numericalRangeMatch) {
            var firstValue = Number(numericalRangeMatch[1]);
            var secondValue = Number(numericalRangeMatch[2]);
            var start = Math.min(firstValue, secondValue);
            var end = Math.max(firstValue, secondValue);
            return {
                start,
                size: Math.max(end - start, 1)
            };
        }
        var numericalStartMatch = prompt.match(/(?:start(?:ing)?|from|at|in)\s*(?:value\s*)?(?:=|:)?\s*(-?\d+(?:\.\d+)?)/i);
        var explicitSizeMatch = prompt.match(/(?:size|width)\s*(?:=|:)?\s*(-?\d+(?:\.\d+)?)/i);
        if (numericalStartMatch) {
            var start = Number(numericalStartMatch[1]);
            if (explicitSizeMatch) {
                return {
                    start,
                    size: Math.max(Math.abs(Number(explicitSizeMatch[1])), 1)
                };
            }
            var numericRange = getNumericAxisRange(config);
            var axisSpan = Math.max(numericRange.maximum - numericRange.minimum, 1);
            return {
                start,
                size: Math.max(axisSpan * 0.1, 1)
            };
        }
        if (axis === 'xAxis') {
            var categories = (((_b = (_a = config.series) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.dataSource) || []).map(function (point) {
                return point.xvalue;
            });
            var categoryRangeMatch = prompt.match(/\b(?:from|between)\s+["']?(.+?)["']?\s+(?:to|and)\s+["']?(.+?)["']?(?=\s+(?:as|with|in|using|color|fill|opacity)\b|$)/i);
            if (categoryRangeMatch) {
                var requestedStart = categoryRangeMatch[1].trim();
                var requestedEnd = categoryRangeMatch[2].trim();
                var startIndex = findCategoryIndex(categories, requestedStart);
                var endIndex = findCategoryIndex(categories, requestedEnd);
                if (startIndex !== -1 && endIndex !== -1) {
                    var firstIndex = Math.min(startIndex, endIndex);
                    var lastIndex = Math.max(startIndex, endIndex);
                    return {
                        start: firstIndex - 0.5,
                        size: (lastIndex - firstIndex) + 1
                    };
                }
            }
            var singleCategoryMatch = prompt.match(/(?:at|from|on)\s+["']?(.+?)["']?(?=\s+(?:as|with|color|fill|opacity|size|width)\b|$)/i);
            if (singleCategoryMatch) {
                var categoryIndex = findCategoryIndex(categories, singleCategoryMatch[1]);
                if (categoryIndex !== -1) {
                    return {
                        start: categoryIndex - 0.5,
                        size: 1
                    };
                }
            }
            return {
                start: -0.5,
                size: explicitSizeMatch ? Math.max(Math.abs(Number(explicitSizeMatch[1])), 1) : 1
            };
        }
        var numericRange = getNumericAxisRange(config);
        var axisSpan = Math.max(numericRange.maximum - numericRange.minimum, 1);
        var defaultSize = Math.max(axisSpan * 0.2, 1);
        var defaultStart = numericRange.minimum + ((axisSpan - defaultSize) / 2);
        return {
            start: Number(defaultStart.toFixed(2)),
            size: Number(defaultSize.toFixed(2))
        };
    }
    function getStripLineRequest(prompt, config) {
        var axis = getStripLineAxis(prompt);
        var range = getStripLineRange(prompt, config, axis);
        return {
            axis,
            start: range.start,
            size: range.size,
            color: getStripLineColor(prompt),
            opacity: getStripLineOpacity(prompt),
            text: getStripLineText(prompt)
        };
    }
    function createStripLine(request) {
        var stripLine = {
            start: request.start,
            size: request.size,
            color: request.color,
            opacity: request.opacity,
            visible: true,
            zIndex: 'Behind'
        };
        if (request.text) {
            stripLine.text = request.text;
            stripLine.horizontalAlignment = 'Middle';
            stripLine.verticalAlignment = 'Middle';
            stripLine.textStyle = {
                color: request.color,
                size: '12px',
                fontWeight: '600'
            };
        }
        return stripLine;
    }
    function isSameStripLine(first, second) {
        var firstColor = String(first.color || '').trim().toLowerCase();
        var secondColor = String(second.color || '').trim().toLowerCase();
        var firstText = String(first.text || '').trim().toLowerCase();
        var secondText = String(second.text || '').trim().toLowerCase();
        return first.start === second.start &&
            first.size === second.size &&
            firstColor === secondColor &&
            first.opacity === second.opacity &&
            first.visible === second.visible &&
            first.zIndex === second.zIndex &&
            firstText === secondText;
    }
    function addStripLine(config, prompt) {
        var updatedConfig = cloneChartConfig(config);
        var request = getStripLineRequest(prompt, updatedConfig);
        var configuredAxes = updatedConfig[request.axis];
        var axisCollection = (configuredAxes === null || configuredAxes === void 0 ? void 0 : configuredAxes.length)
            ? JSON.parse(JSON.stringify(configuredAxes))
            : [{
                    type: request.axis === 'xAxis' ? 'category' : 'numerical',
                    title: request.axis === 'xAxis' ? 'Categories' : 'Values'
                }];
        var existingStripLines = axisCollection[0].stripLines || [];
        var stripLine = createStripLine(request);
        var duplicateExists = existingStripLines.some(function (existing) {
            return isSameStripLine(existing, stripLine);
        });
        axisCollection[0] = {
            ...axisCollection[0],
            stripLines: duplicateExists
                ? existingStripLines
                : [...existingStripLines, stripLine]
        };
        updatedConfig[request.axis] = axisCollection;
        return updatedConfig;
    }
    function removeStripLines(config) {
        var _a, _b;
        var updatedConfig = cloneChartConfig(config);
        updatedConfig.xAxis = (_a = updatedConfig.xAxis) === null || _a === void 0 ? void 0 : _a.map(function (axis) {
            return ({
                ...axis,
                stripLines: []
            });
        });
        updatedConfig.yAxis = (_b = updatedConfig.yAxis) === null || _b === void 0 ? void 0 : _b.map(function (axis) {
            return ({
                ...axis,
                stripLines: []
            });
        });
        return updatedConfig;
    }
    function applyRequestedChartFeatures(prompt, config) {
        var _a, _b, _c, _d, _e, _f;
        var text = prompt.trim().toLowerCase();
        var updatedConfig = cloneChartConfig(config);
        if (text.includes('stripline') || text.includes('strip line')) {
            updatedConfig = addStripLine(updatedConfig, prompt);
        }
        if (text.includes('crosshair')) {
            updatedConfig.crosshair = {
                ...(updatedConfig.crosshair || {}),
                enable: true,
                lineType: ((_a = updatedConfig.crosshair) === null || _a === void 0 ? void 0 : _a.lineType) || 'Both'
            };
        }
        if (text.includes('tooltip')) {
            updatedConfig.tooltip = {
                ...(updatedConfig.tooltip || {}),
                enable: true
            };
        }
        if (text.includes('zoom')) {
            updatedConfig.zoomSettings = {
                ...(updatedConfig.zoomSettings || {}),
                enableSelectionZooming: true,
                enableMouseWheelZooming: true,
                enablePinchZooming: true,
                enablePan: true
            };
        }
        if (text.includes('selection')) {
            updatedConfig.selectionMode = 'Point';
        }
        if (text.includes('highlight')) {
            updatedConfig.highlightMode = 'Point';
        }
        if (text.includes('data label') || text.includes('datalabel')) {
            updatedConfig.series = (_b = updatedConfig.series) === null || _b === void 0 ? void 0 : _b.map(function (series) {
                var _a;
                return updatedConfig.chartType === 'circular'
                    ? {
                        ...series,
                        dataLabel: {
                            ...(series.dataLabel || {}),
                            visible: true
                        }
                    }
                    : {
                        ...series,
                        marker: {
                            ...(series.marker || {}),
                            dataLabel: {
                                ...(((_a = series.marker) === null || _a === void 0 ? void 0 : _a.dataLabel) || series.dataLabel || {}),
                                visible: true
                            }
                        }
                    };
            });
        }
        if (text.includes('annotation') && !((_c = updatedConfig.annotations) === null || _c === void 0 ? void 0 : _c.length)) {
            var firstPoint = (_f = (_e = (_d = updatedConfig.series) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.dataSource) === null || _f === void 0 ? void 0 : _f[0];
            updatedConfig.annotations = [{
                    content: '<div class="chart-annotation">Annotation</div>',
                    coordinateUnits: 'Point',
                    region: 'Chart',
                    x: (firstPoint === null || firstPoint === void 0 ? void 0 : firstPoint.xvalue) || 0,
                    y: (firstPoint === null || firstPoint === void 0 ? void 0 : firstPoint.yvalue) || 0
                }];
        }
        return updatedConfig;
    }
    function buildModificationPrompt(prompt, config) {
        return [
            'Modify the existing Syncfusion chart configuration.',
            'CURRENT CONFIGURATION:',
            JSON.stringify(config, null, 4),
            'USER REQUEST:',
            prompt,
            'Preserve every property, series, axis, data value, feature, and style not explicitly changed.',
            'Return one complete JSON object only. Do not return markdown.'
        ].join('\n');
    }
    function preserveUnrequestedProperties(previous, generated, prompt) {
        var _a, _b;
        var text = prompt.toLowerCase();
        var result = cloneChartConfig(generated);
        var featureNames = [
            'tooltip', 'crosshair', 'zoomSettings', 'selectionMode', 'highlightMode', 'annotations', 'indicators', 'legendSettings', 'chartArea'
        ];
        if (!text.includes('title')) {
            result.title = previous.title;
        }
        if (!text.includes('legend')) {
            result.showLegend = previous.showLegend;
        }
        if (!/(chart type|series type|convert|change to|make it)/.test(text)) {
            result.chartType = previous.chartType;
            result.series = (_a = result.series) === null || _a === void 0 ? void 0 : _a.map(function (series, index) {
                var _a, _b;
                return ({
                    ...series,
                    type: ((_b = (_a = previous.series) === null || _a === void 0 ? void 0 : _a[index]) === null || _b === void 0 ? void 0 : _b.type) || series.type
                });
            });
        }
        if (!/(data|value|point|series)/.test(text)) {
            result.series = (_b = result.series) === null || _b === void 0 ? void 0 : _b.map(function (series, index) {
                var _a, _b, _c, _d, _e;
                return ({
                    ...(_a = previous.series) === null || _a === void 0 ? void 0 : _a[index],
                    ...series,
                    name: ((_c = (_b = previous.series) === null || _b === void 0 ? void 0 : _b[index]) === null || _c === void 0 ? void 0 : _c.name) || series.name,
                    dataSource: ((_e = (_d = previous.series) === null || _d === void 0 ? void 0 : _d[index]) === null || _e === void 0 ? void 0 : _e.dataSource) || series.dataSource
                });
            });
        }
        if (!/(x axis|x-axis|horizontal axis|rotate label)/.test(text)) {
            result.xAxis = previous.xAxis;
        }
        if (!/(y axis|y-axis|vertical axis|minimum|maximum)/.test(text)) {
            result.yAxis = previous.yAxis;
        }
        featureNames.forEach(function (feature) {
            var promptName = feature.replace(/Settings|Mode/g, '').toLowerCase();
            if (!text.includes(promptName) && previous[feature] !== undefined) {
                result[feature] = cloneChartConfig({ value: previous[feature] }).value;
            }
        });
        return result;
    }
    function formatValue(value) {
        return value === undefined ? 'not configured' : value === null ? 'none' : typeof value === 'string' ? value : JSON.stringify(value);
    }
    function compareChartConfigs(previous, updated) {
        var _a, _b;
        var changes = [];
        var scalarProperties = [
            { key: 'title', label: 'Title' },
            { key: 'chartType', label: 'Chart type' },
            { key: 'showLegend', label: 'Legend' },
            { key: 'crosshair', label: 'Crosshair' },
            { key: 'tooltip', label: 'Tooltip' },
            { key: 'zoomSettings', label: 'Zoom' },
            { key: 'selectionMode', label: 'Selection' },
            { key: 'highlightMode', label: 'Highlight' },
            { key: 'annotations', label: 'Annotations' },
            { key: 'indicators', label: 'Indicators' },
            { key: 'xAxis', label: 'X-axis settings' },
            { key: 'yAxis', label: 'Y-axis settings' }
        ];
        scalarProperties.forEach(function ({ key, label }) {
            if (JSON.stringify(previous[key]) !== JSON.stringify(updated[key])) {
                changes.push({
                    property: label,
                    previousValue: formatValue(previous[key]),
                    updatedValue: formatValue(updated[key])
                });
            }
        });
        if ((previous.series || []).length !== (updated.series || []).length) {
            changes.push({
                property: 'Series count',
                previousValue: String(((_a = previous.series) === null || _a === void 0 ? void 0 : _a.length) || 0),
                updatedValue: String(((_b = updated.series) === null || _b === void 0 ? void 0 : _b.length) || 0)
            });
        }
        (updated.series || []).forEach(function (series, seriesIndex) {
            var _a;
            var previousSeries = (_a = previous.series) === null || _a === void 0 ? void 0 : _a[seriesIndex];
            if (!previousSeries) {
                changes.push({
                    property: `Series ${seriesIndex + 1}`,
                    previousValue: 'not configured',
                    updatedValue: series.name || `Series ${seriesIndex + 1}`
                });
                return;
            }
            if (previousSeries.name !== series.name) {
                changes.push({
                    property: `Series ${seriesIndex + 1} name`,
                    previousValue: formatValue(previousSeries.name),
                    updatedValue: formatValue(series.name)
                });
            }
            var previousType = String(previousSeries.type || 'Column').toLowerCase();
            var updatedType = String(series.type || 'Column').toLowerCase();
            if (previousType !== updatedType) {
                changes.push({
                    property: `${series.name || `Series ${seriesIndex + 1}`} type`,
                    previousValue: previousSeries.type || 'Column',
                    updatedValue: series.type || 'Column'
                });
            }
            (series.dataSource || []).forEach(function (point) {
                var _a;
                var oldPoint = (_a = previousSeries.dataSource) === null || _a === void 0 ? void 0 : _a.find(function (item) {
                    return String(item.xvalue).toLowerCase() === String(point.xvalue).toLowerCase();
                });
                if (!oldPoint) {
                    changes.push({
                        property: `${series.name || `Series ${seriesIndex + 1}`}, ${point.xvalue}`,
                        previousValue: 'not configured',
                        updatedValue: String(point.yvalue)
                    });
                }
                else if (oldPoint.yvalue !== point.yvalue) {
                    changes.push({
                        property: `${series.name || `Series ${seriesIndex + 1}`}, ${point.xvalue}`,
                        previousValue: String(oldPoint.yvalue),
                        updatedValue: String(point.yvalue)
                    });
                }
            });
        });
        (previous.series || []).forEach(function (previousSeries, seriesIndex) {
            var _a;
            var updatedSeries = (_a = updated.series) === null || _a === void 0 ? void 0 : _a[seriesIndex];
            if (!updatedSeries) {
                changes.push({
                    property: previousSeries.name || `Series ${seriesIndex + 1}`,
                    previousValue: 'configured',
                    updatedValue: 'removed'
                });
                return;
            }
            (previousSeries.dataSource || []).forEach(function (previousPoint) {
                var _a;
                var updatedPoint = (_a = updatedSeries.dataSource) === null || _a === void 0 ? void 0 : _a.find(function (item) {
                    return String(item.xvalue).toLowerCase() === String(previousPoint.xvalue).toLowerCase();
                });
                if (!updatedPoint) {
                    changes.push({
                        property: `${previousSeries.name || `Series ${seriesIndex + 1}`}, ${previousPoint.xvalue}`,
                        previousValue: String(previousPoint.yvalue),
                        updatedValue: 'removed'
                    });
                }
            });
        });
        return changes;
    }
    function getSeriesModule(type) {
        var modules = {
            Line: 'LineSeries', Column: 'ColumnSeries', Bar: 'BarSeries', Area: 'AreaSeries', Spline: 'SplineSeries',
            StepLine: 'StepLineSeries', StepArea: 'StepAreaSeries', SplineArea: 'SplineAreaSeries', MultiColoredLine: 'MultiColoredLineSeries',
            MultiColoredArea: 'MultiColoredAreaSeries', RangeColumn: 'RangeColumnSeries', RangeArea: 'RangeAreaSeries',
            SplineRangeArea: 'SplineRangeAreaSeries', Hilo: 'HiloSeries', HiloOpenClose: 'HiloOpenCloseSeries', Candle: 'CandleSeries',
            BoxAndWhisker: 'BoxAndWhiskerSeries', Bubble: 'BubbleSeries', Scatter: 'ScatterSeries', StackingColumn: 'StackingColumnSeries',
            StackingColumn100: 'StackingColumnSeries', StackingBar: 'StackingBarSeries', StackingBar100: 'StackingBarSeries',
            StackingArea: 'StackingAreaSeries', StackingArea100: 'StackingAreaSeries', StackingLine: 'StackingLineSeries',
            StackingLine100: 'StackingLineSeries', StackingStepArea: 'StackingStepAreaSeries', Pareto: 'ParetoSeries', Polar: 'PolarSeries',
            Radar: 'RadarSeries', Waterfall: 'WaterfallSeries', Histogram: 'HistogramSeries'
        };
        return modules[mapSeriesType(type)] || 'ColumnSeries';
    }
    function getRequiredModules(config) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var modules = [];
        if (config.chartType === 'circular') {
            modules.push(...(config.series || []).map(function (series) {
                var type = mapAccumulationSeriesType(series.type);
                return type === 'Funnel' ? 'FunnelSeries' : type === 'Pyramid' ? 'PyramidSeries' : 'PieSeries';
            }));
            if (config.showLegend !== false)
                modules.push('AccumulationLegend');
            if (((_a = config.tooltip) === null || _a === void 0 ? void 0 : _a.enable) !== false)
                modules.push('AccumulationTooltip');
            if ((_b = config.annotations) === null || _b === void 0 ? void 0 : _b.length)
                modules.push('AccumulationAnnotation');
            if ((_c = config.series) === null || _c === void 0 ? void 0 : _c.some(function (series) {
                var _a;
                return (_a = series.dataLabel) === null || _a === void 0 ? void 0 : _a.visible;
            }))
                modules.push('AccumulationDataLabel');
            modules.push('Export');
            return [...new Set(modules)];
        }
        modules.push(...(config.series || []).map(function (series) {
            return getSeriesModule(series.type);
        }));
        [(_d = config.xAxis) === null || _d === void 0 ? void 0 : _d[0], (_e = config.yAxis) === null || _e === void 0 ? void 0 : _e[0]].forEach(function (axis) {
            var _a;
            var type = mapAxisType((axis === null || axis === void 0 ? void 0 : axis.valueType) || (axis === null || axis === void 0 ? void 0 : axis.type));
            if (type !== 'Double')
                modules.push(type);
            if ((_a = axis === null || axis === void 0 ? void 0 : axis.stripLines) === null || _a === void 0 ? void 0 : _a.length)
                modules.push('StripLine');
        });
        if (config.showLegend !== false)
            modules.push('Legend');
        if (((_f = config.tooltip) === null || _f === void 0 ? void 0 : _f.enable) !== false)
            modules.push('Tooltip');
        if ((_g = config.crosshair) === null || _g === void 0 ? void 0 : _g.enable)
            modules.push('Crosshair');
        if (config.zoomSettings && Object.values(config.zoomSettings).some(Boolean))
            modules.push('Zoom');
        if (config.selectionMode && config.selectionMode !== 'None')
            modules.push('Selection');
        if (config.highlightMode && config.highlightMode !== 'None')
            modules.push('Highlight');
        if ((_h = config.annotations) === null || _h === void 0 ? void 0 : _h.length)
            modules.push('ChartAnnotation');
        if ((_j = config.series) === null || _j === void 0 ? void 0 : _j.some(function (series) {
            var _a;
            return ((_a = series.marker) === null || _a === void 0 ? void 0 : _a.dataLabel) || series.dataLabel;
        }))
            modules.push('DataLabel');
        if ((_k = config.series) === null || _k === void 0 ? void 0 : _k.some(function (series) {
            return series.errorBar;
        }))
            modules.push('ErrorBar');
        if ((_l = config.series) === null || _l === void 0 ? void 0 : _l.some(function (series) {
            var _a;
            return (_a = series.trendlines) === null || _a === void 0 ? void 0 : _a.length;
        }))
            modules.push('Trendlines');
        var indicatorModules = {
            Ema: 'EmaIndicator', Rsi: 'RsiIndicator', BollingerBands: 'BollingerBands', Tma: 'TmaIndicator',
            Momentum: 'MomentumIndicator', Sma: 'SmaIndicator', Atr: 'AtrIndicator',
            AccumulationDistribution: 'AccumulationDistributionIndicator', Macd: 'MacdIndicator', Stochastic: 'StochasticIndicator'
        };
        (config.indicators || []).forEach(function (indicator) {
            var moduleName = indicatorModules[indicator.type];
            if (moduleName)
                modules.push(moduleName);
        });
        modules.push('Export');
        return [...new Set(modules)];
    }
    function toJavaScriptLiteral(value, indentation = 0) {
        var json = JSON.stringify(value, null, 4);
        var padding = ' '.repeat(indentation);
        return json.split('\n').map(function (line, index) {
            return index === 0 ? line : `${padding}${line}`;
        }).join('\n');
    }
    function generateCompleteChartCode(config) {
        var modules = getRequiredModules(config);
        var chartClass = config.chartType === 'circular' ? 'AccumulationChart' : 'Chart';
        var dataBlocks = (config.series || []).map(function (series, index) {
            return `var chartData${index + 1} = ${toJavaScriptLiteral(series.dataSource || [])};`;
        }).join('\n\n');
        var renderConfig = cloneChartConfig(config);
        delete renderConfig.chartType;
        delete renderConfig.showLegend;
        renderConfig.legendSettings = {
            ...(renderConfig.legendSettings || {}),
            visible: config.showLegend !== false
        };
        renderConfig.series = (config.series || []).map(function (series, index) {
            var normalizedType = String(series.type || '').toLowerCase();
            var generatedSeries = {
                ...series,
                type: config.chartType === 'circular'
                    ? mapAccumulationSeriesType(series.type)
                    : mapSeriesType(series.type),
                dataSource: `__CHART_DATA_${index + 1}__`,
                xName: series.xName || 'xvalue',
                yName: series.yName || 'yvalue'
            };
            if (config.chartType === 'circular' && (normalizedType === 'doughnut' || normalizedType === 'donut')) {
                generatedSeries.innerRadius = series.innerRadius || '70%';
            }
            return generatedSeries;
        });
        if (config.chartType !== 'circular') {
            renderConfig.primaryXAxis = normalizeAxis(config.xAxis && config.xAxis[0] ? config.xAxis[0] : {}, 'Categories', 'category');
            renderConfig.primaryYAxis = normalizeAxis(config.yAxis && config.yAxis[0] ? config.yAxis[0] : {}, 'Values', 'numerical');
            delete renderConfig.xAxis;
            delete renderConfig.yAxis;
        }
        var configCode = toJavaScriptLiteral(renderConfig, 4);
        (config.series || []).forEach(function (_series, index) {
            configCode = configCode.replace(`"__CHART_DATA_${index + 1}__"`, `chartData${index + 1}`);
        });
        var lines = [
            `var ${chartClass} = ej.charts.${chartClass};`,
            ''
        ];
        if (modules.length) {
            lines.push(`${chartClass}.Inject(`);
            lines.push(modules.map(function (moduleName) {
                return `    ej.charts.${moduleName}`;
            }).join(',\n'));
            lines.push(');');
            lines.push('');
        }
        if (dataBlocks) {
            lines.push(dataBlocks);
            lines.push('');
        }
        lines.push(`var chart = new ${chartClass}(${configCode});`);
        lines.push('');
        lines.push("chart.appendTo('#chart-container');");
        return lines.join('\n');
    }
    function generatePartialUpdateCode(prompt, previousConfig, updatedConfig) {
        var _a, _b, _c, _d, _e, _f;
        var text = normalizeChartPrompt(prompt);
        var changes = {};
        var xAxisChanged = JSON.stringify(previousConfig.xAxis) !== JSON.stringify(updatedConfig.xAxis);
        var yAxisChanged = JSON.stringify(previousConfig.yAxis) !== JSON.stringify(updatedConfig.yAxis);
        var seriesChanged = JSON.stringify(previousConfig.series) !== JSON.stringify(updatedConfig.series);
        var indicatorsChanged = JSON.stringify(previousConfig.indicators || []) !== JSON.stringify(updatedConfig.indicators || []);
        if ((text.includes('stripline') || text.includes('strip line')) && xAxisChanged) {
            changes.stripLines = ((_b = (_a = updatedConfig.xAxis) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.stripLines) || [];
        }
        else if ((text.includes('stripline') || text.includes('strip line')) && yAxisChanged) {
            changes.stripLines = ((_d = (_c = updatedConfig.yAxis) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.stripLines) || [];
        }
        else {
            if (xAxisChanged && updatedConfig.chartType !== 'circular') {
                changes.primaryXAxis = normalizeAxis(((_e = updatedConfig.xAxis) === null || _e === void 0 ? void 0 : _e[0]) || {}, 'Categories', 'category');
            }
            if (yAxisChanged && updatedConfig.chartType !== 'circular') {
                changes.primaryYAxis = normalizeAxis(((_f = updatedConfig.yAxis) === null || _f === void 0 ? void 0 : _f[0]) || {}, 'Values', 'numerical');
            }
        }
        if (indicatorsChanged) {
            changes.indicators = updatedConfig.indicators || [];
        }
        if (text.includes('crosshair')) {
            changes.crosshair = updatedConfig.crosshair;
        }
        if (text.includes('tooltip')) {
            changes.tooltip = updatedConfig.tooltip;
        }
        if (text.includes('zoom')) {
            changes.zoomSettings = updatedConfig.zoomSettings;
        }
        if (text.includes('selection')) {
            changes.selectionMode = updatedConfig.selectionMode;
        }
        if (text.includes('highlight')) {
            changes.highlightMode = updatedConfig.highlightMode;
        }
        if (text.includes('annotation')) {
            changes.annotations = updatedConfig.annotations || [];
        }
        if (text.includes('legend')) {
            changes.legendSettings = {
                ...(updatedConfig.legendSettings || {}),
                visible: updatedConfig.showLegend !== false
            };
        }
        if (seriesChanged) {
            var dataLabelRequest = text.includes('data label') || text.includes('datalabel');
            if (dataLabelRequest) {
                changes.series = (updatedConfig.series || []).map(function (series) {
                    var _a;
                    return updatedConfig.chartType === 'circular'
                        ? { dataLabel: series.dataLabel || { visible: false } }
                        : { marker: { dataLabel: ((_a = series.marker) === null || _a === void 0 ? void 0 : _a.dataLabel) || { visible: false } } };
                });
            }
            else {
                changes.series = updatedConfig.series || [];
            }
        }
        if (previousConfig.title !== updatedConfig.title) {
            changes.title = updatedConfig.title;
        }
        if (previousConfig.chartType !== updatedConfig.chartType) {
            changes.chartType = updatedConfig.chartType;
            changes.series = updatedConfig.series || [];
        }
        return toJavaScriptLiteral(changes);
    }
    function buildResponseBlocks(payload) {
        var _a;
        if (!payload.CHART || !payload.ChartConfig) {
            return [{
                    blockType: 'text',
                    content: payload.Text || 'No valid chart configuration was returned.'
                }];
        }
        var blocks = [{
                blockType: 'text',
                content: payload.Text || 'The chart is ready.'
            }];
        if ((_a = payload.ChangeSummary) === null || _a === void 0 ? void 0 : _a.length) {
            blocks.push({
                blockType: 'tool',
                toolName: 'change-summary-tool',
                props: {
                    changes: payload.ChangeSummary
                }
            });
        }
        var codeViews = [];
        if (payload.ChangedCode) {
            codeViews.push({
                id: 'changes',
                title: 'Code changes',
                description: 'Only the configuration properties added, removed, or changed by this request are shown.',
                language: 'json',
                code: payload.ChangedCode
            });
        }
        if (payload.ShowCode && payload.Code) {
            codeViews.push({
                id: 'complete',
                title: payload.CodeTitle || 'Complete JavaScript code',
                description: payload.CodeDescription || 'Includes required module injection, data, features, and initialization.',
                language: 'javascript',
                code: payload.Code
            });
        }
        if (codeViews.length) {
            blocks.push({
                blockType: 'tool',
                toolName: 'code-tool',
                props: {
                    activeView: payload.ChangedCode ? 'changes' : 'complete',
                    views: codeViews
                }
            });
        }
        blocks.push({
            blockType: 'tool',
            toolName: 'chart-tool',
            props: {
                ChartConfig: payload.ChartConfig
            }
        });
        return blocks;
    }
    function cloneChartResponse(payload) {
        return JSON.parse(JSON.stringify(payload));
    }
    function getSessionTitle(session) {
        var _a;
        var firstMessage = session.messages[0];
        return ((_a = firstMessage === null || firstMessage === void 0 ? void 0 : firstMessage.payload.ChartConfig) === null || _a === void 0 ? void 0 : _a.title) ||
            (firstMessage === null || firstMessage === void 0 ? void 0 : firstMessage.prompt) ||
            'Chart Session';
    }
    function updateCurrentSessionTitle() {
        currentSession.title = getSessionTitle(currentSession);
        currentSession.updatedAt = new Date();
    }
    function cloneHistorySession(session) {
        return {
            ...session,
            createdAt: new Date(session.createdAt),
            updatedAt: new Date(session.updatedAt),
            messages: session.messages.map(function (message) {
                return ({
                    ...message,
                    payload: cloneChartResponse(message.payload),
                    createdAt: new Date(message.createdAt)
                });
            })
        };
    }
    function saveCurrentSession() {
        if (!currentSession.messages.length) {
            return;
        }
        updateCurrentSessionTitle();
        var storedSession = cloneHistorySession(currentSession);
        var existingIndex = historySessions.findIndex(function (session) {
            return session.id === currentSession.id;
        });
        if (existingIndex !== -1) {
            historySessions.splice(existingIndex, 1);
        }
        historySessions.unshift(storedSession);
        selectedSessionId = currentSession.id;
        saveHistorySessions(historySessions);
        renderHistory();
    }
    function appendSessionMessage(prompt, payload) {
        var _a;
        var message = {
            id: createId('message'),
            prompt,
            payload: cloneChartResponse(payload),
            createdAt: new Date()
        };
        currentSession.messages.push(message);
        currentSession.updatedAt = new Date();
        if (currentSession.messages.length === 1) {
            currentSession.title = ((_a = payload.ChartConfig) === null || _a === void 0 ? void 0 : _a.title) || prompt || 'Chart Session';
        }
        saveCurrentSession();
    }
    function renderHistory() {
        var scroll = document.getElementById('history-scroll');
        if (!scroll) {
            return;
        }
        if (!historySessions.length) {
            scroll.innerHTML = '<div class="empty" id="history-empty">No history yet.</div>';
            return;
        }
        scroll.innerHTML = historySessions.map(function (session) {
            var isSelected = selectedSessionId === session.id;
            return [
                `<div class="history-item${isSelected ? ' active' : ''}" data-history-session-id="${escapeHtml(session.id)}">`,
                '  <div class="history-text">',
                `    <div class="history-title">${escapeHtml(session.title)}</div>`,
                `    <div class="history-date">${formatSessionDate(session.updatedAt)}</div>`,
                '  </div>',
                `  <button class="icon-btn danger" data-history-delete-session-id="${escapeHtml(session.id)}"`,
                '      title="Delete session" aria-label="Delete session">',
                '    <span class="e-icons e-trash"></span>',
                '  </button>',
                '</div>'
            ].join('');
        }).join('');
    }
    function formatSessionDate(date) {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });
    }
    function renderVisibility() {
        var pane = document.getElementById('history-pane');
        if (pane)
            pane.style.display = showHistory ? 'flex' : 'none';
    }
    async function copyCode(code, button) {
        var original = button.textContent || 'Copy code';
        try {
            await navigator.clipboard.writeText(code);
            button.textContent = 'Copied';
        }
        catch (_a) {
            button.textContent = 'Copy failed';
        }
        window.setTimeout(function () { button.textContent = original; }, 1500);
    }
    function getCodeToolViews(config) {
        if (Array.isArray(config.views) && config.views.length) {
            return config.views.filter(function (view) {
                return Boolean(view === null || view === void 0 ? void 0 : view.code);
            });
        }
        if (!config.code) {
            return [];
        }
        return [{
                id: 'complete',
                title: config.title || 'Complete JavaScript code',
                description: config.description || '',
                language: config.language || 'javascript',
                code: config.code
            }];
    }
    function onCodeToolHandler(container, args) {
        var titleElement = container.querySelector('.generated-code-title');
        var descriptionElement = container.querySelector('.generated-code-description');
        var codeElement = container.querySelector('.generated-code');
        var codePanel = container.querySelector('.generated-code-wrapper');
        var copyButton = container.querySelector('.copy-code-button');
        var switchContainer = container.querySelector('.generated-code-switch');
        var switchButtons = container.querySelectorAll('[data-code-view]');
        var config = (args === null || args === void 0 ? void 0 : args.config) || (args === null || args === void 0 ? void 0 : args.props) || args || {};
        var views = getCodeToolViews(config);
        var codePanelId = `generated-code-panel-${createId('view')}`;
        var titleId = `${codePanelId}-title`;
        var activeView = views.find(function (view) {
            return view.id === config.activeView;
        }) || views[0];
        if (titleElement) {
            titleElement.id = titleId;
        }
        if (codePanel) {
            codePanel.id = codePanelId;
            codePanel.setAttribute('role', 'tabpanel');
        }
        function renderCodeView(view) {
            activeView = view;
            if (titleElement) {
                titleElement.textContent = view.title;
            }
            if (descriptionElement) {
                descriptionElement.textContent = view.description;
            }
            if (codeElement) {
                codeElement.textContent = view.code;
                codeElement.setAttribute('data-language', view.language);
            }
            switchButtons.forEach(function (button) {
                var selected = button.dataset.codeView === view.id;
                button.classList.toggle('active', selected);
                button.setAttribute('aria-selected', String(selected));
                button.tabIndex = selected ? 0 : -1;
            });
            if (codePanel) {
                var selectedButton = Array.from(switchButtons).find(function (button) {
                    return button.dataset.codeView === view.id;
                });
                codePanel.setAttribute('aria-labelledby', views.length > 1 && (selectedButton === null || selectedButton === void 0 ? void 0 : selectedButton.id) ? selectedButton.id : titleId);
            }
        }
        switchButtons.forEach(function (button) {
            var viewId = button.dataset.codeView || '';
            var view = views.find(function (item) {
                return item.id === viewId;
            });
            button.id = `${codePanelId}-${viewId || 'view'}-tab`;
            button.setAttribute('aria-controls', codePanelId);
            button.hidden = !view;
            button.onclick = function () {
                if (view) {
                    renderCodeView(view);
                }
            };
            button.onkeydown = function (event) {
                if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
                    return;
                }
                event.preventDefault();
                var currentIndex = views.findIndex(function (item) {
                    return item.id === (activeView === null || activeView === void 0 ? void 0 : activeView.id);
                });
                var direction = event.key === 'ArrowRight' ? 1 : -1;
                var nextIndex = (currentIndex + direction + views.length) % views.length;
                var nextView = views[nextIndex];
                var nextButton = Array.from(switchButtons).find(function (item) {
                    return item.dataset.codeView === (nextView === null || nextView === void 0 ? void 0 : nextView.id);
                });
                if (nextView && nextButton) {
                    renderCodeView(nextView);
                    nextButton.focus();
                }
            };
        });
        if (switchContainer) {
            switchContainer.style.display = views.length > 1 ? 'flex' : 'none';
        }
        if (copyButton) {
            copyButton.onclick = function () {
                if (activeView) {
                    void copyCode(activeView.code, copyButton);
                }
            };
        }
        if (activeView) {
            renderCodeView(activeView);
        }
    }
    function onChangeSummaryToolHandler(container, args) {
        var list = container.querySelector('.change-summary-list');
        var source = (args === null || args === void 0 ? void 0 : args.config) || (args === null || args === void 0 ? void 0 : args.props) || args;
        var changes = Array.isArray(source === null || source === void 0 ? void 0 : source.changes) ? source.changes : [];
        if (list) {
            list.innerHTML = changes.map(function (change) {
                return `<li>${escapeHtml(change)}</li>`;
            }).join('');
            list.style.display = changes.length ? '' : 'none';
        }
    }
    function getChartExportRequest(prompt) {
        var text = prompt.trim().toLowerCase();
        var types = [
            { pattern: /\bpdf\b/, type: 'PDF' }, { pattern: /\bpng\b/, type: 'PNG' },
            { pattern: /\bjpe?g\b/, type: 'JPEG' }, { pattern: /\bsvg\b/, type: 'SVG' },
            { pattern: /\b(?:xlsx|excel)\b/, type: 'XLSX' }, { pattern: /\bcsv\b/, type: 'CSV' }
        ];
        var match = types.find(function (item) {
            return item.pattern.test(text);
        });
        return { isExport: /\b(export|download|save)\b/.test(text) || /^(pdf|png|jpe?g|svg|xlsx|excel|csv)$/.test(text), type: (match === null || match === void 0 ? void 0 : match.type) || 'PNG' };
    }
    function isPrintRequest(prompt) {
        var text = String(prompt || '').trim().toLowerCase().replace(/\s+/g, ' ');
        return [
            'print', 'print chart', 'print the chart', 'print this chart', 'print current chart',
            'print the current chart', 'print latest chart', 'print the latest chart'
        ].includes(text);
    }
    function getExportFileName(title) {
        return (title || (activeChart === null || activeChart === void 0 ? void 0 : activeChart.title) || 'Generated Chart').trim().replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '') ||
            'Generated-Chart';
    }
    function exportChartData(type, config) {
        var rows = [];
        (config.series || []).forEach(function (series) {
            (series.dataSource || []).forEach(function (point) {
                rows.push({ Series: series.name || 'Series', Category: point.xvalue, Value: point.yvalue });
            });
        });
        var fileName = getExportFileName(config.title);
        if (type === 'CSV') {
            var escape = function (value) {
                return `"${String(value !== null && value !== void 0 ? value : '').replace(/"/g, '""')}"`;
            };
            var content = [['Series', 'Category', 'Value'].map(escape).join(','),
                ...rows.map(function (row) {
                    return [row.Series, row.Category, row.Value].map(escape).join(',');
                })].join('\n');
            var url = URL.createObjectURL(new Blob([content], { type: 'text/csv;charset=utf-8' }));
            var anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = `${fileName}.csv`;
            anchor.click();
            URL.revokeObjectURL(url);
            return;
        }
        new ej.excelexport.Workbook({
            worksheets: [{
                    name: 'Chart Data', rows: [
                        { cells: [{ value: 'Series' }, { value: 'Category' }, { value: 'Value' }] },
                        ...rows.map(function (row) {
                            return ({ cells: [{ value: row.Series }, { value: row.Category }, { value: row.Value }] });
                        })
                    ]
                }]
        }, 'xlsx').save(`${fileName}.xlsx`);
    }
    function exportChartInstance(chart, config, type) {
        if (chart.isDestroyed)
            return false;
        if (type === 'XLSX' || type === 'CSV') {
            exportChartData(type, config);
        }
        else {
            chart.exportModule.export(type, getExportFileName(config.title));
        }
        return true;
    }
    function exportActiveChart(type) {
        return Boolean(activeChart && currentChartConfig && exportChartInstance(activeChart, currentChartConfig, type));
    }
    function printActiveChart() {
        if (!activeChart || activeChart.isDestroyed)
            return false;
        activeChart.print();
        return true;
    }
    function getLatestStripLine(config) {
        var _a, _b, _c, _d;
        var yStripLines = ((_b = (_a = config.yAxis) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.stripLines) || [];
        if (yStripLines.length) {
            return yStripLines[yStripLines.length - 1];
        }
        var xStripLines = ((_d = (_c = config.xAxis) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.stripLines) || [];
        return xStripLines.length
            ? xStripLines[xStripLines.length - 1]
            : null;
    }
    function getStripLineAxisName(config, stripLine) {
        var _a, _b, _c;
        var existsOnYAxis = Boolean((_c = (_b = (_a = config.yAxis) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.stripLines) === null || _c === void 0 ? void 0 : _c.some(function (item) {
            return isSameStripLine(item, stripLine);
        }));
        return existsOnYAxis ? 'Y-axis' : 'X-axis';
    }
    function getLocalModificationMessage(prompt, previousConfig, updatedConfig, changes) {
        var _a, _b, _c;
        var normalizedPrompt = prompt.trim().toLowerCase();
        if (normalizedPrompt.includes('stripline') || normalizedPrompt.includes('strip line')) {
            if (/\b(remove|hide|disable)\b/.test(normalizedPrompt)) {
                return `Removed all strip lines from "${updatedConfig.title || 'the chart'}".`;
            }
            var stripLine = getLatestStripLine(updatedConfig);
            if (stripLine) {
                var start = stripLine.start;
                var displayStart = typeof start === 'number'
                    ? Number(start.toFixed(2))
                    : start;
                var end = typeof start === 'number'
                    ? Number((start + Number(stripLine.size || 0)).toFixed(2))
                    : start;
                var axisName = getStripLineAxisName(updatedConfig, stripLine);
                var labelDescription = stripLine.text
                    ? ` labeled "${stripLine.text}"`
                    : '';
                return `Added a ${stripLine.color} strip line from ${displayStart} to ${end}${labelDescription} on the ${axisName} of "${updatedConfig.title || 'the chart'}".`;
            }
        }
        if (normalizedPrompt.includes('crosshair')) {
            return /\b(remove|hide|disable)\b/.test(normalizedPrompt)
                ? `Disabled the crosshair in "${updatedConfig.title || 'the chart'}".`
                : `Enabled the crosshair in "${updatedConfig.title || 'the chart'}".`;
        }
        if (normalizedPrompt.includes('legend')) {
            return updatedConfig.showLegend === false
                ? `Hidden the legend in "${updatedConfig.title || 'the chart'}".`
                : `Displayed the legend in "${updatedConfig.title || 'the chart'}".`;
        }
        if (normalizedPrompt.includes('tooltip')) {
            return ((_a = updatedConfig.tooltip) === null || _a === void 0 ? void 0 : _a.enable) === false
                ? `Disabled the tooltip in "${updatedConfig.title || 'the chart'}".`
                : `Enabled the tooltip in "${updatedConfig.title || 'the chart'}".`;
        }
        if (normalizedPrompt.includes('zoom')) {
            return `Updated the zoom settings in "${updatedConfig.title || 'the chart'}".`;
        }
        if (normalizedPrompt.includes('annotation')) {
            if (/\b(remove|hide|disable|delete|clear)\b/.test(normalizedPrompt)) {
                return `Removed all annotations from "${updatedConfig.title || 'the chart'}".`;
            }
            var annotation = (_b = updatedConfig.annotations) === null || _b === void 0 ? void 0 : _b[updatedConfig.annotations.length - 1];
            if (annotation) {
                var label = typeof annotation.content === 'string' ? decodeHtmlEntities(annotation.content).replace(/<[^>]+>/g, '') : 'Annotation';
                return `Added the annotation "${label}" to "${updatedConfig.title || 'the chart'}" at X "${annotation.x}" and Y ${annotation.y}.`;
            }
        }
        if (getRequestedIndicatorType(prompt)) {
            var latestIndicator = (_c = updatedConfig.indicators) === null || _c === void 0 ? void 0 : _c[updatedConfig.indicators.length - 1];
            if (latestIndicator) {
                return `Added a ${latestIndicator.type} indicator to "${updatedConfig.title || 'the chart'}" using the "${latestIndicator.seriesName || 'primary'}" series with period ${latestIndicator.period}.`;
            }
        }
        if (normalizedPrompt.includes('indicator') && /\b(remove|hide|disable)\b/.test(normalizedPrompt)) {
            return `Removed all indicators from "${updatedConfig.title || 'the chart'}".`;
        }
        if (changes.length === 1) {
            return `Updated "${updatedConfig.title || 'the chart'}": ${changes[0].property} changed from ${changes[0].previousValue} to ${changes[0].updatedValue}.`;
        }
        return `Updated "${updatedConfig.title || 'the chart'}" with ${changes.length} changes.`;
    }
    function getModificationSummary(config, changes) {
        var title = config.title || 'the chart';
        if (!changes.length) {
            return `No configuration changes were detected for "${title}".`;
        }
        if (changes.length === 1) {
            return `Updated "${title}": ${changes[0].property} changed from ${changes[0].previousValue} to ${changes[0].updatedValue}.`;
        }
        return `Updated "${title}" with ${changes.length} changes.`;
    }
    function getDisplaySeriesType(config, series) {
        if (config.chartType !== 'circular') {
            return mapSeriesType(series.type);
        }
        var normalizedType = (series.type || 'pie').toLowerCase();
        if (normalizedType === 'doughnut' || normalizedType === 'donut') {
            return 'Doughnut';
        }
        return mapAccumulationSeriesType(series.type);
    }
    function getCreationMessage(config, pointCount) {
        var _a;
        var title = config.title || 'Generated Chart';
        var seriesTypes = (config.series || []).map(function (series) {
            return getDisplaySeriesType(config, series);
        }).join(', ');
        return `Created "${title}" as a ${seriesTypes || 'chart'} with ${((_a = config.series) === null || _a === void 0 ? void 0 : _a.length) || 0} series and ${pointCount} data points. ` +
            'The chart is ready for review and further changes.';
    }
    function isIncompleteAxisPrompt(prompt) {
        return /^(x\s*-?\s*axis|xaxis|y\s*-?\s*axis|yaxis)$/i.test(prompt.trim());
    }
    function generateDefaultChartConfig(prompt) {
        var requestedType = getRequestedSeriesType(prompt) || 'Column';
        var circular = isCircularSeriesType(requestedType);
        if (circular) {
            return {
                chartType: 'circular',
                title: `Sample ${requestedType} Chart`,
                showLegend: true,
                tooltip: { enable: true },
                series: [{
                        type: requestedType,
                        name: 'Sample Data',
                        dataSource: [
                            { xvalue: 'Category A', yvalue: 40 },
                            { xvalue: 'Category B', yvalue: 30 },
                            { xvalue: 'Category C', yvalue: 20 },
                            { xvalue: 'Category D', yvalue: 10 }
                        ]
                    }]
            };
        }
        return {
            chartType: 'cartesian',
            title: `Sample ${requestedType} Chart`,
            showLegend: true,
            tooltip: { enable: true },
            xAxis: [{ type: 'category', title: 'Categories' }],
            yAxis: [{ type: 'numerical', title: 'Values', min: 0 }],
            series: [{
                    type: requestedType,
                    name: 'Sample Data',
                    dataSource: [
                        { xvalue: 'January', yvalue: 35 },
                        { xvalue: 'February', yvalue: 28 },
                        { xvalue: 'March', yvalue: 34 },
                        { xvalue: 'April', yvalue: 42 }
                    ]
                }]
        };
    }
    async function fetchChartConfig(prompt) {
        if (!CHART_SYSTEM_PROMPT) {
            return {
                CHART: false,
                Text: 'The chart system prompt is not loaded.'
            };
        }
        var requestType = isCodeRequest(prompt) ? 'code' : isChartModificationRequest(prompt) ? 'modify' : 'create';
        if (isGenericIndicatorRequest(prompt)) {
            return {
                CHART: false,
                Text: getIndicatorClarificationMessage()
            };
        }
        if (isIncompleteAxisPrompt(prompt)) {
            return {
                CHART: false,
                Text: currentChartConfig
                    ? 'Please include the X-axis or Y-axis change you want to apply. For example: "Add a red strip line on the X-axis from March to April."'
                    : 'Create a chart first, then provide the axis change you want to apply.'
            };
        }
        if (isIncompleteCreateRequest(prompt)) {
            return {
                CHART: false,
                Text: 'Please specify the chart you want to create. For example: "Create a pie chart showing product category distribution."'
            };
        }
        var dataAdditionClarification = getDataAdditionClarification(prompt);
        if (dataAdditionClarification) {
            return {
                CHART: false,
                Text: dataAdditionClarification
            };
        }
        if (requestType === 'code' && currentChartConfig) {
            return {
                CHART: true,
                Text: `Here is the complete JavaScript code for "${currentChartConfig.title || 'the current chart'}".`,
                Code: generateCompleteChartCode(currentChartConfig),
                ShowCode: true,
                ChartConfig: cloneChartConfig(currentChartConfig)
            };
        }
        var previous = currentChartConfig ? cloneChartConfig(currentChartConfig) : null;
        if (requestType === 'modify' && previous) {
            var local = applyLocalChartModification(prompt, previous);
            if (local) {
                var changes = compareChartConfigs(previous, local);
                currentChartConfig = cloneChartConfig(local);
                return {
                    CHART: true,
                    Text: getLocalModificationMessage(prompt, previous, local, changes),
                    ChangedCode: generatePartialUpdateCode(prompt, previous, local),
                    Code: generateCompleteChartCode(local),
                    CodeTitle: 'Complete JavaScript code',
                    CodeDescription: 'Includes required module injection, data, features, and initialization.',
                    ShowCode: true,
                    ChangeSummary: changes.length > 1
                        ? changes.map(function (change) {
                            return `${change.property}: ${change.previousValue} to ${change.updatedValue}`;
                        })
                        : undefined,
                    ChartConfig: local
                };
            }
            
            // If local modifications didn't apply, try public methods
            var publicMethodResult = applyPublicMethod(prompt, previous);
            if (publicMethodResult) {
                var changes = compareChartConfigs(previous, publicMethodResult);
                currentChartConfig = cloneChartConfig(publicMethodResult);
                return {
                    CHART: true,
                    Text: getLocalModificationMessage(prompt, previous, publicMethodResult, changes),
                    ChangedCode: generatePartialUpdateCode(prompt, previous, publicMethodResult),
                    Code: generateCompleteChartCode(publicMethodResult),
                    CodeTitle: 'Complete JavaScript code',
                    CodeDescription: 'Includes required module injection, data, features, and initialization.',
                    ShowCode: true,
                    ChangeSummary: changes.length > 1
                        ? changes.map(function (change) {
                            return `${change.property}: ${change.previousValue} to ${change.updatedValue}`;
                        })
                        : undefined,
                    ChartConfig: publicMethodResult
                };
            }
        }
        requestController === null || requestController === void 0 ? void 0 : requestController.abort();
        var controller = new AbortController();
        requestController = controller;
        var aiPrompt = requestType === 'modify' && previous ? buildModificationPrompt(prompt, previous) : prompt;
        var raw;
        
        try {
            if (typeof window.serverAIRequest !== 'function') {
                throw new Error('window.serverAIRequest is not available.');
            }
        
            raw = await window.serverAIRequest({
                messages: [
                    {
                        role: 'system',
                        content: CHART_SYSTEM_PROMPT
                    },
                    {
                        role: 'user',
                        content: aiPrompt
                    }
                ]
            });
        
            raw = getAIResponseText(raw);
        }
        finally {
            if (requestController === controller) {
                requestController = null;
            }
        }
        var jsonText = extractJson(raw);
        if (!jsonText) {
            return { CHART: false, Text: raw || 'The AI response did not contain a valid chart configuration.' };
        }
        var data;
        try {
            data = JSON.parse(jsonText);
        }
        catch (_a) {
            return { CHART: false, Text: 'The generated chart configuration was not valid JSON.' };
        }
        var normalized = normalizeConfig(data);
        if (!normalized) {
            if (requestType === 'modify' && previous) {
                return {
                    CHART: true,
                    Text: 'The requested modification could not be applied because the AI response was invalid. The existing chart was preserved.',
                    ChartConfig: previous
                };
            }
            var fallbackConfig = generateDefaultChartConfig(prompt);
            currentChartConfig = cloneChartConfig(fallbackConfig);
            return {
                CHART: true,
                Text: 'The AI response did not contain usable chart data, so representative sample data was used.',
                Code: generateCompleteChartCode(fallbackConfig),
                CodeTitle: 'Complete JavaScript code',
                CodeDescription: 'Includes required module injection, sample data, and initialization.',
                ShowCode: true,
                ChartConfig: fallbackConfig
            };
        }
        var config = applyRequestedSeriesType(normalized, prompt);
        if (requestType === 'create') {
            config = applyRequestedChartFeatures(prompt, config);
        }
        if (requestType === 'modify' && previous) {
            config = preserveUnrequestedProperties(previous, config, prompt);
        }
        var changes = previous ? compareChartConfigs(previous, config) : [];
        currentChartConfig = cloneChartConfig(config);
        var pointCount = (config.series || []).reduce(function (count, series) {
            var _a;
            return count + (((_a = series.dataSource) === null || _a === void 0 ? void 0 : _a.length) || 0);
        }, 0);
        return {
            CHART: true,
            Text: requestType === 'modify'
                ? getModificationSummary(config, changes)
                : getCreationMessage(config, pointCount),
            ChangedCode: requestType === 'modify' && previous
                ? generatePartialUpdateCode(prompt, previous, config)
                : undefined,
            Code: generateCompleteChartCode(config),
            CodeTitle: 'Complete JavaScript code',
            CodeDescription: 'Includes required module injection, data, features, and initialization.',
            ShowCode: true,
            ChangeSummary: requestType === 'modify' && changes.length
                ? changes.map(function (change) {
                    return `${change.property}: ${change.previousValue} to ${change.updatedValue}`;
                })
                : undefined,
            ChartConfig: config
        };
    }
    async function onPromptRequest(args) {
        var prompt = (args.prompt || '').trim();
        if (!prompt) {
            return;
        }
        var exportRequest = getChartExportRequest(prompt);
        if (exportRequest.isExport) {
            var exported = exportActiveChart(exportRequest.type);
            var payload = {
                CHART: false,
                Text: exported
                    ? `Exported "${(currentChartConfig === null || currentChartConfig === void 0 ? void 0 : currentChartConfig.title) || 'the latest chart'}" as ${exportRequest.type}.`
                    : 'Create or select a chart before exporting.'
            };
            aiAssist === null || aiAssist === void 0 ? void 0 : aiAssist.addPromptResponse({
                blocks: buildResponseBlocks(payload)
            });
            appendSessionMessage(prompt, payload);
            return;
        }
        if (isPrintRequest(prompt)) {
            var printed = printActiveChart();
            var payload = {
                CHART: false,
                Text: printed
                    ? 'Opened the print dialog for the latest chart.'
                    : 'Create or select a chart before printing.'
            };
            aiAssist === null || aiAssist === void 0 ? void 0 : aiAssist.addPromptResponse({
                blocks: buildResponseBlocks(payload)
            });
            appendSessionMessage(prompt, payload);
            return;
        }
        try {
            var payload = await fetchChartConfig(prompt);
            aiAssist === null || aiAssist === void 0 ? void 0 : aiAssist.addPromptResponse({
                blocks: buildResponseBlocks(payload)
            });
            appendSessionMessage(prompt, payload);
        }
        catch (error) {
            if (error instanceof DOMException && error.name === 'AbortError') {
                return;
            }
            var message = error instanceof Error
                ? error.message
                : 'Unknown error';
            var payload = {
                CHART: false,
                Text: `AI service error: ${message}`
            };
            aiAssist === null || aiAssist === void 0 ? void 0 : aiAssist.addPromptResponse({
                blocks: buildResponseBlocks(payload)
            });
            appendSessionMessage(prompt, payload);
        }
    }
    function onChartToolHandler(container, args) {
        var _a;
        var element = container.querySelector('.chart-tool-container');
        var status = container.querySelector('.chart-preview-status');
        var source = (args === null || args === void 0 ? void 0 : args.config) || (args === null || args === void 0 ? void 0 : args.props) || args;
        var config = (source === null || source === void 0 ? void 0 : source.ChartConfig) || (source === null || source === void 0 ? void 0 : source.chartConfig) || source;
        if (!element || !((_a = config === null || config === void 0 ? void 0 : config.series) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        renderChartWhenReady(element, config);
        container.addEventListener('pointerdown', function () {
            var chart = renderedCharts.get(element);
            if (chart && !chart.isDestroyed) {
                activeChart = chart;
                currentChartConfig = cloneChartConfig(config);
            }
        });
        var select = container.querySelector('[data-chart-export-select]');
        if (select) {
            select.onchange = function () {
                var chart = renderedCharts.get(element);
                if (!chart || chart.isDestroyed || !select.value) {
                    select.value = '';
                    return;
                }
                var type = select.value;
                var exported = exportChartInstance(chart, config, type);
                if (status) {
                    status.textContent = exported ? `${type} export started.` : 'Export could not be started.';
                }
                activeChart = chart;
                currentChartConfig = cloneChartConfig(config);
                select.value = '';
            };
        }
        var printButton = container.querySelector('[data-chart-print]');
        if (printButton) {
            printButton.onclick = function () {
                var chart = renderedCharts.get(element);
                if (!chart || chart.isDestroyed) {
                    return;
                }
                activeChart = chart;
                currentChartConfig = cloneChartConfig(config);
                chart.print();
            };
        }
    }
    function createAIAssist(messages = []) {
        var host = document.getElementById('ai-assist-container');
        if (host) {
            host.innerHTML = '';
        }
        var restoredPrompts = messages.map(function (message) {
            return {
                prompt: message.prompt,
                blocks: buildResponseBlocks(message.payload)
            };
        });
        aiAssist = new ej.interactivechat.AIAssistView({
            showHeader: true,
            width: '100%',
            height: '100%',
            prompts: restoredPrompts,
            promptSuggestions,
            bannerTemplate: [
                '<div class="banner-content">',
                '  <div class="e-icons e-assistview-icon"></div>',
                '  <h2>AI-Powered Chart Creation and Editing</h2>',
                '  <p>Generate chart code, create visual previews, and modify charts using natural language.</p>',
                '</div>'
            ].join(''),
            toolbarSettings: {
                items: [
                    {
                        iconCss: 'e-icons e-menu',
                        align: 'Right',
                        tooltip: 'History'
                    },
                    {
                        iconCss: 'e-icons e-edit-notes',
                        align: 'Right',
                        tooltip: 'New session'
                    }
                ],
                itemClicked: onToolbarItemClicked
            },
            responseToolbarSettings: {
                items: [
                    {
                        iconCss: 'e-icons e-assist-like',
                        align: 'Right'
                    },
                    {
                        iconCss: 'e-icons e-assist-dislike',
                        align: 'Right'
                    }
                ]
            },
            promptRequest: onPromptRequest
        });
        aiAssist.registerToolUI({
            toolName: 'change-summary-tool',
            template: [
                '<div class="change-summary-container">',
                '  <strong>Changes applied</strong>',
                '  <ul class="change-summary-list"></ul>',
                '</div>'
            ].join(''),
            handler: onChangeSummaryToolHandler
        });
        aiAssist.registerToolUI({
            toolName: 'code-tool',
            template: [
                '<div class="generated-code-container">',
                '  <div class="generated-code-header">',
                '    <div class="generated-code-heading">',
                '      <strong class="generated-code-title"></strong>',
                '      <div class="generated-code-description"></div>',
                '    </div>',
                '    <button type="button" class="copy-code-button">Copy code</button>',
                '  </div>',
                '  <div class="generated-code-switch" role="tablist" aria-label="Generated code view">',
                '    <button type="button" class="generated-code-switch-button" data-code-view="changes" role="tab">',
                '      Code changes',
                '    </button>',
                '    <button type="button" class="generated-code-switch-button" data-code-view="complete" role="tab">',
                '      Complete JavaScript code',
                '    </button>',
                '  </div>',
                '  <pre class="generated-code-wrapper" role="tabpanel"><code class="generated-code"></code></pre>',
                '</div>'
            ].join(''),
            handler: onCodeToolHandler
        });
        aiAssist.registerToolUI({
            toolName: 'chart-tool',
            template: [
                '<div class="generated-chart-container">',
                '  <div class="generated-chart-header">',
                '    <strong>Chart preview</strong>',
                '    <div class="chart-preview-actions">',
                '      <select class="chart-export-select" data-chart-export-select aria-label="Export chart">',
                '        <option value="" selected disabled hidden>Export</option>',
                '        <option value="PNG">PNG</option>',
                '        <option value="JPEG">JPEG</option>',
                '        <option value="SVG">SVG</option>',
                '        <option value="PDF">PDF</option>',
                '        <option value="XLSX">XLSX</option>',
                '        <option value="CSV">CSV</option>',
                '      </select>',
                '      <button type="button" class="chart-print-button" data-chart-print>Print</button>',
                '    </div>',
                '  </div>',
                '  <div class="chart-preview-status" role="status" aria-live="polite"></div>',
                '  <div class="chart-tool-container"></div>',
                '</div>'
            ].join(''),
            handler: onChartToolHandler
        });
        aiAssist.refresh = function () {
            if (!aiAssist || aiAssist.isDestroyed) {
                return;
            }
            window.requestAnimationFrame(function () {
                window.requestAnimationFrame(function () {
                    refreshChartsForCurrentTheme();
                });
            });
        };
        aiAssist.appendTo('#ai-assist-container');
        if (restoredPrompts.length) {
            window.requestAnimationFrame(function () {
                window.requestAnimationFrame(function () {
                    refreshRestoredCharts();
                    setLatestRestoredChartAsActive();
                });
            });
        }
    }
    function restoreSession(session) {
        if (session.id === currentSession.id) {
            return;
        }
        saveCurrentSession();
        requestController === null || requestController === void 0 ? void 0 : requestController.abort();
        requestController = null;
        destroyAllCharts();
        if (aiAssist && !aiAssist.isDestroyed) {
            aiAssist.destroy();
        }
        aiAssist = null;
        var host = document.getElementById('ai-assist-container');
        if (host) {
            host.innerHTML = '';
        }
        currentSession = cloneHistorySession(session);
        selectedSessionId = session.id;
        currentChartConfig = null;
        activeChart = null;
        var latestChartMessage = currentSession.messages.slice().reverse().find(function (message) {
            return Boolean(message.payload.ChartConfig);
        });
        if (latestChartMessage === null || latestChartMessage === void 0 ? void 0 : latestChartMessage.payload.ChartConfig) {
            currentChartConfig = cloneChartConfig(latestChartMessage.payload.ChartConfig);
        }
        createAIAssist(currentSession.messages);
        renderHistory();
        window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () {
                refreshRestoredCharts();
                setLatestRestoredChartAsActive();
            });
        });
    }
    function resetAIAssist() {
        saveCurrentSession();
        requestController === null || requestController === void 0 ? void 0 : requestController.abort();
        requestController = null;
        destroyAllCharts();
        if (aiAssist && !aiAssist.isDestroyed) {
            aiAssist.destroy();
        }
        aiAssist = null;
        currentSession = createHistorySession();
        selectedSessionId = null;
        currentChartConfig = null;
        activeChart = null;
        showHistory = false;
        promptSuggestions = CHART_SUGGESTIONS.slice();
        var host = document.getElementById('ai-assist-container');
        if (host) {
            host.innerHTML = '';
        }
        createAIAssist();
        renderHistory();
        renderVisibility();
    }
    function onToolbarItemClicked(args) {
        var _a;
        var icon = ((_a = args.item) === null || _a === void 0 ? void 0 : _a.iconCss) || '';
        if (icon.includes('e-menu')) {
            showHistory = !showHistory;
            renderVisibility();
        }
        else if (icon.includes('e-edit-notes')) {
            resetAIAssist();
        }
    }
    function onDocumentClick(event) {
        var target = event.target instanceof Element
            ? event.target
            : null;
        if (!target) {
            return;
        }
        if (target.closest('#history-close-btn')) {
            showHistory = false;
            renderVisibility();
            return;
        }
        var deleteButton = target.closest('[data-history-delete-session-id]');
        if (deleteButton) {
            event.preventDefault();
            event.stopPropagation();
            var sessionId = deleteButton.getAttribute('data-history-delete-session-id') || '';
            var sessionIndex = historySessions.findIndex(function (session) {
                return session.id === sessionId;
            });
            if (sessionIndex !== -1) {
                historySessions.splice(sessionIndex, 1);
                saveHistorySessions(historySessions);
                if (selectedSessionId === sessionId) {
                    requestController === null || requestController === void 0 ? void 0 : requestController.abort();
                    requestController = null;
                    destroyAllCharts();
                    if (aiAssist && !aiAssist.isDestroyed) {
                        aiAssist.destroy();
                    }
                    aiAssist = null;
                    currentSession = createHistorySession();
                    selectedSessionId = null;
                    currentChartConfig = null;
                    activeChart = null;
                    var host = document.getElementById('ai-assist-container');
                    if (host) {
                        host.innerHTML = '';
                    }
                    createAIAssist();
                }
                renderHistory();
            }
            return;
        }
        var historyItem = target.closest('.history-item[data-history-session-id]');
        if (historyItem) {
            var sessionId = historyItem.getAttribute('data-history-session-id') || '';
            var session = historySessions.find(function (item) {
                return item.id === sessionId;
            });
            if (session) {
                restoreSession(session);
            }
            return;
        }
    }
    function onBeforeUnload() {
        saveCurrentSession();
        requestController === null || requestController === void 0 ? void 0 : requestController.abort();
    }
    window.removeEventListener('beforeunload', onBeforeUnload);
    window.addEventListener('beforeunload', onBeforeUnload);
    document.removeEventListener('click', onDocumentClick);
    document.addEventListener('click', onDocumentClick);
    createAIAssist();
    renderHistory();
    renderVisibility();
};
