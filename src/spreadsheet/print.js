this.default = function () {
    var imageSource = base64PrintUrl; 
    var spreadsheet = new ej.spreadsheet.Spreadsheet({
        sheets: [
            {
                ranges: [{
                    dataSource: window.printData,
                    startCell: "A2"
                    },
                ],
                name: 'Car Sales',
                rows: [
                    {
                        cells: [{ image: [{src: imageSource, height: 40, width: 80, top: 5, left: 130}] }, 
                        { index:1, value: '          Ivaa Premium Cars', colSpan: 5, style: {
                            fontSize: '30pt', fontWeight: 'bold',
                            textAlign: 'left'
                        }}
                        ], height: 51,
                    },
                    {
                        index: 1,
                        cells: [
                            { index: 3, wrap: true, style: {
                                    fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                                    verticalAlign: 'middle', color: '#ffffff'
                                } },
                            { index: 4, wrap: true, style: {
                                    fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                                    verticalAlign: 'middle', color: '#ffffff'
                                } },
                            { index: 5, style: {
                                    fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                                    verticalAlign: 'middle', color: '#ffffff'
                                } }
                        ], height: 45
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'sarah.johnson@example.com' },
                            { index: 7, chart: [{ type: 'Column', range: 'C2:D58' }] }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'michael.smith@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'emily.davis@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'john.anderson@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'jessica.martinez@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'daniel.thompson@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'samantha.harris@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'christopher.wilson@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'ashley.brown@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'matthew.taylor@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'olivia.garcia@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'david.hernandez@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'emma.moore@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'andrew.lewis@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'elizabeth.clark@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'james.walker@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'ava.rodriguez@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'ryan.white@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'madison.lee@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'nicholas.martin@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'sophia.hall@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'joshua.young@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'isabella.king@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'joseph.allen@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'charlotte.scott@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'william.green@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'amelia.adams@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'ethan.carter@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'mia.turner@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'alexander.baker@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'chloe.hill@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'benjamin.nelson@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'grace.mitchell@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'jacob.perez@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'avery.roberts@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'ethan.thomas@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'lily.phillips@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'samuel.davis@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'zoey.campbell@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'daniel.cooper@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'madeline.collins@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'nathan.edwards@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'evelyn.stewart@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'alexander.rivera@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'sophia.henderson@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'isaac.morris@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'claire.rogers@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'luke.flores@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'aubrey.long@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'julian.coleman@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'leah.reed@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'gabriel.bell@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'natalie.ward@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'lucas.brooks@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'hailey.mitchell@example.com' }
                        ]
                    },
                    {
                        cells: [
                            { index: 1, hyperlink: 'jackson.ward@example.com' }
                        ]
                    },
                    {
                        index: 58,
                        cells: [{
                                index: 4, value: 'Total Amount', style: { border: '1px solid #A6A6A6', fontWeight: 'bold',
                                    textAlign: 'center', verticalAlign: 'middle' }
                            },
                            {
                                index: 5, formula: '=Sum(F3:F56)', style: {
                                    border: '1px solid #A6A6A6',
                                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                                }
                            }],
                        height: 25
                    }
                ],
                columns: [
                    { width: 125, }, { width: 205 }, { width: 115 }, { width: 50 }, { width: 90 },
                    { width: 80 }, { width: 20 }
                ]
            },
            {
                name: 'Yearly Report',
                ranges: [{ dataSource: window.yearlyReport, startCell: 'A2' }],
                activeCell: 'A3',
                rows: [
                    {
                        cells: [{ image: [{src:imageSource, height: 40, width: 80, top: 5, left: 95}] },
                            { index: 1, value: '       Ivaa Premium Cars', colSpan: 6, style: {
                            fontSize: '30pt', fontWeight: 'bold',
                            textAlign: 'left'
                        }} 
                        ], height: 51,
                    },
                    {
                        index: 1,
                        height: 23
                    },
                    {
                        index: 31,
                        cells: [{
                                index: 0, value: 'Total cars sold', style: { border: '1px solid #A6A6A6', fontWeight: 'bold',
                                    textAlign: 'left', verticalAlign: 'middle' }
                            },
                            {
                                index: 1, formula: '=Sum(B3:B31)', style: {
                                    border: '1px solid #A6A6A6',
                                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                                }
                            },
                            {
                                index: 2, formula: '=Sum(C3:C31)', style: {
                                    border: '1px solid #A6A6A6',
                                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                                }
                            },
                            {
                                index: 3, formula: '=Sum(D3:D31)', style: {
                                    border: '1px solid #A6A6A6',
                                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                                }
                            },
                            {
                                index: 4, formula: '=Sum(E3:E31)', style: {
                                    border: '1px solid #A6A6A6',
                                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                                }
                            },
                            {
                                index: 5, formula: '=Sum(F3:F31)', style: {
                                    border: '1px solid #A6A6A6',
                                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                                }
                            },
                            {
                                index: 6, formula: '=Sum(G3:G31)', style: {
                                    border: '1px solid #A6A6A6',
                                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                                }
                            }
                            
                        ],
                        height: 25
                    }
                ],
                columns: [
                    { width: 120, }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 80 },
                    { width: 80 }, { width: 80 }
                ]
            }
        ],
        created: function () {
            spreadsheet.cellFormat({ fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                    verticalAlign: 'middle', color: '#ffffff' }, 'Car Sales!A2:C2');
            spreadsheet.cellFormat({ fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                    verticalAlign: 'middle', color: '#ffffff' }, 'Yearly Report!A2:G2');
            spreadsheet.numberFormat('$#,##0.00', 'Car Sales!F3:F59');
            spreadsheet.numberFormat('m/d/yyyy', 'Car Sales!E3:E58');
        },
        openUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/open',
        saveUrl: 'https://services.syncfusion.com/js/production/api/spreadsheet/save',
    }
);
    spreadsheet.appendTo('#spreadsheet');
    var printType = 'ActiveSheet';
    var dropDownListInstance = new ej.dropdowns.DropDownList({
        index: 0,
        placeholder: 'Printing Option',
        width: '100%',
        change: function () {
            printType = dropDownListInstance.value;
        }
    });
    dropDownListInstance.appendTo('#printType');
    var allowGridLines;
    var allowRowColumnHeader;
    var enableRowColumnHeader;
    var rowColumnHeaderChecBox = new  ej.buttons.CheckBox({
        change: enableRowColumnHeader, checked: false
    }, '#header');
    rowColumnHeaderChecBox.change = enableRowColumnHeader = function (e) {
        allowRowColumnHeader = e.checked;
    };
    var enableGridLines;
    var gridlineCheckBox = new  ej.buttons.CheckBox({
        change: enableGridLines, checked: false
    }, '#gridline');
    gridlineCheckBox.change = enableGridLines = function (e) {
        allowGridLines = e.checked;
    };
    var printButton = new  ej.buttons.Button({
        isPrimary: true
    });
    printButton.appendTo('#printButton');
    var printButtonElement = document.getElementById('printButton');
    if (printButtonElement) {
        printButtonElement.onclick = function () {
            spreadsheet.print({ type: printType, allowGridLines: allowGridLines, allowRowColumnHeader: allowRowColumnHeader });
        };
    }
        
};
