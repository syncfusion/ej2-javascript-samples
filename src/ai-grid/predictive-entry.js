this.default = function () {
    /**
     * Predictive Data Entry
     */
    ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Toolbar);

    let grid = new ej.grids.Grid({
        dataSource: window.predictiveData,
        toolbar: [{ text: 'Calculate Grade', tooltipText: 'Calculate Grade', id: 'calculate_Grade' }],
        toolbarClick: clickHandler,
        queryCellInfo: CustomizeCell,
        columns: [
            { field: 'StudentID', isPrimaryKey: true, headerText: 'Student ID', width: 100 },
            { field: 'StudentName', headerText: 'Student Name', width: 100 },
            { field: 'FirstYearGPA', textAlign: 'Center', headerText: 'FirstYear GPA', width: 100 },
            { field: 'SecondYearGPA', headerText: 'SecondYear GPA', headerTextAlign: 'Center', textAlign: 'Center', width: 100 },
            { field: 'ThirdYearGPA', headerText: 'ThirdYear GPA', headerTextAlign: 'Center', textAlign: 'Center', width: 100 },
            { field: 'FinalYearGPA', headerText: 'FinalYear GPA', visible: false, headerTextAlign: 'Center', textAlign: 'Center', width: 100 },
            { field: 'TotalGPA', headerText: 'Total GPA', visible: false, headerTextAlign: 'Center', textAlign: 'Center', width: 100 },
            { field: 'TotalGrade', headerText: 'Total Grade', visible: false, headerTextAlign: 'Center', textAlign: 'Center', width: 100 },
        ],
        height: 500,
        enableHover: false
    });
    grid.appendTo('#Grid');

    function clickHandler(args) {
        if (args.item.id === 'calculate_Grade') {
            grid.showSpinner();
            ExecutePrompt();
        }
    }

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function ExecutePrompt() {
        const prompt = 'Final year GPA column should updated based on GPA of FirstYearGPA, SecondYearGPA and ThirdYearGPA columns. Total GPA should update based on average of all years GPA. Total Grade update based on total GPA. Updated the grade based on following details, 0 - 2.5 = F, 2.6 - 2.9 = C, 3.0 - 3.4 = B, 3.5 - 3.9 = B+, 4.0 - 4.4 = A, 4.5 - 5 = A+. average value decimal should not exceed 1 digit.';
        const gridReportJson = JSON.stringify(grid.dataSource);
        const userInput = generatePrompt(gridReportJson, prompt);
        const aiOutput = geminiModel(userInput);
        aiOutput.then((result) => {
            result = result.replace('```json', '').replace('```', '');
            const generatedData = JSON.parse(result);
            grid.hideSpinner();
            if (generatedData.length) {
                grid.showColumns(['FinalYear GPA', 'Total GPA', 'Total Grade']);
                updateRows(generatedData);
            }
        });
    }

    async function updateRows(generatedData) {
        await delay(300);
        for (let i = 0; i < generatedData.length; i++) {
            const item = generatedData[i];
            grid.setRowData(item.StudentID, item);
            await delay(300);
        }
    }

    function CustomizeCell(args) {
        if (args.column && args.column.field === 'FinalYearGPA' || args.column.field === 'TotalGPA') {
            if ((args.data).FinalYearGPA > 0) {
                args.cell.classList.add('e-PredictiveColumn');
            }
            else if ((args.data).TotalGPA > 0) {
                args.cell.classList.add('e-PredictiveColumn');
            }
        }
        if (args.column.field === 'TotalGrade') {
            if ((args.data).TotalGPA <= 2.5) {
                args.cell.classList.add('e-inactivecolor');
            }
            else if ((args.data).TotalGPA >= 4.5) {
                args.cell.classList.add('e-activecolor');
            }
            else if ((args.data).TotalGPA > 0) {
                args.cell.classList.add('e-PredictiveColumn');
            }
        }
    }

    function generatePrompt(data, userInput) {
        return `Given the following datasource are bounded in the Grid table\n\n${data}.\n Return the newly prepared datasource based on following user query:  ${userInput}\n\nGenerate an output in JSON format only and Should not include any additional information or contents in response`;
    }
};