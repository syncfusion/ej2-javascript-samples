async function fingerPrint() {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 300;
    canvas.style.display = "none";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context not available");

    const size = 24;
    const diamondSize = 28;
    const gap = 4;
    const startX = 30;
    const startY = 30;
    const blue = "#1A3276";
    const orange = "#F28C00";

    const colorMap = [
      ["blue", "blue", "diamond"],
      ["blue", "orange", "blue"],
      ["blue", "blue", "blue"]
    ];

    const drawSquare = (x, y, color) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, size, size);
    };

    const drawDiamond = (centerX, centerY, size, color) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - size / 2);
      ctx.lineTo(centerX + size / 2, centerY);
      ctx.lineTo(centerX, centerY + size / 2);
      ctx.lineTo(centerX - size / 2, centerY);
      ctx.closePath();
      ctx.fill();
    };

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const type = colorMap[row][col];
        const x = startX + col * (size + gap);
        const y = startY + row * (size + gap);
        if (type === "blue") drawSquare(x, y, blue);
        else if (type === "orange") drawSquare(x, y, orange);
        else if (type === "diamond") drawDiamond(x + size / 2, y + size / 2, diamondSize, orange);
      }
    }

    ctx.font = "20px Arial";
    ctx.fillStyle = blue;
    ctx.textBaseline = "middle";
    ctx.fillText("Syncfusion", startX + 3 * (size + gap) + 20, startY + size + gap);

    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = "rgb(255,0,255)";
    ctx.beginPath(); ctx.arc(50, 200, 50, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "rgb(0,255,255)";
    ctx.beginPath(); ctx.arc(100, 200, 50, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "rgb(255,255,0)";
    ctx.beginPath(); ctx.arc(75, 250, 50, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "rgb(255,0,255)";
    ctx.beginPath();
    ctx.arc(200, 200, 75, 0, Math.PI * 2, true);
    ctx.arc(200, 200, 25, 0, Math.PI * 2, true);
    ctx.fill("evenodd");

    const sha256 = async (str) => {
      const encoder = new TextEncoder();
      const data = encoder.encode(str);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => ('0' + b.toString(16)).slice(-2)).join('');
    };

    const visitorID = await sha256(canvas.toDataURL());
    document.body.removeChild(canvas); // Clean up the canvas element
    return visitorID;
  } 
  catch (error) {
    console.error(error);
    return null;
  }
}

window.serverAIRequest = async (settings) => {
    try {
        const visitorId = await fingerPrint();
        let response = await fetch('https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                visitorId,
                messages: settings
            })
        })
        let result = await response.json();
        if (!response.ok) {
            throw new Error(result.error || 'Network response was not ok');
        }
        result.response = result.response.replace('END_INSERTION', '');
        return result.response;
    } catch (error) {
        if (error.message.includes('token limit')) {
            document.querySelector('.banner-message').innerHTML = error.message;
            document.querySelector('.sb-token-header').classList.remove('sb-hide');
        }
        else if (error.message.includes('Failed to fetch')) {
            console.warn("To test these samples locally, configure and use your own API key.");
        }
        else {
            console.error('There was a problem with your fetch operation:', error);
        }
    }
};

window.getOpenAiModelRTE = async (subQuery, promptQuery) => {
    try {
        const visitorId = await fingerPrint();
        // Make a POST request to the /api/rte endpoint with the required data.
        let response = await fetch('https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net/api/rte', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                visitorId,
                subQuery,
                promptQuery
            })
        });

        let result = await response.json();
        if (!response.ok) {
            throw new Error(result.error || 'Network response was not ok');
        }
        return result.response;
    } catch (error) {
        if (error.message.includes('token limit')) {
            document.querySelector('.banner-message').innerHTML = error.message;
            document.querySelector('.sb-token-header').classList.remove('sb-hide');
        }
        else if (error.message.includes('Failed to fetch')) {
            console.warn("To test these samples locally, configure and use your own API key.");
        } 
        else {
            console.error('There was a problem with your fetch operation:', error);
        }  
    }
};

