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
        ],
         filterSettings: [
            { name: '[Date].[Fiscal]', items: ['[Date].[Fiscal].[Fiscal Quarter].&[2002]&[4]', '[Date].[Fiscal].[Fiscal Year].&[2005]'], 
            levelCount: 3 }
        ]
    },
    allowExcelExport: true,
    allowConditionalFormatting: true,
    allowPdfExport: true,
    showToolbar: true,
    displayOption:{view:'Both'},
    allowCalculatedField: true,
    showGroupingBar: true,
    showFieldList: true,
    width: '100%',
    toolbar: ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
    'Grid', 'Chart','MDX', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'FieldList'],
    height: 600,
    gridSettings: {
        columnWidth: 160
    },
    chartSettings: {
        load: function(args) {
          var selectedTheme = location.hash.split("/")[1];
          selectedTheme = selectedTheme ? selectedTheme : "Material";
          args.chart.theme =
            selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
        }
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