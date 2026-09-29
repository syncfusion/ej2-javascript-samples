/**
 * Data Preprocessing Sample
 *
*/

this.default = function () {

    // Original data
    var originalList = [
        { time: new Date(2024, 6, 1, 0, 0, 0), visitors: 150 },
        { time: new Date(2024, 6, 1, 1, 0, 0), visitors: 160 },
        { time: new Date(2024, 6, 1, 2, 0, 0), visitors: 155 },
        { time: new Date(2024, 6, 1, 3, 0, 0), visitors: null },
        { time: new Date(2024, 6, 1, 4, 0, 0), visitors: 170 },
        { time: new Date(2024, 6, 1, 5, 0, 0), visitors: 175 },
        { time: new Date(2024, 6, 1, 6, 0, 0), visitors: 145 },
        { time: new Date(2024, 6, 1, 7, 0, 0), visitors: 180 },
        { time: new Date(2024, 6, 1, 8, 0, 0), visitors: null },
        { time: new Date(2024, 6, 1, 9, 0, 0), visitors: 185 },
        { time: new Date(2024, 6, 1, 10, 0, 0), visitors: 200 },
        { time: new Date(2024, 6, 1, 11, 0, 0), visitors: null },
        { time: new Date(2024, 6, 1, 12, 0, 0), visitors: 220 },
        { time: new Date(2024, 6, 1, 13, 0, 0), visitors: 230 },
        { time: new Date(2024, 6, 1, 14, 0, 0), visitors: null },
        { time: new Date(2024, 6, 1, 15, 0, 0), visitors: 250 },
        { time: new Date(2024, 6, 1, 16, 0, 0), visitors: 260 },
        { time: new Date(2024, 6, 1, 17, 0, 0), visitors: 270 },
        { time: new Date(2024, 6, 1, 18, 0, 0), visitors: null },
        { time: new Date(2024, 6, 1, 19, 0, 0), visitors: 280 },
        { time: new Date(2024, 6, 1, 20, 0, 0), visitors: 250 },
        { time: new Date(2024, 6, 1, 21, 0, 0), visitors: 290 },
        { time: new Date(2024, 6, 1, 22, 0, 0), visitors: 300 },
        { time: new Date(2024, 6, 1, 23, 0, 0), visitors: null }
    ];

    function buildColored(list) {
        return list.map(function (item) {
            return {
                time: item.time,
                visitors: item.visitors,
                color: item.visitors == null ? '#D84227' : '#0066CC'
            };
        });
    }

    var chartData = buildColored(originalList);

    // Create Chart
    var chart = new ej.charts.Chart({
        title: 'E-Commerce Website Traffic Data',
        subTitle:
            'AI-powered data cleaning and preprocessing for tracking hourly website visitors',
        chartArea: {
            border: {
                width: 0
            }
        },
        primaryXAxis: {
            valueType: 'DateTime',
            minimum: new Date(2024, 6, 1, 0, 0, 0),
            maximum: new Date(2024, 6, 1, 23, 0, 0),
            labelFormat: 'h a',
            edgeLabelPlacement: 'Shift',
            majorGridLines: {
                width: 0
            }
        },
        primaryYAxis: {
            minimum: 140,
            maximum: 320,
            interval: 30
        },
        legendSettings: {
            visible: true,
            position: 'Top'
        },
        tooltip: {
            enable: true
        },
        height: '520',
        series: [{
            dataSource: chartData,
            xName: 'time',
            yName: 'visitors',
            name: 'Visitors',
            type: 'MultiColoredLine',
            pointColorMapping: 'color'
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

    chart.appendTo('#chart-container');

    // Button
    var button = new ej.buttons.Button({
        isPrimary: true,
        iconCss: 'e-icons e-ai-chat'
    });

    button.appendTo('#chart-action-button');

    function generatePrompt(data) {

        function formatDate(d) {
            return d.getFullYear() + '-' +
                String(d.getMonth() + 1).padStart(2, '0') + '-' +
                String(d.getDate()).padStart(2, '0') + '-' +
                String(d.getHours()).padStart(2, '0') + '-' +
                String(d.getMinutes()).padStart(2, '0') + '-' +
                String(d.getSeconds()).padStart(2, '0');
        }

        var text =
            'Clean the following e-commerce website traffic data, resolve outliers and fill missing values:\n';

        text += data.map(function (item) {
            return formatDate(item.time) +
                ': ' +
                (item.visitors == null ? 'null' : item.visitors);
        }).join('\n');

        text +=
            '\nand the output cleaned data should be in the yyyy-MM-dd-HH-m-ss:Value format, no other explanation required';

        return text;
    }

    function getChartStateSnapshot() {

        // IMPORTANT: only return plain, serializable values. Reading
        // `chart.primaryXAxis` etc. directly returns the live Syncfusion
        // objects, which hold a back-reference (`parentObj`) to the chart
        // and therefore cannot be JSON.stringify'd (circular reference).
        return {
            primaryXAxis: {
                valueType: 'DateTime',
                minimum: new Date(2024, 6, 1, 0, 0, 0),
                maximum: new Date(2024, 6, 1, 23, 0, 0),
                labelFormat: 'h a',
                edgeLabelPlacement: 'Shift',
                majorGridLines: { width: 0 }
            },
            primaryYAxis: {
                minimum: 140,
                maximum: 320,
                interval: 30
            },
            legendSettings: { visible: true, position: 'Top' },
            chartArea: { border: { width: 0 } },
            title: 'E-Commerce Website Traffic Data',
            subTitle:
                'AI-powered data cleaning and preprocessing for tracking hourly website visitors',
            series: [{
                type: 'MultiColoredLine',
                xName: 'time',
                yName: 'visitors',
                name: 'Visitors',
                pointColorMapping: 'color'
            }]
        };
    }

    // ---------------------------------------------
    // AI helper (local to this sample)
    //
    // Builds on top of the shared window.serverAIRequest
    // service; the chart-specific AI helpers are kept
    // inside the ai-chart samples.
    // ---------------------------------------------

    var DATA_PREPROCESSING_SYSTEM_PROMPT = [
        'You help clean hourly website visitors data for a Syncfusion Chart.',
        'Return ONLY cleaned lines in "yyyy-MM-dd-HH-m-ss:Value" format (no extra text).',
        'We will set series[0].dataSource from your lines.',
        'Do not modify chart configuration.'
    ].join('\n');

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
            // Points that were originally null (or that neighbour a null
            // slot) are imputed by the AI; keep them highlighted so they
            // stay visually distinguishable from the observed values.
            var color = !current || current.visitors == null ||
                !next || next.visitors == null ? '#D84227' : '#0066CC';

            out.push({ time: date, visitors: val, color: color });
            index++;
        });

        // Signal that nothing usable came back from the AI instead of
        // letting an empty array be treated as valid (truthy) data.
        return out.length ? out : null;
    }

    async function fetchAiDataPreprocessingResponse(prompt, raw) {
        try {
            if (typeof window.serverAIRequest !== 'function') {
                throw new Error(
                    'serverAIRequest is not available. Make sure common/ai-service.js ' +
                    'is loaded before this sample runs.'
                );
            }

            var systemPrompt = [
                DATA_PREPROCESSING_SYSTEM_PROMPT,
                '',
                'Current chart state: ' + JSON.stringify(getChartStateSnapshot())
            ].join('\n');

            var response = await window.serverAIRequest({
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: prompt }
                ]
            });

            if (!response) {
                return { props: {} };
            }

            var cleanedText = response.indexOf('```') >= 0
                ? response.split('```')[1].trim()
                : response.trim();
            var parsed = parseCleanedLines(cleanedText, raw || []);

            // Do not publish an unusable AI result; the caller keeps the
            // currently rendered data when no dataSource is returned.
            if (!parsed || !parsed.length) {
                return { props: {} };
            }

            return {
                props: { series: [{ dataSource: parsed }] }
            };

        } catch (e) {
            console.error('fetchAI error:', e);
            // Never replace the working series with the raw list: it has
            // no `color` values and reintroduces the nulls the AI should
            // have cleaned. Keep the chart as-is on failure.
            return { props: {} };
        }
    }

    function showSpinnerById(id) {

        var element = document.getElementById(id);

        if (element) {
            element.classList.add('visible');
        }
    }

    function hideSpinnerById(id) {

        var element = document.getElementById(id);

        if (element) {
            element.classList.remove('visible');
        }
    }

    document.getElementById('chart-action-button').addEventListener('click', processChartData);

    async function processChartData() {

        showSpinnerById('chartSpinner');

        try {

            var prompt = generatePrompt(originalList);
            
            // Chart-specific AI helper local to this sample
            var aiData = await fetchAiDataPreprocessingResponse(
                prompt,
                originalList
            );

            if (
                aiData &&
                aiData.props &&
                aiData.props.series &&
                aiData.props.series.length &&
                aiData.props.series[0].dataSource &&
                aiData.props.series[0].dataSource.length
            ) {

                chart.series[0].dataSource =
                    aiData.props.series[0].dataSource;

                // dataSource assigned this way is not observed by the
                // chart; an explicit refresh is required to re-render.
                chart.refresh();
            }

            else {
                console.warn(
                    'AI clean: no usable data returned; keeping the current chart data.'
                );
            }

        } catch (e) {
            console.error('processChartData error:', e);
        } finally {

            hideSpinnerById('chartSpinner');
        }
    }
}