window.OpenAiModelKanban = async (promptQuery) => {
    try {
        const visitorId = await fingerPrint();
        let response = await fetch('https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net/api/kanban', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                visitorId,
                promptQuery
            })
        })
        let result = await response.json();
        if (!response.ok) {
            throw new Error(result.error || 'Network response was not ok');
        }
        result.response = result.response.replace('END_INSERTION', '');
        return result.response;
    } catch (error) {
        if (error.message.includes('token limit')) {
            document.querySelector('.banner-message').innerHTML = error.message;
            document.querySelector('.sb-token-header').classList.remove('sb-hide');
        }
        else if (error.message.includes('Failed to fetch')) {
            console.warn("To test these samples locally, configure and use your own API key.");
        }
        else {
            console.error('There was a problem with your fetch operation:', error);
        }
    }
};

/* Start Chart Code */

/* Start Data Preprocessing */

function parseCleanedLines(linesText, original) {
    var lines = linesText.split('\n').filter(function (line) {
        return line.trim().length;
    });
    var out = [];
    var index = 0;

    lines.forEach(function (line) {
        var pieces = line.split(':');
        var stamp = pieces[0];
        var value = pieces[1];
        if (!stamp || !value) {
            return;
        }

        var dateParts = stamp.trim().split('-').map(function (part) {
            return parseInt(part, 10);
        });
        var val = parseFloat(value.trim());

        if (dateParts.length !== 6 || dateParts.some(function (part) {
            return !isFinite(part);
        }) || isNaN(val)) {
            return;
        }

        var date = new Date(
            dateParts[0],
            dateParts[1] - 1,
            dateParts[2],
            dateParts[3],
            dateParts[4],
            dateParts[5]
        );
        var current = original[index];
        var next = original[index + 1];
        var color = !current || current.visitors == null ||
            !next || next.visitors == null ? '#D84227' : undefined;

        out.push({ time: date, visitors: val, color: color });
        index++;
    });

    return out;
}

var generateDataPreprocessingChartSchema = function (componentType) {
    componentType = componentType || 'Chart';
    return {
        title: 'Syncfusion Universal AI Response (Chart)',
        type: 'object',
        props: {
            componentType: { type: 'string', 'const': componentType },
            properties: { type: 'object', properties: {} }
        },
        includedProps: {
            type: 'array',
            items: { type: 'string' },
            default: ['DataSource']
        },
        ignoreProps: {
            type: 'array',
            items: { type: 'string' },
            default: [
                'primaryXAxis', 'primaryYAxis', 'legendSettings', 'chartArea',
                'series.type', 'theme', 'palettes', 'tooltip', 'locale',
                'enableRtl', 'cssClass', 'created', 'destroyed', 'height', 'width'
            ]
        },
        explanation: { type: 'string' },
        confidence: { type: 'number', minimum: 0, maximum: 1 },
        required: ['props', 'explanation', 'includedProps', 'ignoreProps', 'confidence'],
        additionalProperties: true
    };
};

