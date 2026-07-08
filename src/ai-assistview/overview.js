this.default = function() {
    var defaultPrompts = [
        {
            prompt: 'How does the weather vary throughout the week in Germany and Japan?',
            blocks: [
            {
                blockType: 'thinking',
                title: 'Thinking',
                collapsible: true,
                collapsed: true,
                isActive: false,
                stages: [
                    {
                            iconCss: 'e-icons e-search',
                            status: 'completed',
                            content: 'Searching for weather data from external sources and retrieving weekly forecasts for both Germany and Japan.',
                            editableContext: [
                                { name: 'Query Type', value: 'Weather Analysis', type: 'Variable' }
                            ]
                        },
                        {
                            iconCss: 'e-icons e-bullet-2',
                            status: 'completed',
                            content: 'Processing retrieved datasets and normalizing temperature values for accurate comparison.',
                            editableContext: [
                                { name: 'Complexity Level', value: 'Moderate', badge: 'Success', type: 'Context' }
                            ]
                        },
                        {
                            iconCss: 'e-icons e-bullet-2',
                            status: 'completed',
                            content: 'Analyzing weekly temperature trends to identify variations and patterns across both regions.',
                            editableContext: [
                                { name: 'Complexity Level', value: 'Multi-faceted', badge: 'Success', type: 'Context' }
                            ]
                        },
                        {
                            iconCss: 'e-icons e-check',
                            status: 'completed',
                            content: 'Summarizing key observations from the weekly data to provide a clear overview of temperature changes and generating insights.',
                            editableContext: [
                                { name: 'Complexity Level', value: 'Moderate', badge: 'Success', type: 'Context' }
                            ]
                        }
                ]
            },
            {
                blockType: 'text',
                content: '**Weekly Weather Overview**<p>The chart below shows temperature variations across the week. The column series represents daily temperature highs, while the spline series reflects a smoother trend of average temperatures.</p>'
            },
            {
                blockType: 'tool',
                toolName: 'weather-chart',
                props: {
                    columnData: [
                        { x: 'Sun', y: 35 }, { x: 'Mon', y: 40 },
                        { x: 'Tue', y: 80 }, { x: 'Wed', y: 70 }, { x: 'Thu', y: 65 }, { x: 'Fri', y: 55 },
                        { x: 'Sat', y: 50 }
                    ],
                    splineData:  [
                        { x: 'Sun', y: 30 }, { x: 'Mon', y: 28 },
                        { x: 'Tue', y: 29 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 33 }, { x: 'Fri', y: 32 },
                        { x: 'Sat', y: 34 }
                    ]
                }
            },
            {
                blockType: 'text',
                content: '**Key Insights:** The bar values indicate a sharp temperature spike on Tuesday and Wednesday, suggesting very hot conditions mid-week. Meanwhile, the spline line shows a relatively stable average temperature trend throughout the week. This difference highlights short-term heat surges compared to overall steady climatic conditions.'
            }]
        }
    ];
    var abortController;
    var aiAssistView = new ej.interactivechat.AIAssistView({
        enableStreaming: true,
        prompts: defaultPrompts,
        promptSuggestions: window.overviewSuggesstions,
        toolbarSettings: {
            items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Start new chat' }],
            itemClicked: toolbarItemClicked
        },
        footerToolbarSettings: {
            toolbarPosition: 'Bottom',
            items: [
                { iconCss: 'e-icons e-assist-send', align: 'Right' },
                { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left', tooltip: 'Attach File' },
                { iconCss: 'e-icons e-assist-speech-to-text', align: 'Left' }
            ]
        },
        responseToolbarSettings: {
            items: [
                { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
                { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
                { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
                { type: 'Button', iconCss: 'e-icons e-assist-audio', tooltip: 'Read Aloud' },
                { type: 'Button', iconCss: 'e-icons e-assist-regenerate', tooltip: 'Regenerate' }
            ]
        },
        enableAttachments: true,
        attachmentSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        },
        speechToTextSettings: { enable: true },
        bannerTemplate: '#bannerContent',
        promptRequest: onPromptRequest,
    });

    // Registering chart component
    aiAssistView.registerToolUI({
        toolName: 'weather-chart',
        template: '<div class="chart-container"></div>',
        handler: function (container, args) {
            var chart = new ej.charts.Chart({
                primaryXAxis: {
                    valueType: 'Category',
                    majorGridLines: { width: 0 },
                    minorGridLines: { width: 0 },
                    majorTickLines: { width: 0 }
                },
                primaryYAxis: {
                    minimum: 0, maximum: 100, interval: 20,
                    lineStyle: { width: 0 },
                    labelFormat: '{value}°F',  majorTickLines: { width: 0 }  
                },
                chartArea: {
                    border: {
                        width: 0
                    }
                },
                axes: [
                    {
                        majorGridLines: { width: 0 },
                        rowIndex: 0, opposedPosition: true,
                        lineStyle: { width: 0 },
                        minimum: 24, maximum: 36, interval: 2,
                        name: 'yAxis',
                        labelFormat: '{value}°C',
                        majorTickLines: { width: 0 }
                    }
                ],
                series: [
                    {
                        type: 'Column',
                        dataSource: args.columnData,
                        width: 2,
                        xName: 'x', yName: 'y',
                        name: 'Germany', marker: { visible: true, height: 7, width: 7}
                    },
                    {
                        type: 'Spline',
                        dataSource: args.splineData,
                        xName: 'x', yName: 'y',
                        width: 2, yAxisName: 'yAxis',
                        name: 'Japan',
                        marker: { visible: true, width: 7, height: 7, isFilled: true }
                    }
                ],
                legendSettings: {
                    visible: false
                },
                tooltip: { enable: true, enableHighlight: true },
                width: ej.base.Browser.isDevice ? '100%' : '75%',
                title: 'Weather Data',

            });
            var chartElement = container.querySelector('.chart-container');
            chart.appendTo(chartElement);
        }
    });

    aiAssistView.appendTo('#aiAssistView');

    function getRandomResponse(regeneratedResponses) {
        if (Array.isArray(regeneratedResponses)) {
            return regeneratedResponses[Math.floor(Math.random() * regeneratedResponses.length)];
        }
        return regeneratedResponses;
    }

    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            aiAssistView.prompts = [];
        }
    }

    async function onPromptRequest(args) {
        abortController = new AbortController();
        var foundPrompt = (window.defaultPromptResponseData || []).find(p => p.prompt === args.prompt);
        var responseHtml = foundPrompt ? (foundPrompt.regeneratedResponses ? getRandomResponse(foundPrompt.regeneratedResponses) : foundPrompt.response) : await window.getAIResponse(args, abortController);
        aiAssistView.addPromptResponse(responseHtml);
        aiAssistView.promptSuggestions = foundPrompt?.suggestions || window.overviewSuggesstions || [];
    }
}
