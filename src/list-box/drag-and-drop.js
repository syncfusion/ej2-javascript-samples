/**
 * ListBox drag and drop sample.
 */

var dataA = new ej.data.DataManager({
    json: window.dragAndDropA
});

this.default = function() {

    // Initialize ListBox component.
    var listObj1= new ej.dropdowns.ListBox({ 
        // Set the scope of the ListBox.
        scope: 'combined-list',

        // Set the dragAndDropA data to the data source.
        dataSource: dataA,

        // Set allowDragAndDrop as `true`.
        allowDragAndDrop: true,
        
        height: '330px',

        drop: onDropGroupA,
        // Map the appropriate columns to fields property.
        fields: { text:'Region' }
    });

    listObj1.appendTo('#listbox1');

    
    var dataB = new ej.data.DataManager({
        json: window.dragAndDropB
    });

    // Initialize ListBox component.
    var listObj2= new ej.dropdowns.ListBox({ 
        // Set the scope of the ListBox.
        scope: 'combined-list',

        // Set the dragAndDropB data to the data source.
        dataSource: dataB,

        // Set allowDragAndDrop as `true`.
        allowDragAndDrop: true,

        height: '330px',

        drop: onDropGroupB,

        // Set field property with text as `Name`.
        fields: { text:'Region' }
    });
 
    listObj2.appendTo('#listbox2');


    var modifiedDataA = { addedRecords: [], deletedRecords: [], changedRecords: [] };
    var modifiedDataB = { addedRecords: [], deletedRecords: [], changedRecords: [] };

    document.getElementById('savechange').onclick = function() {
        // Saving the manipulated records in to data manager.
        dataA.saveChanges(modifiedDataA, listObj1.fields.text);
        dataB.saveChanges(modifiedDataB, listObj2.fields.text);
        modifiedDataA.addedRecords = []; modifiedDataB.addedRecords = [];
    };

    function onDropGroupA(args) {
        args.items.forEach(function (item) {
            if (!listObj1.getDataByValue(item[listObj1.fields.text])) {/*Preventing item manipulation while doing drag and drop within same list box.*/
                modifiedDataB.addedRecords.push(item);
                modifiedDataA.deletedRecords.push(item);
            }
        });
    }

    function onDropGroupB(args) {
        args.items.forEach(function (item) {
            if (!listObj2.getDataByValue(item[listObj2.fields.text])) {
                modifiedDataA.addedRecords.push(item);
                modifiedDataB.deletedRecords.push(item);
            }
        });
    }
};