window.fetchAiResponse = async function (prompt, chart, state, raw) {
    try {
        if (typeof window.serverAIRequest !== 'function') {
            throw new Error(
                'serverAIRequest is not available. Make sure backend/ai-service.js ' +
                'is loaded before this sample runs.'
            );
        }

        var schema = generateDataPreprocessingChartSchema('Chart');
        var systemPrompt = [
            'You help clean hourly website visitors data for a Syncfusion Chart.',
            'Return ONLY cleaned lines in "yyyy-MM-dd-HH-m-ss:Value" format (no extra text).',
            'We will set series[0].dataSource from your lines.',
            'Do not modify chart configuration.',
            '',
            'Current chart state: ' + JSON.stringify(state),
            'Schema (for reference): ' + JSON.stringify(schema)
        ].join('\n');

        var response = await window.serverAIRequest({
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: prompt }
            ]
        });

        if (!response) {
            return { props: {}, explanation: 'Empty AI output', confidence: 0 };
        }

        var cleanedText = response.indexOf('```') >= 0
            ? response.split('```')[1].trim()
            : response.trim();
        var parsed = parseCleanedLines(cleanedText, raw || []);

        return {
            props: { series: [{ dataSource: parsed }] },
            includedProps: ['DataSource'],
            ignoreProps: schema.ignoreProps.default,
            explanation: 'Filled missing values & resolved outliers in dataSource.',
            confidence: 0.95
        };

    } catch (e) {
        console.error('fetchAI error:', e);
        return {
            props: {
                series: [{
                    dataSource: raw
                }]
            }
        };
    }
};

window.executeDataPreprocessingChartAction = function (data, chart, includedProps) {
    if (data && data.props && chart && typeof chart.setProperties === 'function') {
        chart.setProperties(data.props, false);
    }
};

/* End Data Preprocessing */

/* Start Generate Chart */

window.fetchAIForAssistViewPayload = async function (text) {
    if (!isChartRequest(text)) {
        return {
            Text: "Include the keyword 'chart' or any other term commonly associated with data visualization in the prompt.",
            CHART: false
        };
    }

    var cfg = await fetchAIConfig(text);
    (cfg.series || []).forEach(function (s) { s.visible = true; });
    return { Text: getRandomLeadIn(), CHART: true, ChartConfig: cfg };
};

// -----------------------------------------------------------------------
// Lead-in text variants
// -----------------------------------------------------------------------
function getRandomLeadIn() {
    var lines = [
        "Here's the chart based on your request:",
        'Your data visualization is ready:',
        'Generated chart as per your input:',
        'This chart illustrates the information you asked for:',
        "Here's what your data looks like in chart form:",
        'Hope this chart helps you see the trends clearly!',
        'Transformed your idea into a visual story:',
        "Turning numbers into visuals\u2014here's your chart!"
    ];
    return lines[Math.floor(Math.random() * lines.length)];
}

// -----------------------------------------------------------------------
// Keyword detection
// -----------------------------------------------------------------------
function isChartRequest(text) {
    if (!text) return false;
    var t = String(text).toLowerCase();
    var keywords = [
        'chart', 'graph', 'plot', 'visualize', 'visualization', 'data',
        'statistics', 'bar', 'pie', 'line', 'area', 'column', 'doughnut',
        'comparison', 'track', 'compare', 'display'
    ];
    for (var i = 0; i < keywords.length; i++) {
        if (t.indexOf(keywords[i]) >= 0) return true;
    }
    return false;
}

// -----------------------------------------------------------------------
// JSON extraction helper (handles fenced and unfenced responses)
// -----------------------------------------------------------------------
function extractJson(s) {
    if (!s) return undefined;
    var fenceJson = s.match(/```json\s*([\s\S]*?)```/i);
    if (fenceJson && fenceJson[1]) {
        return fenceJson[1].trim();
    }
    var fenceAny = s.match(/```\s*([\s\S]*?)```/i);
    if (fenceAny && fenceAny[1]) {
        return fenceAny[1].trim();
    }
    var first = s.indexOf('{');
    var last = s.lastIndexOf('}');
    if (first !== -1 && last !== -1 && last > first) {
        return s.slice(first, last + 1).trim();
    }
    return undefined;
}

