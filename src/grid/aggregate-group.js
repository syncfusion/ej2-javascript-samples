this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.energyData,
        allowGrouping: true,
        allowSorting: true,
        allowMultiSorting:true,
        allowFiltering: true,
        height:300,
        enableHover: false,
        gridLines:'Vertical',
        filterSettings: { type: 'Excel' },
        groupSettings: { showDropArea: false, columns: ['ConsumptionCategory'], showGroupedColumn:true },
        columns: [
            { field: 'ID', headerText: 'ID', textAlign: 'Right', isPrimaryKey: true, visible: false },
            { field: 'Month', headerText: 'Month', textAlign: 'Right', width: 120, format: 'yMd', allowEditing: false, clipMode:'EllipsisWithTooltip', type:'date' },
            { headerText: 'Category', field: 'ConsumptionCategory', width: 130, clipMode:'EllipsisWithTooltip'},
            { headerTemplate: "#energyTemplate", textAlign: 'Center', columns: [
                    { field: 'EnergyConsumed', headerText: 'Consumed', width: 150, textAlign: 'Right', clipMode:'EllipsisWithTooltip' },
                    { field: 'EnergyProduced', headerText: 'Produced', width: 300, textAlign: 'Right', editType: 'numericedit', validationRules: { required: true, min: 0 } },
                ] },
            { field: 'WeatherCondition', headerText: 'Weather', width: 120, clipMode:'EllipsisWithTooltip' },
            { field: 'EnergyPrice', headerText: 'Price ($)', format: 'C2', width: 130, clipMode:'EllipsisWithTooltip', textAlign: 'Right' },
        ],
        aggregates: [{
            columns: [{
                    type: 'Sum',
                    field: 'EnergyProduced',
                    format: 'N2',
                    footerTemplate: 'Total Energy Produced: ${Sum} KWh'
                }]
        },
        {
            columns: [{
                    type: 'Sum',
                    field: 'EnergyProduced',
                    format: 'N2',
                    groupFooterTemplate: 'Total Energy Produced: ${Sum} KWh'
                }]
        },
        {
            columns: [{
                    type: 'Average',
                    field: 'EnergyProduced',
                    format: 'N2',
                    footerTemplate: 'Average Energy Produced: ${Average} KWh'
                }]
        },
        {
            columns: [{
                    type: ["Min","Max"],
                    field: 'EnergyProduced',
                    format: 'N2',
                    groupCaptionTemplate: '<div class="e-grid-group-caption-temp"><span class="e-minimum">Min: ${Min}</span><span>||</span> <span class="e-maximum"> Max : ${Max}</span></div> '
                }]
        }
    ],
    });
    grid.appendTo('#group-aggregate-grid');
};
