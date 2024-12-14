this.default = function () {
    /**
     * Data Trend Analysis
     */
    ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Edit, ej.grids.Sort);

    let GeneratedTrendData;
    let GeneratePredictiveData;
    let months2024 = ['July 2024', 'August 2024', 'September 2024', 'October 2024', 'November 2024', 'December 2024'];
    let years = [
        { Year: '2022', ID: 'Year2022' },
        { Year: '2023', ID: 'Year2023' },
        { Year: '2024', ID: 'Year2024' },
    ];

    let yearDdl = new ej.dropdowns.DropDownList({
        dataSource: years,
        value: 'Year2024',
        fields: { text: 'Year', value: 'ID' },
        select: ValueSelectHandler,
        placeholder: 'Select a year',
        width: 150,
    });
    yearDdl.appendTo('#year_ddl');

    let button = new ej.buttons.Button({});
    button.appendTo('#get_trend_data');
    if (button.element) {
        button.element.onclick = getTrendData;
    }

    let grid = new ej.grids.Grid({
        dataSource: window.OverallData,
        editSettings: { allowAdding: true, newRowPosition: 'Bottom' },
        queryCellInfo: CustomizeCell,
        columns: [
            { field: 'Month', isPrimaryKey: true, headerText: 'Time Stamp', width: 100 },
            { field: 'Sales', headerText: 'Sales', textAlign: 'Right', format: 'C2', width: 80 },
            { field: 'MarketingSpend', headerText: 'Marketing Spend', textAlign: 'Right', format: 'C2', width: 80 },
            { field: 'NewCustomers', headerText: 'New Customers', textAlign: 'Right', width: 80 },
            { field: 'ReturningCustomers', headerText: 'Returning Customers', textAlign: 'Right', width: 100 },
            { field: 'WebsiteTraffic', headerText: 'Website Traffic', textAlign: 'Right', width: 80 },
            { field: 'ConversionRate', headerText: 'Conversion Rate', textAlign: 'Right', width: 80 },
        ],
        enableAltRow: true,
        allowSorting: true,
        enableHover: false,
        allowSelection: false,
        query: new ej.data.Query().where('Month', 'contains', '2024'),
        width: 1200,
        height: 600,
    });

    grid.appendTo('#Grid');

    function CustomizeCell(args) {
        if (GeneratedTrendData != null && GeneratedTrendData.length > 0 && (args.data).TrendColumn != null && (args.data).TrendColumn.indexOf(args.column.field) > -1) {
            if ((args.data).TrendColumn && (args.data).TrendColumn.indexOf('Low') > -1) {
                args.cell.classList.add('low-values');
            }
            else {
                args.cell.classList.add('high-values');
            }
        }
        let predictedRows = false;
        months2024.map((e) => {
            if (e.indexOf((args.data).Month) > -1) {
                predictedRows = true;
            }
        })
        if (predictedRows) args.cell.classList.add('predicted-rows');
    }

    function ValueSelectHandler(args) {
        if (args.itemData != null) {
            grid.query = new ej.data.Query().where('Month', 'contains', (args.itemData).Year);
        }
    }

    function getTrendData() {
        grid.showSpinner();
        if (yearDdl.text === '2024') {
            CalculatePredictiveData(yearDdl.text);
        }
        CalculateTrendAnalysis(yearDdl.text);
    }

    async function CalculateTrendAnalysis(year) {
        let query;
        if (!ej.base.isNullOrUndefined(year)) {
            query = new ej.data.Query().where('Month', 'contains', year);
        } else {
            query = new ej.data.Query();
        }
        const gridJsonData = JSON.stringify(new ej.data.DataManager(grid.dataSource).executeLocal(query));
        const prompt = GeneratePrompt(gridJsonData);
        const aiOutput = geminiModel(prompt);
        aiOutput.then((result) => {
            result = result.replace('```json', '').replace('```', '');
            GeneratedTrendData = JSON.parse(result);
            grid.hideSpinner();
            if (GeneratedTrendData.length) {
                for (let i = 0; i < GeneratedTrendData.length; i++) {
                    const item = GeneratedTrendData[i];
                    grid.setRowData(item.Month, item);
                }
            }
        });
    }

    async function CalculatePredictiveData(year) {
        if (GeneratePredictiveData != null && GeneratePredictiveData.length > 0) {
            return;
        }
        const gridReportJson = JSON.stringify(grid.dataSource);
        const prompt = GeneratePredictivePrompt(gridReportJson);
        const aiOutput = geminiModel(prompt);
        aiOutput.then((result) => {
            result = result.replace('```json', '').replace('```', '');
            GeneratePredictiveData = JSON.parse(result);
            if (GeneratePredictiveData.length > 0) {
                let rowIndex = 30;
                for (let i = 0; i < GeneratePredictiveData.length; i++) {
                    let newRecord = {
                        Month: GeneratePredictiveData[i].Month,
                        Sales: GeneratePredictiveData[i].Sales,
                        MarketingSpend: GeneratePredictiveData[i].MarketingSpend,
                        NewCustomers: GeneratePredictiveData[i].NewCustomers,
                        ReturningCustomers: GeneratePredictiveData[i].ReturningCustomers,
                        WebsiteTraffic: GeneratePredictiveData[i].WebsiteTraffic,
                        ConversionRate: GeneratePredictiveData[i].ConversionRate
                    };
                    grid.addRecord(newRecord, rowIndex);
                    rowIndex += 1;
                }
            }
        });
    }

    function GeneratePrompt(data) {
        return `Given the following data source bounded in the Grid table\n\n${data}.\n I want you to act as a Trend Analyzer for the given data. Observe the data and perform a trend analysis for the columns Sales and MarketingSpend. For each row, update the corresponding column field name in the TrendColumn field with the trend analyzed as High or Low based on the analysis result. Example: MarketingSpend-High.  Note: Include only the first 2 highest values and the 2 lowest values.\n\nGenerate the output in JSON format only and do not include any additional information or contents in the response.`;
    }
    function GeneratePredictivePrompt(data) {
        return `Given the following datasource are bounded in the Grid table\n\n${data}.\n I want you to Predict the future data by analyzing the historical report of the previous years. Predict the future sales for the next 6 months based on the given data. For Example: I have binded the Monthly reports for the past two years and first 6 months of this year by analyzing this historical data, i want you to predict my future monthly data for the upcoming 6 months for the year 2024. The generated data should be returned in the same format as i have binded in this prompt, do not add any additional content. \n\nGenerate an output in JSON format only and Should not include any additional information or contents in response`;
    }
};