// -----------------------------------------------------------------------
// Fetch the AI-generated ChartConfig
// -----------------------------------------------------------------------
async function fetchAIConfig(text) {
    if (!text) return generateDefaultChartConfig('');

    var schema = window.generateChartSchema && window.generateChartSchema('chart');
    var systemPrompt = buildChartSystemPrompt();

    var raw;
    try {
        raw = await window.serverAIRequest({
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: text }
            ],
            schema: schema
        });
    } catch (e) {
        raw = undefined;
    }

    if (!raw) return generateDefaultChartConfig(text);

    var jsonStr = extractJson(raw);
    if (!jsonStr) return generateDefaultChartConfig(text);

    var data;
    try {
        data = JSON.parse(jsonStr);
    } catch (e) {
        return generateDefaultChartConfig(text);
    }

    var props = (data && data.props) || {};
    var properties = (data && data.properties) || {};
    var pFallback =
        (data && data.props && data.props.properties) ||
        properties ||
        (data && data.props) ||
        data;

    var series = Array.isArray(pFallback && pFallback.series) ? pFallback.series : [];
    if (!series.length) return generateDefaultChartConfig(text);

    var seriesTypes = {};
    series.forEach(function (s) {
        var t = String((s && s.type) || '').toLowerCase();
        if (t) seriesTypes[t] = true;
    });

    var chartType;
    if (pFallback && (pFallback.chartType === 'cartesian' || pFallback.chartType === 'circular')) {
        chartType = pFallback.chartType;
    } else {
        var anyCircular = seriesTypes['pie'] || seriesTypes['doughnut'] || seriesTypes['donut'];
        chartType = anyCircular ? 'circular' : 'cartesian';
    }

    var cfg = {
        chartType: chartType,
        title: (props && props.title) || (pFallback && pFallback.title) || 'Chart',
        showLegend:
            (typeof (props && props.legend) === 'boolean' ? props.legend : undefined) != null
                ? !!props.legend
                : (pFallback && pFallback.showLegend !== undefined ? !!pFallback.showLegend : true),
        sideBySidePlacement: !!(pFallback && pFallback.sideBySidePlacement),
        series: series
    };

    if (chartType === 'cartesian') {
        var xTitle = props && props.xAxis && props.xAxis[0] && props.xAxis[0].title;
        var yTitle = props && props.yAxis && props.yAxis[0] && props.yAxis[0].title;
        cfg.xAxis = (pFallback && Array.isArray(pFallback.xAxis) && pFallback.xAxis.length)
            ? pFallback.xAxis
            : [{ type: 'category', title: xTitle, labelRotation: 0 }];
        cfg.yAxis = (pFallback && Array.isArray(pFallback.yAxis) && pFallback.yAxis.length)
            ? pFallback.yAxis
            : [{ type: 'numerical', title: yTitle, min: 0 }];
    }

    return cfg;
}

// -----------------------------------------------------------------------
// Default config when the AI service is unavailable
// -----------------------------------------------------------------------
function generateDefaultChartConfig(text) {
    var lower = (text || '').toLowerCase();

    if (lower.indexOf('pie') >= 0 || lower.indexOf('doughnut') >= 0) {
        return {
            chartType: 'circular',
            title: 'Sample Pie Chart',
            showLegend: true,
            series: [{
                type: 'pie',
                name: 'Market Share',
                tooltip: true,
                dataSource: [
                    { xvalue: 'A', yvalue: 40 },
                    { xvalue: 'B', yvalue: 30 },
                    { xvalue: 'C', yvalue: 20 },
                    { xvalue: 'D', yvalue: 10 }
                ]
            }]
        };
    }

    if (lower.indexOf('line') >= 0 || lower.indexOf('trend') >= 0) {
        return {
            chartType: 'cartesian',
            title: 'Sample Line Chart',
            showLegend: true,
            xAxis: [{ type: 'category', title: 'Time Period' }],
            yAxis: [{ type: 'numerical', title: 'Values' }],
            series: [{
                type: 'line',
                name: 'Trend Data',
                tooltip: true,
                dataSource: [
                    { xvalue: 'Q1', yvalue: 21 },
                    { xvalue: 'Q2', yvalue: 24 },
                    { xvalue: 'Q3', yvalue: 36 },
                    { xvalue: 'Q4', yvalue: 38 }
                ]
            }]
        };
    }

    if (lower.indexOf('area') >= 0) {
        return {
            chartType: 'cartesian',
            title: 'Sample Area Chart',
            showLegend: true,
            xAxis: [{ type: 'category', title: 'Months' }],
            yAxis: [{ type: 'numerical', title: 'Revenue' }],
            series: [{
                type: 'area',
                name: 'Revenue',
                tooltip: true,
                dataSource: [
                    { xvalue: 'Jan', yvalue: 10 },
                    { xvalue: 'Feb', yvalue: 20 },
                    { xvalue: 'Mar', yvalue: 30 },
                    { xvalue: 'Apr', yvalue: 40 },
                    { xvalue: 'May', yvalue: 50 },
                    { xvalue: 'Jun', yvalue: 60 }
                ]
            }]
        };
    }

    return {
        chartType: 'cartesian',
        title: 'Sample Column Chart',
        showLegend: true,
        sideBySidePlacement: true,
        xAxis: [{ type: 'category', title: 'Categories' }],
        yAxis: [{ type: 'numerical', title: 'Values' }],
        series: [{
            type: 'column',
            name: 'Sales Data',
            tooltip: true,
            dataSource: [
                { xvalue: 'Jan', yvalue: 35 },
                { xvalue: 'Feb', yvalue: 28 },
                { xvalue: 'Mar', yvalue: 34 }
            ]
        }]
    };
}

