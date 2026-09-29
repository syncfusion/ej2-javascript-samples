this.default = function () {
	createFormulaData();
	var grid = new ej.grids.Grid({
		dataSource: window.formula,
		editSettings: { allowEditing: true, mode: 'Cell' },
		enableAutoFill: true,
		clipMode: 'EllipsisWithTooltip',
		selectionSettings: { mode: 'Cell', cellSelectionMode: 'Box', type: 'Multiple' },
		height: 400,
		columns: [
			{
				field: 'OrderID', headerText: 'Order ID', width: 100, isPrimaryKey: true, textAlign: 'Right',
				validationRules: { required: true }
			},
			{ field: 'ProductName', headerText: 'Product Name', width: 200, validationRules: { required: true }, allowEditing: false },
			{
				field: 'Category', headerText: 'Category', width: 130, editType: 'dropdownedit', allowEditing: false
			},
			{ field: 'Quantity', headerText: 'Quantity', width: 120, textAlign: 'Right', editType: 'numericedit', edit: { params: { showSpinButton: false } } },
			{ field: 'PricePerUnit', headerText: 'Price Per Unit', width: 140, textAlign: 'Right', editType: 'numericedit', format: 'C2', edit: { params: { showSpinButton: false } } },
			{ field: 'GrossAmount', headerText: 'Gross Amount', width: 150, textAlign: 'Right', allowFormula: true, format: 'C2' },
			{ field: 'TaxAmount', headerText: 'Tax Amount', width: 130, textAlign: 'Right', allowFormula: true, format: 'C2', allowEditing: false },
			{ field: 'TotalAmount', headerText: 'Total Amount', width: 150, textAlign: 'Right', allowFormula: true, format: 'C2' }
		]
	});
	grid.appendTo('#Grid');
};
