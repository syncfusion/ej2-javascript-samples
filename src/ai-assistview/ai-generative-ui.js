this.default = function() {
    var aiAssistViewInst = new ej.interactivechat.AIAssistView({
        bannerTemplate: '#bannerContent',
        promptSuggestionsHeader: "Suggested Prompts",
        promptSuggestions: window.generativeSuggestions,
        enableStreaming: true,
        showClearButton: true,
        prompts: window.promptsData,
        toolbarSettings: {
            items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
            itemClicked: toolbarItemClicked
        },
        promptRequest: onPromptRequest
    });

    function weatherTemplate(args) {
        var defaults = {
            location: 'Unknown Location',
            temperature: '--',
            condition: '--',
            humidity: '--',
            windSpeed: '--'
        };
        var data = Object.assign({}, defaults, args);
        
        return `<div tabindex="0" class="e-card" id="weather_card" role="button">
            <div class="e-card-header">
                <div class="e-card-header-caption">
                    <div class="e-card-header-title">${data.location}</div>
                    <div class="e-card-sub-title">${data.condition}</div>
                </div>
            </div>
            <div class="e-card-header weather_report">
                <div class="e-card-header-image"></div>
                <div class="e-card-header-caption">
                    <div class="e-card-header-title">${data.temperature}</div>
                    <div class="e-card-sub-title">Humidity: ${data.humidity}</div>
                    <div class="e-card-sub-title">Wind: ${data.windSpeed}</div>
                </div>
            </div>
        </div>`;
    }

    // Registering generative tool UI
    aiAssistViewInst.registerToolUI({
        toolName: 'weather-card',
        template: weatherTemplate
    });

    // Registering chart component
    aiAssistViewInst.registerToolUI({
        toolName: 'chart-tool',
        template: '<div class="chartContainer"></div>',
        handler: function(container, args) {
            var chartConfig = {
                dataSource: args.dataSource || args.data || [],
                xField: args.xField || args.xName,
                yField: args.yField || args.yName,
                chartType: args.chartType || args.type || 'Line'
            };
            if (chartConfig.chartType === 'Pie' || chartConfig.chartType === 'Doughnut') {
                chartConfig.chartType = 'Line';
            }
            new ej.charts.Chart({
                title: args.title || '',
                primaryXAxis: { valueType: 'Category', title: args.xAxisTitle || chartConfig.xField, labelIntersectAction: 'Rotate45' },
                primaryYAxis: { title: args.yAxisTitle || chartConfig.yField },
                tooltip: { enable: args.enableTooltip !== false },
                legendSettings: { visible: args.enableLegend !== false },
                series: [{
                    type: chartConfig.chartType,
                    dataSource: chartConfig.dataSource,
                    xName: chartConfig.xField,
                    yName: chartConfig.yField,
                    marker: { visible: true }
                }]
            }).appendTo(container.querySelector('.chartContainer'));
        }
    });
    // Registering grid component
    aiAssistViewInst.registerToolUI({
        toolName: 'grid-tool',
        template: '<div class="gridContainer"></div>',
        handler: function (container, args) {
            var data = args.data || [];
            var columns = args.columns || (data.length ? Object.keys(data[0]).map(function (field) {
                return {
                    field: field,
                    headerText: field,
                    width: 150
                };
            }) : []);
            
            new ej.grids.Grid({
                dataSource: data,
                columns: columns,
                allowPaging: false,
                pageSettings: { pageSize: 8 },
                width: 'fit-content'
            }).appendTo(container.querySelector('.gridContainer'));
        }
    });

    aiAssistViewInst.appendTo('#aiAssistView');

    async function onPromptRequest(args) {
        try {
            var aiArgs = {
                prompt: args.prompt,
                systemPrompt: window.toolSystemPrompt
            };
            var reply = await window.getAIResponse(aiArgs);
            var jsonText = reply.response || '{}';
            var aiData = JSON.parse(jsonText);
            
            aiAssistViewInst.addPromptResponse({ blocks: aiData.blocks || [{ blockType: 'text', content: "We could not reach the AI service; please try again later." }] });
        } catch (error) {
            aiAssistViewInst.addPromptResponse("We could not reach the AI service; please try again later.");
        }
    }

    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            aiAssistViewInst.prompts = [];
            aiAssistViewInst.promptSuggestions = window.generativeSuggestions;
        }
    }
};