function buildChartSystemPrompt() {
    return [
        'You are a data visualization assistant.',
        'Return ONLY JSON with this envelope and field names:',
        '- Must include "props" and "properties".',
        '- "properties" MUST include "series": array of series objects.',
        '- Do NOT return "properties.data".',
        '        ### Supported Chart Types',
        '        - **Chart Type**: Only \'cartesian\' or \'circular\'',
        '        - **Series Types**: Line, Column, Spline, Area, Pie, Doughnut',
        'Shape:',
        '{',
        '  "props": {',
        '    "chartType": "cartesian | circular",',
        '    "title": "<Chart Title>",',
        '    "showLegend": true,',
        '    "sideBySidePlacement": true | false,',
        '    "xAxis": [ { "type": "category | numerical | datetime | logarithmic", "title": "xvalue", "labelRotation": 0 } ],',
        '    "yAxis": [ { "type": "numerical | logarithmic", "title": "yvalue", "min": 0 } ]',
        '  },',
        '  "properties": {',
        '    "series": [',
        '      {',
        '        "type": "line | column | spline | area | pie | doughnut",',
        '        "name": "<Series Name>",',
        '        "dataSource": [   { "xvalue": "North", "yvalue": 100 },',
        '                { "xvalue": "South", "yvalue": 80 },',
        '                { "xvalue": "East", "yvalue": 60 },',
        '                { "xvalue": "West", "yvalue": 90 } ],',
        '        "tooltip": true | false',
        '      }',
        '    ]',
        '  }',
        '}',
        'Rules:',
        '- Infer chartType from keywords.',
        '- Title: Derive a meaningful title from the user input.',
        '- For cartesian charts, include xAxis and yAxis.',
        '- Use xvalue/yvalue pairs in dataSource.',
        '- Default showLegend to true.',
        '- Data Source: Always include \'xvalue\' and \'yvalue\' pairs.',
        '- Return ONLY JSON, no code fences.'
    ].join('\n');
}

window.executeGenerateChartAction = function (data, chart) {
    if (!data || !data.ChartConfig || !data.ChartConfig.series || !chart || !chart.series) {
        return;
    }

    var incoming = data.ChartConfig.series;
    chart.series.forEach(function (s, i) {
        s.dataSource = Array.isArray(incoming[i] && incoming[i].dataSource)
            ? incoming[i].dataSource
            : [];
    });

    if (typeof chart.setProperties === 'function') {
        chart.setProperties(data.ChartConfig.series, true);
    }
};

