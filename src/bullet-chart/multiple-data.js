var data = [
    {
        requiredStories: 20,
        completedStories: 25,
        name: 'David',
        color: "#7f84e8"
    },
    {
        requiredStories: 25,
        completedStories: 20,
        name: 'Asif',
        color: "#dd8abd"
    },
    {
        requiredStories: 15,
        completedStories: 10,
        name: 'Thomas',
        color: "#70ad47"
    },
    {
        requiredStories: 40,
        completedStories: 39,
        name: 'Rohit',
        color: "#f8b883"
    },
    {
        requiredStories: 35,
        completedStories: 40,
        name: 'Virat',
        color: "#e56590"
    },
    {
        requiredStories: 28,
        completedStories: 25,
        name: 'Jude',
        color: "#357cd2"
    },
    {
        requiredStories: 10,
        completedStories: 18,
        name: 'Warner',
        color: "#404041"
    },
    {
        requiredStories: 30,
        completedStories: 28,
        name: 'Malik',
        color: "#00bdae"
    }
];

/**
 * Sample for multiple data.
 */
this.default = function () {
    var fabricColors = ["#e269ae", "#6f6fe2", "#c1c1c1", "#5b9bd5", "#70ad47", "#ffc000", "#ed7d31", "#4472c4"];
    var bootstrapColors = ["#407c92", "#b99b4f", "#7953ac", "#ff6ea6", "#7ddf1e", "#55a5c2", "#f7ce69", "#a16ee5"];
    var highContrastColors = ["#43ACEF", "#00C27A", "#FA83C3", "#BA98FF", "#C6E773",
       "#DFE6B6", "#E98272", "#79ECE4"];
    var materialColors = ["#63C7FF", "#8A77FF", "#F45C5C", "#EBBB3E", "#61EAA9", "#C57AFF", "#56AEFF", "#9ECB08"];
    var bootstrapDarkColors = ["#407c92", "#8A77FF", "#7953ac", "#ff6ea6", "#7ddf1e",
       "#55a5c2", "#f7ce69", "#a16ee5"];
    var tailwindColors = ["#9333EA", "#F97316", "#0369A1", "#8B5CF6", "#14B8A6", "#334155", "#65A30D", "#5A61F6"];
    var tailwindDarkColors = ["#2DD4BF", "#F97316", "#FCD34D", "#E879F9", "#4ADE80", "#F87171", "#22D3EE", "#8B5CF6"];
    var tailwind3Colors = ['#2F4074', '#03B4B4', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822'];
    var tailwind3DarkColors = ['#8029F1', '#1ABC9C', '#0D72DE', '#FF5733', '#D63384', '#F39C12', '#EF291F', '#91C822'];
    var bootstarp5Colors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384', '#DC3545', '#FFC107', '#198754', '#0DCAF0'];
    var bootstarp5DarkColors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384', '#DC3545', '#FFC107', '#198754', '#0DCAF0'];
    var fluentColors = ["#5887FF", "#EE993D", "#1BD565", "#FF7266", "#AF4BCF", "#EDBB40", "#DA4CB2", "#1AC9E6"];
    var material3Colors = ["#2196F5", "#4BE0BC", "#FD7400", "#963C70", "#F7523F", "#FFB400", "#00AEE0", "#6355C7"];
    var material3DarkColors = ["#B93CE4", "#B3F32F", "#FF9E45", "#38FFE7", "#17EA58", "#FFF500", "#FA4EAB", "#4EAAFF"];
    var defaultColors = ["#7f84e8", "#dd8abd", "#70ad47", "#f8b883", "#e56590", "#357cd2", "#404041", "#00bdae"];
    var fluent2Colors = ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#0364DE", "#66CD15", "#F3A93C", "#107C10", "#C19C00"];
    var fluent2HighContrastColors = ["#9BB449", "#2A72D5", "#43B786", "#3F579A", "#584EC6", "#E85F9C", "#6E7A89", "#EA6266", "#0B6A0B", "#C19C00"];
    var bullet = new ej.charts.BulletChart({
        width: ej.base.Browser.isDevice ? '100%' : '80%',
        tooltip: { enable: true },
        dataSource: data,
        valueField: 'completedStories',
        targetField: 'requiredStories',
        categoryField: 'name',
        animation: { enable: false },
        valueFill: 'color',
        targetColor: '#304560',
        ranges: [
            { end: 25, opacity: 1, color: '#DBE7F3' },
            { end: 37, opacity: 1, color: '#BBCEE7' },
            { end: 45, opacity: 1, color: '#96B2D7' }
        ],
        height: '400',
        minimum: 5, maximum: 45, interval: 5,
        minorTickLines: { width: 0},
        title: 'Sprint Planning',
        subtitle: 'Estimated in story points',
        titlePosition: 'Top',
        load: function (args) {
            var selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.bulletChart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            var color = [];
            switch (args.bulletChart.theme) {
                case "Fabric":
                    color = fabricColors;
                    break;
                case "Bootstrap4":
                case "Bootstrap":
                    color = bootstrapColors;
                    break;
                case "HighContrastLight":
                case "HighContrast":
                    color = highContrastColors;
                    break;
                case "MaterialDark":
                    color = materialColors;
                    break;
                case "FabricDark":
                    color = fabricColors;
                    break;
                case "BootstrapDark":
                    color = bootstrapDarkColors;
                    break;
                case "Tailwind":
                    color = tailwindColors;
                    break;
                case "TailwindDark":
                    color = tailwindDarkColors;
                    break;
                case "Tailwind3":
                    color = tailwind3Colors;
                    break;
                case "Tailwind3Dark":
                    color = tailwind3DarkColors;
                    break;
                case "Bootstrap5":
                    color = bootstarp5Colors;
                    break;
                case "Bootstrap5Dark":
                    color = bootstarp5DarkColors;
                    break;
                case "Fluent":
                case "FluentDark":
                    color = fluentColors;
                    break;
                case "Material3":
                    color = material3Colors;
                    break;
                case "Material3Dark":
                    color = material3DarkColors;
                    break;
                case "Fluent2":
                    color = fluent2Colors;
                    break;
                case "Fluent2Dark":
                case "Fluent2HighContrast":
                    color = fluent2HighContrastColors;
                    break;
                default:
                    color = defaultColors;
                    break;
                } 
                for (var i = 0; i < (args.bulletChart.dataSource).length; i++) {
                    args.bulletChart.dataSource[i].color = color[i];
                }
            }
    });
    bullet.appendTo('#localData');
};