
    /**
     * Integration with Data Grid sample
     */

    this.default = function () {
        var columnData = [
            { field: 'TaskID', label: 'Task ID', type: 'number' },
            { field: 'Name', label: 'Name', type: 'string' },
            { field: 'Category', label: 'Category', type: 'string' },
            { field: 'SerialNo', label: 'Serial No', type: 'string' },
            { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
            { field: 'Status', label: 'Status', type: 'string' }
        ];
        var importRules = {
            'condition': 'or',
            'rules': [{
                'label': 'Category',
                'field': 'Category',
                'type': 'string',
                'operator': 'equal',
                'value': 'Laptop'
            }]
        };
        var qryBldrObj = new ej.querybuilder.QueryBuilder({
            dataSource: window.hardwareData,
            columns: columnData,
            rule: importRules,
            ruleChange: updateRule
        });
        qryBldrObj.appendTo('#querybuilder');
        var grid;
        createGrid(new ej.data.Query().select(['TaskID', 'Name', 'Category', 'SerialNo', 'InvoiceNo', 'Status']));
		updateRule({rule: qryBldrObj.getValidRules(qryBldrObj.rule) });
        function updateRule(args) {
            var predicate = qryBldrObj.getPredicate(args.rule);
            var query;
            if (predicate) {
                query = new ej.data.Query().select(['TaskID', 'Name', 'Category', 'SerialNo', 'InvoiceNo', 'Status'])
                    .where(predicate);
            } else {
                query = new ej.data.Query().select(['TaskID', 'Name', 'Category', 'SerialNo', 'InvoiceNo', 'Status']);
            }
            grid.query = query;
            grid.refresh();
        }

        function createGrid(query) {
            grid = new ej.grids.Grid({ 
                dataSource: window.hardwareData,
                query: query,
                width: '100%',
                allowPaging: true,
                columns: [
                    { field: 'TaskID', headerText: 'Task ID', width: 120, textAlign: 'Right' },
                    { field: 'Name', headerText: 'Name', width: 140 },
                    { field: 'Category', headerText: 'Category', width: 140, textAlign: 'Right' },
                    { field: 'InvoiceNo', headerText: 'Invoice No', width: 130 },
                    { field: 'Status', headerText: 'Status', width: 120 },
                    { field: 'SerialNo', headerText: 'Serial No', width: 130 },
                ],
                pageSettings: { pageSize: 8, pageCount: 5 },
            });
            grid.appendTo('#Grid');
        }
    };