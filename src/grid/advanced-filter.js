var initialAdvancedFilterRule = {
	condition: 'and',
	rules: [{
		field: 'Status',
		label: 'Status',
		type: 'string',
		operator: 'notequal',
		value: 'done'
	}]
};

this.default = function () {
	var grid = new ej.grids.Grid({
		dataSource: window.ticketdata,
		enableVirtualization: true,
		allowSorting: true,
		height: 400,
		pageSettings: { pageSize: 50 },
		allowAdvancedFiltering: true,
		toolbar: ['Edit', 'Delete', 'AdvancedFilter'],
		editSettings: { allowEditing: true, allowDeleting: true, mode: 'Dialog' },
		load: function (args) {
			if (args) {
				args.enableSeamlessScrolling = true;
			}
		},
		rowHeight: 45,
		actionBegin: function (args) {
			var i;
			var column;
			var field;
			if (args.requestType === 'beginEdit' || args.requestType === 'add') {
				for (i = 0; i < grid.columns.length; i++) {
					column = grid.columns[i];
					field = column.field;
					if (field === 'Title' || field === 'TypeofRequest' || field === 'CreatedDate') {
						column.visible = false;
					}
				}
			}
			if (args.requestType === 'save' || args.requestType === 'cancel') {
				for (i = 0; i < grid.columns.length; i++) {
					column = grid.columns[i];
					field = column.field;
					if (field === 'Title' || field === 'TypeofRequest' || field === 'CreatedDate') {
						column.visible = true;
					}
				}
			}
		},
		advancedFilterSettings: {
			queryBuilderSettings: {
				rule: initialAdvancedFilterRule
			}
		},
		columns: [
			{ field: 'TicketID', headerText: 'Ticket ID', textAlign: 'Right', width: 120, isPrimaryKey: true },
			{ field: 'Title', headerText: 'Title', width: 260, allowEditing: false },
			{ field: 'TypeofRequest', headerText: 'Type', width: 150, allowEditing: false },
			{ field: 'Assignee', headerText: 'Assignee', width: 150, editType: 'dropdownedit' },
			{ field: 'Priority', headerText: 'Priority', width: 130, editType: 'dropdownedit' },
			{ field: 'Status', headerText: 'Status', width: 130, editType: 'dropdownedit' },
			{ field: 'CreatedDate', headerText: 'Created Date', width: 140, textAlign: 'Right', format: 'yMd', allowEditing: false },
			{ field: 'DueDate', headerText: 'Due Date', width: 140, textAlign: 'Right', format: 'yMd',editType: 'datepickeredit' },
		]
	});
	grid.appendTo('#Grid');
};