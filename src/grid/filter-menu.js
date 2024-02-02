/**
 * Grid filtermenu sample
 */
this.default = function () {
    var filtertype = [
        { id: 'Menu', type: 'Menu' },
        { id: 'CheckBox', type: 'Checkbox' },
        { id: 'Excel', type: 'Excel' }
    ];
    var urlapi = new ej.data.DataManager({
        url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
        adaptor: new ej.data.UrlAdaptor()
    });
    var grid = new ej.grids.Grid({
        dataSource: urlapi,
        query: new ej.data.Query().addParams('dataCount', '10000'),
        allowPaging: true,
        allowFiltering: true,
        allowSorting: true,
        filterSettings: { type: 'Menu' },
        columns: [
            { field: 'EmployeeID', headerText: 'Employee ID', isPrimaryKey: true, width: '120' },
            { field: 'Employees', headerText: 'Employee Name', width: '150' },
            { field: 'Designation', headerText: 'Designation', width: '130' },
            {
                field: 'CurrentSalary', headerText: 'Current Salary', format: 'C2',
                textAlign: 'Right', width: '120'
            }
        ],
        pageSettings: { pageCount: 5 }
    });
    grid.appendTo('#Grid');

    // sets the filterType
    var dropDownFilterType = new ej.dropdowns.DropDownList({
        dataSource: filtertype,
        fields: { text: 'type', value: 'id' },
        value: 'Menu',
        change: function (e) {
            var dropSelectedValue = e.value;
            grid.filterSettings.type = dropSelectedValue;
            grid.clearFiltering();
            var propertyTbody = document.querySelector('#property tbody');
            var enableInfiniteLoad;
            if (dropSelectedValue === 'Excel' || dropSelectedValue === 'CheckBox') {
                if (propertyTbody.children.length < 2) {
                    var temp = document.getElementsByTagName("template")[0];
                    var cloneTemplate = temp.content.cloneNode(true);
                    propertyTbody.appendChild(cloneTemplate.querySelector("tr.infinite-row"));
                    enableInfiniteLoad = new ej.buttons.CheckBox({
                        change: function(e) {
                            grid.filterSettings.enableInfiniteScrolling = e.checked;
                        }
                    });
                    enableInfiniteLoad.appendTo('#dataloadtype');
                } else {
                    enableInfiniteLoad = document.getElementById('dataloadtype').ej2_instances[0];
                    enableInfiniteLoad.checked = false;
                    grid.filterSettings.enableInfiniteScrolling = false;
                }
            } else {
                grid.filterSettings.enableInfiniteScrolling = false;
                ej.base.remove(document.querySelector('#property tbody tr.infinite-row'));
            }
        }
    });
    dropDownFilterType.appendTo('#filtertype');
};
