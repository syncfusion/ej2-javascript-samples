this.default = function () {    
    /**
     * Semantic Filtering
     */
    ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Toolbar);
    
    let productEmbeddings = {};
    
    getEmbeddingsData();
    
    async function getEmbeddingsData() {
        for (let record of window.MedicalRecords) {
            let data = (await window.embeddingModel(
                record.DoctorDetails + ' ' + record.PatientID + ' ' + record.Symptoms + ' ' + record.Diagnosis
            ));
            productEmbeddings[record.RecordID] = data;
        }
    }
    
    let grid = new ej.grids.Grid({
        dataSource: window.MedicalRecords,
        toolbar: [{
            template: `<div id='toolbar-template'>
                <input id='smart_search_input' />
                <button id='smart_search_button'>Smart Search</button>
            </div>` }],
        columns: [
            { field: 'RecordID', headerText: 'Student ID', textAlign: 'Right', width: 90 },
            { field: 'PatientID', headerText: 'Student Name', width: 90 },
            { field: 'Symptoms', headerText: 'Symptoms', width: 140 },
            { field: 'Diagnosis', headerText: 'Diagnosis', width: 100 },
            { field: 'DoctorDetails', headerText: 'Doctor Information', width: 140 }
        ],
        enableAltRow: true,
        allowTextWrap: true,
        created: created,
    });
    
    grid.appendTo('#Grid');
    
    function created() {
        let textbox = new ej.inputs.TextBox({
            placeholder: 'Search here',
            width: 200,
        });
        textbox.appendTo('#smart_search_input');
        let button = new ej.buttons.Button({}, '#smart_search_button');
        button.appendTo('#smart_search_button');
        button.element.onclick = smartSearch;  
    }
    
    function smartSearch() {
        if (grid) {
            let searchEle = grid.element.querySelector('#smart_search_input');
            if (searchEle) {
                let searchValue = searchEle.value.trim();
                if (searchValue) {
                    grid.showSpinner();
                    ExecutePrompt(searchValue);
                } else {
                    grid.query = new ej.data.Query();
                }
    
            }
        }
    }
    
    async function ExecutePrompt(searchValue) {
        let queryVector = await embeddingModel(searchValue);
        const similarityThreshold = 0.8;
        const outputData = window.MedicalRecords.filter((record) => {
            const similarity = window.cosineSimilarity(
                productEmbeddings[record.RecordID],
                queryVector
            );
            if (similarity > similarityThreshold) {
                return record;
            }
        });
        grid.hideSpinner();
        if (outputData.length > 0) {
            grid.query = new ej.data.Query().where(generatePredicate(outputData));
        } else {
            grid.query = new ej.data.Query().take(0);
        }
    }
    
    function generatePredicate(filteredData) {
        let predicates = [];
        for (let i = 0; i < filteredData.length; i++) {
            predicates.push(new ej.data.Predicate('Symptoms', 'contains', filteredData[i].Symptoms));
        }
        return ej.data.Predicate.or(predicates);
    }
};