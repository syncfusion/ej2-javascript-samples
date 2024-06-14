/**
 * Pivot Table Keyboard Navigation Sample.
 */
 this.default = function () {
    ej.base.enableRipple(false);
    var pivotviewObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            enableSorting: true,
            allowLabelFilter: true,
            allowMemberFilter: true,
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            expandAll: false,
            dataSource: window.Pivot_Data,
            values: [{ name: 'Sold', caption: 'Units Sold' },
                { name: 'Amount', caption: 'Sold Amount' }],
            allowValueFilter: true,
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            rows: [{ name: 'Country' }, { name: 'Products' }]
        },
        showGroupingBar: true,
        allowExcelExport: true,
        allowConditionalFormatting: true,
        allowNumberFormatting: true,
        allowPdfExport: true,
        chartSettings: {
            load: function(args) {
              var selectedTheme = location.hash.split("/")[1];
              selectedTheme = selectedTheme ? selectedTheme : "Material";
              args.chart.theme =
              (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            },
            title:"Sales Analysis",
        },
        toolbar: ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
		'Export', 'SubTotal', 'GrandTotal', 'Formatting', 'FieldList'],
        showToolbar: true,
        allowCalculatedField: true,
        enableValueSorting: true,
        width: '100%',        
        showFieldList: true,
        showTooltip: false,
        newReport: function () {
            pivotviewObj.setProperties({
                dataSourceSettings: {
                    columns: [],
                    rows: [],
                    values: [],
                    filters: []
                }
            }, false);
        },
        saveReport: function (args) {
            var isSaved = false;
            var reports = [];
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                reports = JSON.parse(localStorage.pivotviewReports);
            }
            if (args.report && args.reportName && args.reportName !== '') {
                reports.map(function (item) {
                    if (args.reportName === item.reportName) {
                        isSaved = true;
                        item.report = args.report;
                    }
                });
                if (!isSaved) {
                    reports.push(args);
                }
                localStorage.pivotviewReports = JSON.stringify(reports);
            }
        },
        allowDrillThrough: true,
        loadReport: function (args) {
            var reportCollections = [];
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                reportCollections = JSON.parse(localStorage.pivotviewReports);
            }
            reportCollections.map(function (item) {
                if (args.reportName === item.reportName) {
                    args.report = item.report;
                }
            });
            if (args.report) {
                pivotviewObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
            }
        },
        fetchReport: function (args) {
            var reportCollections = [];
            var reeportList = [];
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                reportCollections = JSON.parse(localStorage.pivotviewReports);
            }
            reportCollections.map(function (item) {
                reeportList.push(item.reportName);
            });
            args.reportName = reeportList;
        },
        toolbarRender: function (args) {
			args.customToolbar.splice(6, 0, {
				type: 'Separator' 
			});
			args.customToolbar.splice(9, 0, {
				type: 'Separator' 
			});
		},
        editSettings: {
            allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', allowEditOnDblClick: true
        },
        renameReport: function (args) {
            var reportCollections = [];
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                reportCollections = JSON.parse(localStorage.pivotviewReports);
            }
            if (args.isReportExists) {
                for (var i = 0; i < reportCollections.length; i++) {
                    if (reportCollections[i].reportName === args.rename) {
                        reportCollections.splice(i, 1);
                    }
                }
            }
            reportCollections.map(function (item) {
                if (args.reportName === item.reportName) {
                    item.reportName = args.rename;
                }
            });
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                localStorage.pivotviewReports = JSON.stringify(reportCollections);
            }
        },
        removeReport: function (args) {
            var reportCollections = [];
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                reportCollections = JSON.parse(localStorage.pivotviewReports);
            }
            for (var i = 0; i < reportCollections.length; i++) {
                if (reportCollections[i].reportName === args.reportName) {
                    reportCollections.splice(i, 1);
                }
            }
            if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
                localStorage.pivotviewReports = JSON.stringify(reportCollections);
            }
        },
        height: 450,
        gridSettings: {
            columnWidth: 140
        }
    });
    pivotviewObj.appendTo('#PivotView');
};