window.generateChartSchema = function (componentType) {
    return {
        title: 'Syncfusion Universal AI Chart Response',
        type: 'object',
        props: {
            componentType: { type: 'string', 'const': componentType },
            properties: {
                type: 'object',
                properties: {
                    chartType: { type: 'string', 'enum': ['cartesian', 'circular'] },
                    title: { type: 'string' },
                    showLegend: { type: 'boolean', 'default': true },
                    sideBySidePlacement: { type: 'boolean', 'default': false },
                    xAxis: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                type: { type: 'string', 'enum': ['category', 'numerical', 'datetime', 'logarithmic'] },
                                title: { type: 'string' },
                                min: { type: 'number' },
                                max: { type: 'number' },
                                labelRotation: { type: 'number' }
                            },
                            required: ['type']
                        }
                    },
                    yAxis: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                type: { type: 'string', 'enum': ['double', 'datetime', 'logarithmic'] },
                                title: { type: 'string' },
                                min: { type: 'number' },
                                max: { type: 'number' },
                                labelRotation: { type: 'number' }
                            },
                            required: ['type']
                        }
                    },
                    series: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                type: { type: 'string', 'enum': ['line', 'column', 'spline', 'area', 'pie', 'doughnut'] },
                                name: { type: 'string' },
                                tooltip: { type: 'boolean', 'default': true },
                                dataSource: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            xvalue: { anyOf: [{ type: 'string' }, { type: 'number' }] },
                                            yvalue: { type: 'number' }
                                        },
                                        required: ['xvalue', 'yvalue']
                                    },
                                    minItems: 1
                                },
                                fill: { type: 'string' },
                                width: { type: 'number' },
                                marker: {
                                    type: 'object',
                                    properties: {
                                        visible: { type: 'boolean' },
                                        width: { type: 'number' },
                                        height: { type: 'number' }
                                    }
                                }
                            },
                            required: ['type', 'name', 'dataSource']
                        },
                        minItems: 1
                    }
                },
                description: 'Full chart config. Use only supported chart/series types and valid axis objects.'
            },
            required: ['componentType', 'properties']
        },
        includedProps: {
            type: 'array',
            items: { type: 'string' },
            'default': ['Axes', 'Series', 'Legend', 'Tooltip', 'SideBySidePlacement', 'Title']
        },
        ignoreProps: {
            type: 'array',
            items: { type: 'string' },
            'default': [
                'dataSourceBinding',
                'height', 'width', 'locale', 'enableRtl', 'cssClass',
                'theme', 'palette', 'annotations'
            ]
        },
        explanation: { type: 'string' },
        confidence: { type: 'number', minimum: 0, maximum: 1 },
        required: ['props', 'explanation', 'includedProps', 'ignoreProps', 'confidence'],
        additionalProperties: true
    };
};

/* End Generate Chart */

window.fetchAiStockResponse = async function (
    userPrompt,
    chart,
    chartState,
    originalData
) {

    var schema =
        window.generateStockChartSchema(
            'Chart'
        );

    var systemPrompt =
        'Return ONLY the cleaned/forecast lines in "yyyy-MM-dd:High:Low:Open:Close".\n' +
        'We will set series[0].dataSource from your lines. Do not change chart configuration.\n\n' +
        'Current chart state: ' +
        JSON.stringify(chartState) +
        '\n\n' +
        'Schema (for reference): ' +
        JSON.stringify(schema);

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

            props: {},

            explanation:
                'Empty AI output',

            confidence: 0
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

    return {

        props: {
            series: [
                {
                    dataSource: parsed
                }
            ]
        },

        includedProps: [
            'DataSource'
        ],

        ignoreProps:
            schema.ignoreProps.default,

        explanation:
            'Appended 35 realistic OHLC rows to dataSource for forecasting.',

        confidence: 0.95
    };
};

