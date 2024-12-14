/**
 * Pivot Table olap default sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {     
        catalog: 'Adventure Works DW 2008 SE',
        cube: 'Adventure Works',
        providerType: "SSAS",
        url: 'https://bi.syncfusion.com/olap/msmdpump.dll',
        localeIdentifier: 1033,
        enableSorting: true,
        rows: [
            { name: '[Customer].[Customer Geography]', caption: 'Customer Geography' },
        ],
        columns: [
            { name: '[Product].[Product Categories]', caption: 'Product Categories' },
            { name: '[Measures]', caption: 'Measures' },
        ],
        values: [
            { name: '[Measures].[Customer Count]', caption: 'Customer Count' },
            { name: '[Measures].[Internet Sales Amount]', caption: 'Internet Sales Amount' }
        ],
        filters: [
            { name: '[Date].[Fiscal]', caption: 'Date Fiscal' },
        ]
    },
    allowExcelExport: true,
    allowConditionalFormatting: true,
    allowPdfExport: true,
    enableFieldSearching: true,
    showToolbar: true,
    displayOption:{view:'Both'},
    allowCalculatedField: true,
    showGroupingBar: true,
    showFieldList: true,
    enableValueSorting: true,
    width: '100%',
    toolbar: ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
    'Grid', 'Chart','MDX', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'FieldList'],
    height: 500,
    gridSettings: {
        columnWidth: 160
    },
    chartSettings: {
        load: function(args) {
          var selectingTheme = location.hash.split("/")[1];
          selectingTheme = selectingTheme ? selectingTheme : "Material";
          args.chart.theme = (selectingTheme.charAt(0).toUpperCase() + selectingTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        title:"Sales Analysis",
    },
    loadReport: function (args) {
        var reportsCollection = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportsCollection = JSON.parse(localStorage.pivotviewReports);
        }
        reportsCollection.map(function (item) {
            if (args.reportName === item.reportName) {
                args.report = item.report;
            }
        });
        if (args.report) {
            pivotObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
        }
    },
    newReport: function () {
        pivotObj.setProperties({
            dataSourceSettings: {
                rows: [],
                columns: [],
                filters: [],
                values: [],
            }
        }, false);
    }, 
    removeReport: function (args) {
        var reportsCollection = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportsCollection = JSON.parse(localStorage.pivotviewReports);
        }
        for (var i = 0; i < reportsCollection.length; i++) {
            if (reportsCollection[i].reportName === args.reportName) {
                reportsCollection.splice(i, 1);
            }
        }
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            localStorage.pivotviewReports = JSON.stringify(reportsCollection);
        }
    },
    fetchReport: function (args) {
        var reportsCollection = [];
        var reeportsList = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportsCollection = JSON.parse(localStorage.pivotviewReports);
        }
        reportsCollection.map(function (item) {
            reeportsList.push(item.reportName);
        });
        args.reportName = reeportsList;
    },
    renameReport: function (args) {
        var reportsCollection = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportsCollection = JSON.parse(localStorage.pivotviewReports);
        }
        if (args.isReportExists) {
            for (var i = 0; i < reportsCollection.length; i++) {
                if (reportsCollection[i].reportName === args.rename) {
                    reportsCollection.splice(i, 1);
                }
            }
        }
        reportsCollection.map(function (item) {
            if (args.reportName === item.reportName) {
                item.reportName = args.rename;
            }
        });
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            localStorage.pivotviewReports = JSON.stringify(reportsCollection);
        }
    },
    toolbarRender: function (args) {
        args.customToolbar.splice(6, 0, {
            type: 'Separator' 
        });
        args.customToolbar.splice(9, 0, {
            type: 'Separator' 
        });
    },
    saveReport: function (args) {
        var report = [];
        var isSave = false;
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            report = JSON.parse(localStorage.pivotviewReports);
        }
        if (args.report && args.reportName && args.reportName !== '') {
            report.map(function (item) {
                if (args.reportName === item.reportName) {
                    item.report = args.report;
                    isSave = true;
                }
            });
            if (!isSave) {
                report.push(args);
            }
            localStorage.pivotviewReports = JSON.stringify(report);
        }
    }
});
pivotObj.appendTo('#PivotView');
};
