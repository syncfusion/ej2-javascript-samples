/**
 * Sample for Column Series
 */
var clicked = false;
var labelRender = function (args) {
    if (!clicked) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'material';
         var pointMaterialColors = ["#00bdae", "#404041", "#357cd2", "#e56590", "#f8b883", "#70ad47", "#dd8abd", "#7f84e8", "#7bb4eb",
            "#ea7a57", "#404041", "#00bdae"];
         var pointFabricColors = ["#4472c4", "#ed7d31", "#ffc000", "#70ad47", "#5b9bd5", "#c1c1c1", "#6f6fe2", "#e269ae", "#9e480e",
            "#997300", "#4472c4", "#70ad47", "#ffc000", "#ed7d31"];
         var pointBootstrapColors = ["#a16ee5", "#f7ce69", "#55a5c2", "#7ddf1e", "#ff6ea6", "#7953ac", "#b99b4f", "#407c92", "#5ea716",
            "#b91c52"];
         var pointHighContrastColors = ["#79ECE4", "#E98272", "#DFE6B6", "#C6E773", "#BA98FF", "#FA83C3", "#00C27A", "#43ACEF", "#D681EF",
            "#D8BC6E"];
         var pointFluentColors = ["#1AC9E6", "#DA4CB2", "#EDBB40", "#AF4BCF", "#FF7266", "#1BD565", "#EE993D", "#5887FF", "#EC548D",
            "#7D39C0"];
         var pointMaterialDarkColors = ["#9ECB08", "#56AEFF", "#C57AFF", "#61EAA9", "#EBBB3E", "#F45C5C", "#8A77FF", "#63C7FF", "#FF84B0",
            "#F7C928"];
         var pointFluentDarkColors = ["#1AC9E6", "#DA4CB2", "#EDBB40", "#AF4BCF", "#FF7266", "#1BD565", "#EE993D", "#5887FF", "#EC548D",
            "#7D39C0"];
         var pointTailwindColors = ["#5A61F6", "#65A30D", "#334155", "#14B8A6", "#8B5CF6", "#0369A1", "#F97316", "#9333EA", "#F59E0B", "#15803D"];
         var pointTailwindDarkColors = ["#8B5CF6", "#22D3EE", "#F87171", "#4ADE80", "#E879F9", "#FCD34D", "#F97316", "#2DD4BF", "#F472B6",
            "#10B981"];
         var pointTailwind3Colors = ['#2F4074', '#03B4B4', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#2F4074', '#03B4B4'];
         var pointTailwind3DarkColors = ['#8029F1', '#1ABC9C', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822', '#8029F1', '#1ABC9C'];
         var pointBootstrap5Colors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384', '#DC3545', '#FFC107', '#198754', '#0DCAF0', '#FD7E14', '#6610F2',];
         var pointBootstrap5DarkColors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384', '#DC3545', '#FFC107', '#198754', '#0DCAF0', '#FD7E14', '#6610F2',];
         var pointMaterial3Colors = ["#6355C7", "#00AEE0", "#FFB400", "#F7523F", "#963C70", "#FD7400", "#4BE0BC", "#2196F5", "#DE3D8A", "#162F88"];
         var pointMaterial3DarkColors = ["#4EAAFF", "#FA4EAB", "#FFF500", "#17EA58", "#38FFE7", "#FF9E45", "#B3F32F", "#B93CE4", "#FC5664", "#9B55FF"];
         var pointFluent2Colors = ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#0364DE", "#66CD15", "#F3A93C", "#107C10",
            "#C19C00"];
         var pointFluent2HighContrastColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266",
            "#0B6A0B", "#C19C00"];
         var pointFluent2DarkColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266",
            "#0B6A0B", "#C19C00"];
        if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
            args.fill = pointFabricColors[args.point.index % 10];
        } else if (selectedTheme === 'material-dark') {
            args.fill = pointMaterialDarkColors[args.point.index % 10];
        } else if (selectedTheme === 'material') {
            args.fill = pointMaterialColors[args.point.index % 10];
        } else if (selectedTheme === 'bootstrap5-dark') {
            args.fill = pointBootstrap5DarkColors[args.point.index % 10];
        } else if (selectedTheme === 'bootstrap5') {
            args.fill = pointBootstrap5Colors[args.point.index % 10];
        } else if (selectedTheme === 'bootstrap') {
            args.fill = pointBootstrapColors[args.point.index % 10];
        }
        else if (selectedTheme === 'bootstrap4') {
            args.fill = pointBootstrapColors[args.point.index % 10];
        }
        else if (selectedTheme === 'bootstrap-dark') {
            args.fill = pointBootstrapColors[args.point.index % 10];
        } else if (selectedTheme === 'highcontrast') {
            args.fill = pointHighContrastColors[args.point.index % 10];
        } else if (selectedTheme === 'fluent-dark') {
            args.fill = pointFluentDarkColors[args.point.index % 10];
        } else if (selectedTheme === 'fluent') {
            args.fill = pointFluentColors[args.point.index % 10];
        } else if (selectedTheme === 'tailwind-dark') {
            args.fill = pointTailwindDarkColors[args.point.index % 10];
        } else if (selectedTheme === 'tailwind') {
            args.fill = pointTailwindColors[args.point.index % 10];
        }
        else if (selectedTheme === 'material3') {
            args.fill = pointMaterial3Colors[args.point.index % 10];
        }
        else if (selectedTheme === 'material3-dark') {
            args.fill = pointMaterial3DarkColors[args.point.index % 10];
        }
        else if (selectedTheme === 'fluent2') {
            args.fill = pointFluent2Colors[args.point.index % 10];
        }
        else if (selectedTheme === 'fluent2-highcontrast') {
            args.fill = pointFluent2HighContrastColors[args.point.index % 10];
        }
        else if (selectedTheme === 'fluent2-dark') {
            args.fill = pointFluent2DarkColors[args.point.index % 10];
        } else if (selectedTheme === 'tailwind3-dark') {
            args.fill = pointTailwind3DarkColors[args.point.index % 10];
        } else if (selectedTheme === 'tailwind3') {
            args.fill = pointTailwind3Colors[args.point.index % 10];
        }
    }
};
this.default = function () {
    var data = [{
        y: 4778,
        drilldown: 'Asia'
    },
    {

        y: 1481,
        drilldown: 'Africa'
    },
    {

        y: 746,
        drilldown: 'Europe'
    },
    {

        y: 379,
        drilldown: 'North America'
    },
    {

        y: 46,
        drilldown: 'Oceania'
    }];

    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', labelStyle: {
                color: 'blue'
            }, interval: 1, majorGridLines: { width: 0 }, labelIntersectAction: ej.base.Browser.isDevice ? 'None' : 'Rotate90', labelRotation: ej.base.Browser.isDevice ? -45 : 0, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }
        },
        chartArea: { border: { width: 0 } },
        primaryYAxis:
        {
            title: 'Population (in Millions)', majorTickLines: { width: 0 }, lineStyle: { width: 0 }, interval: 1000
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'drilldown', width: 2, yName: 'y', name: 'Population',
                dataSource: data, cornerRadius: { topLeft: 5, topRight: 5 }, 
                marker:{
                    dataLabel: {
                       visible: true,
                       position: 'Outer',
                   }
               }
            }
        ],
        //Initializing Chart title
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        title: 'Top Populated Continents of 2023', tooltip: {
            enable: true, header: "<b>Population - 2023</b>",
            format: '${point.x}: ${point.y}M'
        },
        subTitle: 'A Look at Population Rankings and Trends in 2023',
        pointRender: labelRender,
        legendSettings: { visible: false },
        // custom code start
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            if (selectedTheme === 'highcontrast') {
                args.chart.series[0].marker.dataLabel.font.color = '#000000';
                args.chart.series[1].marker.dataLabel.font.color = '#000000';
                args.chart.series[2].marker.dataLabel.font.color = '#000000';
            }
        },
        loaded: function (args) {
            if (clicked) {
                for (var i = 0; i <= 6; i++) {
                    var axisLabel = document.getElementById('column-container0_AxisLabel_' + i);
                    if (axisLabel) {
                        axisLabel.classList.add('no-underline');
                    }
                    var seriesElement = document.getElementById('column-container_Series_0_Point_' + i);
                    if (seriesElement) {
                        seriesElement.classList.add('no-underline');
                    }
                }
            }
        },
        pointClick: function (args) {
            args.series.fill = args.point.color;
            if (args.point.index !== 6) {
                args.series.yAxis.interval = null;
                if (!args.series.chart.theme.includes('Dark') && args.series.chart.theme !== 'HighContrast' && args.series.chart.theme !== 'Fluent2HighContrast') {
                    args.series.chart.primaryXAxis.labelStyle.color = "black";
                }
                else if (args.series.chart.theme === 'Material3Dark') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#CAC4D0";
                }
                else if (args.series.chart.theme === 'FluentDark') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#C8C6C4";
                }
                else if (args.series.chart.theme === 'Fluent2Dark') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#ADADAD";
                }
                else if (args.series.chart.theme === 'Bootstrap5Dark') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#DEE2E6";
                }
                else if (args.series.chart.theme === 'TailwindDark') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#9CA3AF";
                }
                else if (args.series.chart.theme === 'Tailwind3Dark') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#D1D5DB";
                }
                else if (args.series.chart.theme === 'HighContrast') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#969696";
                }
                else if (args.series.chart.theme === 'Fluent2HighContrast') {
                    args.series.chart.primaryXAxis.labelStyle.color = "#FFFFFF";
                }
                if (!clicked) {
                    document.getElementById("text").innerHTML = args.point.x;
                    document.getElementById("category").style.visibility = "visible";
                    document.getElementById("symbol").style.visibility = "visible";
                    document.getElementById("text").style.visibility = "visible";
                    if (args.point.index === 0) {
                        args.series.chart.title = "Top Populated Countries of Asia - 2023";
                        args.series.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                        clicked = true;
                        args.series.chart.series[0].dataSource = [{
                                y: 1422,
                                drilldown: 'China'
                            },
                            {
                                y: 1438,
                                drilldown: 'India'
                            },
                            {
                                y: 278,
                                drilldown: 'Indonesia'
                            },
                            {
                                y: 240,
                                drilldown: 'Pakistan'
                            },
                            {
                                y: 173,
                                drilldown: 'Bangladesh'
                            },
                            {
                                y: 125,
                                drilldown: 'Japan'
                            },
                            {
                                y: 117,
                                drilldown: 'Philippines'
                            },
                            {
                                y: 99,
                                drilldown: 'Vietnam'
                            }
                        ];
                    }
                    if (args.point.index === 1) {
                        args.series.chart.title = "Top Populated Countries of Africa - 2023";
                        args.series.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                        clicked = true;
                        args.series.chart.series[0].dataSource = [{
                                y: 223,
                                drilldown: 'Nigeria'
                            },
                            {
                                y: 126,
                                drilldown: 'Ethiopia'
                            },
                            {
                                y: 113,
                                drilldown: 'Egypt'
                            },
                            {
                                y: 68,
                                drilldown: 'Tanzania'
                            },
                            {
                                y: 60,
                                drilldown: 'South Africa'
                            },
                            {
                                y: 55,
                                drilldown: 'Kenya'
                            },
                            {
                                y: 48,
                                drilldown: 'Uganda'
                            }
                        ];
                    }
                    if (args.point.index === 2) {
                        args.series.chart.title = "Top Populated Countries of Europe - 2023";
                        args.series.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                        clicked = true;
                        args.series.chart.series[0].dataSource = [{
                                y: 143,
                                drilldown: 'Russia'
                            },
                            {
                                y: 84,
                                drilldown: 'Germany'
                            },
                            {
                                y: 67,
                                drilldown: 'United Kingdom'
                            },
                            {
                                y: 65,
                                drilldown: 'France'
                            },
                            {
                                y: 59,
                                drilldown: 'Italy'
                            },
                            {
                                y: 47,
                                drilldown: 'Spain'
                            }
                        ];
                    }
                    if (args.point.index === 3) {
                        args.series.chart.title = "Top Populated Countries of North America - 2023";
                        args.series.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                        clicked = true;
                        args.series.chart.series[0].dataSource = [{
                                y: 339,
                                drilldown: 'United States'
                            },
                            {
                                y: 127,
                                drilldown: 'Mexico'
                            },
                            {
                                y: 39,
                                drilldown: 'Canada'
                            },
                            {
                                y: 19,
                                drilldown: 'Guatemala'
                            },
                            {
                                y: 10,
                                drilldown: 'Honduras'
                            },
                            {
                                y: 6,
                                drilldown: 'El Salvador'
                            },
                            {
                                y: 6,
                                drilldown: 'Nicaragua'
                            },
                            {
                                y: 5,
                                drilldown: 'Costa Rica'
                            }
                        ];
                    }
                    if (args.point.index === 4) {
                        args.series.chart.title = "Top Populated Countries of Oceania - 2023";
                        args.series.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                        clicked = true;
                        args.series.chart.series[0].dataSource = [
                            {
                                y: 26,
                                drilldown: 'Australia'
                            },
                            {
                                y: 9,
                                drilldown: 'Papua New Guinea'
                            },
                            {
                                y: 5,
                                drilldown: 'New Zealand'
                            }
                        ];
                    }
                }
            }

        },
        chartMouseClick: function (args) {
            if (args.target.indexOf('category') > -1) {
                chart.series[0].dataSource = data;
            }
        },
        tooltipRender: function (args) {
            args.text = args.text.replace(/\d+/g, function (num) {
                return Number(num).toLocaleString('en-US');
            });
        },
        axisLabelClick: function (args) {
            if (args.axis.name === "primaryXAxis") {
                args.chart.series[0].fill = (args.chart.series[0]).points[args.index].color;

                if (args.index !== 6) {
                    args.chart.primaryYAxis.interval = null;
                    if (!args.chart.theme.includes('Dark') && args.chart.theme !== 'HighContrast' && args.chart.theme !== 'Fluent2HighContrast') {
                        args.chart.primaryXAxis.labelStyle.color = "black";
                    }
                    else if (args.chart.theme === 'Material3Dark') {
                        args.chart.primaryXAxis.labelStyle.color = "#CAC4D0";
                    }
                    else if (args.chart.theme === 'FluentDark') {
                        args.chart.primaryXAxis.labelStyle.color = "#C8C6C4";
                    }
                    else if (args.chart.theme === 'Fluent2Dark') {
                        args.chart.primaryXAxis.labelStyle.color = "#ADADAD";
                    }
                    else if (args.chart.theme === 'Bootstrap5Dark') {
                        args.chart.primaryXAxis.labelStyle.color = "#DEE2E6";
                    }
                    else if (args.chart.theme === 'TailwindDark') {
                        args.chart.primaryXAxis.labelStyle.color = "#9CA3AF";
                    }
                    else if (args.chart.theme === 'Tailwind3Dark') {
                        args.chart.primaryXAxis.labelStyle.color = "#D1D5DB";
                    }
                    else if (args.chart.theme === 'HighContrast') {
                        args.chart.primaryXAxis.labelStyle.color = "#969696";
                    }
                    else if (args.chart.theme === 'Fluent2HighContrast') {
                        args.chart.primaryXAxis.labelStyle.color = "#FFFFFF";
                    }
                    if (!clicked) {
                        document.getElementById("text").innerHTML = args.text;
                        document.getElementById("category").style.visibility = "visible";
                        document.getElementById("symbol").style.visibility = "visible";
                        document.getElementById("text").style.visibility = "visible";

                        if (args.index === 0) {
                            args.chart.title = "Top Populated Countries of Asia - 2023";
                            args.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                            clicked = true;
                            args.chart.series[0].dataSource = [{
                                y: 1422,
                                drilldown: 'China'
                            },
                            {
                                y: 1438,
                                drilldown: 'India'
                            },
                            {
                                y: 278,
                                drilldown: 'Indonesia'
                            },
                            {
                                y: 240,
                                drilldown: 'Pakistan'
                            },
                            {
                                y: 173,
                                drilldown: 'Bangladesh'
                            },
                            {
                                y: 125,
                                drilldown: 'Japan'
                            },
                            {
                                y: 117,
                                drilldown: 'Philippines'
                            },
                            {
                                y: 99,
                                drilldown: 'Vietnam'
                            }
                            ];
                        }
                        if (args.index === 1) {
                            args.chart.title = "Top Populated Countries of Africa - 2023";
                            args.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                            clicked = true;
                            args.chart.series[0].dataSource = [{
                                y: 223,
                                drilldown: 'Nigeria'
                            },
                            {
                                y: 126,
                                drilldown: 'Ethiopia'
                            },
                            {
                                y: 113,
                                drilldown: 'Egypt'
                            },
                            {
                                y: 68,
                                drilldown: 'Tanzania'
                            },
                            {
                                y: 60,
                                drilldown: 'South Africa'
                            },
                            {
                                y: 55,
                                drilldown: 'Kenya'
                            },
                            {
                                y: 48,
                                drilldown: 'Uganda'
                            }
                            ];
                        }
                        if (args.index === 2) {
                            args.chart.title = "Top Populated Countries of Europe - 2023";
                            args.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                            clicked = true;
                            args.chart.series[0].dataSource = [{
                                y: 143,
                                drilldown: 'Russia'
                            },
                            {
                                y: 84,
                                drilldown: 'Germany'
                            },
                            {
                                y: 67,
                                drilldown: 'United Kingdom'
                            },
                            {
                                y: 65,
                                drilldown: 'France'
                            },
                            {
                                y: 59,
                                drilldown: 'Italy'
                            },
                            {
                                y: 47,
                                drilldown: 'Spain'
                            }
                            ];
                        }
                        if (args.index === 3) {
                            args.chart.title = "Top Populated Countries of North America - 2023";
                            args.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                            clicked = true;
                            args.chart.series[0].dataSource = [{
                                y: 339,
                                drilldown: 'United States'
                            },
                            {
                                y: 127,
                                drilldown: 'Mexico'
                            },
                            {
                                y: 39,
                                drilldown: 'Canada'
                            },
                            {
                                y: 19,
                                drilldown: 'Guatemala'
                            },
                            {
                                y: 10,
                                drilldown: 'Honduras'
                            },
                            {
                                y: 6,
                                drilldown: 'El Salvador'
                            },
                            {
                                y: 6,
                                drilldown: 'Nicaragua'
                            },
                            {
                                y: 5,
                                drilldown: 'Costa Rica'
                            }
                            ];
                        }
                        if (args.index === 4) {
                            args.chart.title = "Top Populated Countries of Oceania - 2023";
                            args.chart.subTitle = "A Look at Population Rankings and Trends in 2023";
                            clicked = true;
                            args.chart.series[0].dataSource = [{
                                y: 26,
                                drilldown: 'Australia'
                            },
                            {
                                y: 9,
                                drilldown: 'Papua New Guinea'
                            },
                            {
                                y: 5,
                                drilldown: 'New Zealand'
                            }
                            ];
                        }

                    }
                }
            }
        }

        // custom code end
    });
    chart.appendTo('#column-container');
    if (document.getElementById('category')) {
        ej.charts.getElement('category').onclick = function (e) {
            chart.title = "Top Populated Continents of 2023";
            chart.subTitle = "A Look at Population Rankings and Trends in 2023";
            chart.primaryXAxis.labelStyle.color = "blue";
            chart.primaryYAxis.interval = 1000;
            chart.series[0].dataSource = data; // Ensure 'data' is defined properly
            clicked = false;
            e.target.style.visibility = 'hidden'; // Hides the clicked element
            document.getElementById('symbol').style.visibility = 'hidden'; // Hides the symbol
            document.getElementById('text').style.visibility = 'hidden'; // Hides the text
        };
    }
};