function parseLinesToPoints( text, original) {

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

window.generateStockChartSchema = function (componentType) {

    componentType = componentType || 'Chart';

    return {

        title: 'Syncfusion Universal AI Response (Chart)',

        type: 'object',

        props: {
            componentType: {
                type: 'string',
                const: componentType
            },
            properties: {
                type: 'object',
                properties: {}
            }
        },

        includedProps: {
            type: 'array',
            items: {
                type: 'string'
            },
            default: ['DataSource']
        },

        ignoreProps: {
            type: 'array',
            items: {
                type: 'string'
            },
            default: [
                'primaryXAxis',
                'primaryYAxis',
                'legendSettings',
                'chartArea',
                'series.type',
                'theme',
                'palettes',
                'tooltip',
                'locale',
                'enableRtl',
                'cssClass',
                'created',
                'destroyed',
                'height',
                'width'
            ]
        },

        explanation: {
            type: 'string'
        },

        confidence: {
            type: 'number',
            minimum: 0,
            maximum: 1
        },

        required: [
            'props',
            'explanation',
            'includedProps',
            'ignoreProps',
            'confidence'
        ],

        additionalProperties: true
    };
};

/* End Chart Code */

window.getUserID = async function() {
    return fingerPrint();
};

//Assistview samples AI usage
function getFileExtension(fileName) {
    return fileName.split('.').pop().toLowerCase();
}

function isTextFile(fileName) {
    var textExtensions = ['txt', 'md', 'css', 'html', 'json', 'xml', 'js', 'ts', 'jsx', 'tsx', 'py', 'java', 'cpp', 'c', 'h', 'cs', 'rb', 'php', 'csv', 'readme', 'doc', 'docx'];
    var ext = getFileExtension(fileName);
    return textExtensions.includes(ext);
}

function isImageFile(fileName) {
    var imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];
    var ext = getFileExtension(fileName);
    return imageExtensions.includes(ext);
}

async function getFileContext(attachedFiles) {
    var filePromises = [];
    var fileContents = [];

    attachedFiles.forEach(function(file) {
        var promise = new Promise(function(resolve, reject) {
            if (file.rawFile) {
                var reader = new FileReader();
                var fileName = file.name;
                
                reader.onload = function(e) {
                    var fileType = isTextFile(fileName) ? 'text' : isImageFile(fileName) ? 'image' : 'binary';
                    fileContents.push({
                        name: fileName,
                        type: file.type,
                        fileType: fileType,
                        content: e.target.result
                    });
                    resolve();
                };
                
                reader.onerror = function() {
                    reject(new Error('Error reading file: ' + fileName));
                };

                if (isTextFile(fileName)) {
                    reader.readAsText(file.rawFile);
                } else {
                    reader.readAsDataURL(file.rawFile);
                }
            } else {
                resolve();
            }
        });
        filePromises.push(promise);
    });

    await Promise.all(filePromises);
    return fileContents;
}

window.getOpenAIModelAssistview = async (args, abortController) => {
    try {
        var fileContents = [];
        var aiPrompt = args.prompt;
        if (args.attachedFiles && args.attachedFiles.length > 0) {
            fileContents = await getFileContext(args.attachedFiles);
            var attachedFileContext = 'Attached Files:\n';
            fileContents.forEach(function(file) {
                attachedFileContext += '\n--- File: ' + file.name + ' (Type: ' + file.type + ', File Type: ' + file.fileType + ') ---\n';
                
                if (file.fileType === 'text') {
                    attachedFileContext += file.content + '\n';
                } else if (file.fileType === 'image') {
                    attachedFileContext += '[Image file: ' + file.name + ' - Base64 encoded data available]\n';
                    attachedFileContext += file.content + '\n';
                } else {
                    attachedFileContext += '[Binary file: ' + file.name + ' - Please process this file]\n';
                    attachedFileContext += file.content.substring(0, 500) + '...\n';
                }
            });
            aiPrompt = attachedFileContext + '\n\nUser Prompt: ' + args.prompt;
        }

        const userID = await window.getUserID();
        if (!userID) {
            return { response: 'Failed to generate user ID. Please try again later.' };
        }
        var systemPrompt = args.systemPrompt || 'You are a helpful assistant.';
        const requestBody = {
            visitorId: userID,
            messages: {
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: aiPrompt }
                ]
            }
        };
        if (fileContents && fileContents.length > 0) {
            requestBody.fileContents = fileContents;
        }
        const response = await fetch(window.AI_SERVICE_URL + '/api/assistview', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody),
            signal: abortController ? abortController.signal : undefined
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || ("HTTP Error " + response.status));
        }
        // Handle plain-text responses (e.g., moderated input) that do not return usage details.
        const result = await response.json().catch(async function () {
            return { response: await response.text() };
        });
        const aiResponse = result.response ? result.response.replace('END_INSERTION', '') : 'We could not reach the AI service; please try again later.';
        // Return the response along with the model and usage details returned by the AI service.
        return { response: aiResponse, model: result.model, usage: result.usage };
    } catch (error) {
        if (error.name === "AbortError") {
            return null;
        } else if (error.message && error.message.indexOf("token limit") !== -1) {
            return { response: error.message };
        }
        return { response: 'We could not reach the AI service; please try again later.' };
    }
};

window.getAIResponse = async (args, abortController) => {
    try {
        var fileContents = [];
        var aiPrompt = args.prompt;
        if (args.attachedFiles && args.attachedFiles.length > 0) {
            fileContents = await getFileContext(args.attachedFiles);
            var attachedFileContext = 'Attached Files:\n';
            fileContents.forEach(function(file) {
                attachedFileContext += '\n--- File: ' + file.name + ' (Type: ' + file.type + ', File Type: ' + file.fileType + ') ---\n';
                
                if (file.fileType === 'text') {
                    attachedFileContext += file.content + '\n';
                } else if (file.fileType === 'image') {
                    attachedFileContext += '[Image file: ' + file.name + ' - Base64 encoded data available]\n';
                    attachedFileContext += file.content + '\n';
                } else {
                    attachedFileContext += '[Binary file: ' + file.name + ' - Please process this file]\n';
                    attachedFileContext += file.content.substring(0, 500) + '...\n';
                }
            });
            aiPrompt = attachedFileContext + '\n\nUser Prompt: ' + args.prompt;
        }
        
        const userID = await window.getUserID();
        if (!userID) {
            return 'Failed to generate user ID. Please try again later.';
        }
        const abortSignal = abortController ? abortController.signal : undefined;
        var systemPrompt = args.systemPrompt || 'You are a helpful assistant.';
        const requestBody = {
            visitorId: userID,
            messages: {
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: aiPrompt }
                ]
            }
        };
        if (fileContents && fileContents.length > 0) {
            requestBody.fileContents = fileContents;
        }
        const response = await fetch(window.AI_SERVICE_URL + '/api/chat', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody),
            signal: abortSignal
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || ("HTTP Error " + response.status));
        }
        const result = await response.json();
        if (args.systemPrompt) {
            return result;
        }
        if (result && result.response) {
            const aiResponse = result.response.replace('END_INSERTION', '');
            return aiResponse;
        }
    } catch (error) {
        if (error.name === "AbortError") {
            return null;
        } else if (error.message && error.message.indexOf("token limit") !== -1) {
            const bannerElement = document.querySelector(".banner-message");
            if (bannerElement) { bannerElement.innerHTML = error.message; }
            const headerElement = document.querySelector(".sb-header1");
            if (headerElement) { headerElement.classList.remove("sb-hide"); }
            return error.message;
        }
        else if (error.message.includes('Failed to fetch')) {
            console.warn("To test these samples locally, configure and use your own API key.");
        }
        return 'We could not reach the AI service; please try again later.';
    }
};

window.AI_SERVICE_URL = 'https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net';