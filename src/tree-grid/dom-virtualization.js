this.default = function () {
    var statusTemplate = function (args) {
        var status = (args.StockStatus || '').toString();
        var normalizedStatus = status.toLowerCase();
        var cssClass = 'rg-badge-stock-available';

        if (normalizedStatus.indexOf('discontinued') === 0) {
            cssClass = 'rg-badge-stock-discontinued';
        }
        else if (normalizedStatus.indexOf('low stock') === 0) {
            cssClass = 'rg-badge-stock-low';
        }
        else if (normalizedStatus.indexOf('out of stock') === 0) {
            cssClass = 'rg-badge-stock-out';
        }

        return '<div class="rg-badge ' + cssClass + '">' + status + '</div>';
    };

 var regionTemplate = function (args) {
   var displayText = args.ItemType === 'Warehouse'? args.Country: args.Region;
var country = args.Country || args.Region || '';

var flagSvg = '';

    if (country === 'United States') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#B22234"/><rect y="0" width="20" height="2" fill="#fff"/><rect y="4" width="20" height="2" fill="#fff"/><rect y="8" width="20" height="2" fill="#fff"/><rect y="12" width="20" height="2" fill="#fff"/><rect width="8" height="8" fill="#3C3B6E"/></svg>';
    }
    else if (country === 'Canada') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#fff"/><rect width="4" height="14" fill="#D52B1E"/><rect x="16" width="4" height="14" fill="#D52B1E"/><path d="M10 4 L11 6 L9.5 6.5 L11 7 L10 10 L9 7 L7.5 6.5 L9 6 Z" fill="#D52B1E"/></svg>';
    }
    else if (country === 'United Kingdom') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#012169"/><path d="M0 0L20 14M20 0L0 14" stroke="#FFF" stroke-width="3"/><path d="M10 0V14M0 7H20" stroke="#FFF" stroke-width="4"/><path d="M10 0V14M0 7H20" stroke="#C8102E" stroke-width="2"/></svg>';
    }
    else if (country === 'France') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="7" height="14" fill="#0055A4"/><rect x="7" width="6" height="14" fill="#FFF"/><rect x="13" width="7" height="14" fill="#EF4135"/></svg>';
    }
    else if (country === 'Australia') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#012169"/><rect width="8" height="6" fill="#012169"/><path d="M0 0L8 6M8 0L0 6" stroke="#FFF" stroke-width="1"/><path d="M4 0V6M0 3H8" stroke="#FFF" stroke-width="2"/><circle cx="15" cy="10" r="1.2" fill="#FFF"/><circle cx="17" cy="7" r="0.8" fill="#FFF"/></svg>';
    }
    else if (country === 'Japan') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#FFF"/><circle cx="10" cy="7" r="4" fill="#BC002D"/></svg>';
    }
    else if (country === 'Germany') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="4.67" fill="#000"/><rect y="4.67" width="20" height="4.67" fill="#DD0000"/><rect y="9.34" width="20" height="4.66" fill="#FFCE00"/></svg>';
    }
    else if (country === 'Singapore') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="7" fill="#EF3340"/><rect y="7" width="20" height="7" fill="#FFF"/><circle cx="6" cy="4" r="2.2" fill="#FFF"/><circle cx="7" cy="4" r="1.7" fill="#EF3340"/></svg>';
    }
    else if (country === 'Brazil') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#009B3A"/><polygon points="10,2 17,7 10,12 3,7" fill="#FFDF00"/><circle cx="10" cy="7" r="2.5" fill="#002776"/></svg>';
    }
    else if (country === 'Netherlands') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="4.67" fill="#AE1C28"/><rect y="4.67" width="20" height="4.67" fill="#FFFFFF"/><rect y="9.34" width="20" height="4.66" fill="#21468B"/></svg>';
    }
    else if (country === 'South Korea') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#FFFFFF"/><circle cx="10" cy="6" r="2.4" fill="#CD2E3A"/><path d="M10 6a2.4 2.4 0 0 0 0 4.8a1.2 1.2 0 1 1 0-2.4a1.2 1.2 0 1 0 0-2.4" fill="#0047A0"/></svg>';
    }
    else if (country === 'Switzerland') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#D52B1E"/><rect x="8" y="3" width="4" height="8" fill="#FFF"/><rect x="6" y="5" width="8" height="4" fill="#FFF"/></svg>';
    }
    else if (country === 'Sweden') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#006AA7"/><rect x="6" width="2" height="14" fill="#FECC00"/><rect y="6" width="20" height="2" fill="#FECC00"/></svg>';
    }
    else if (country === 'Italy') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="7" height="14" fill="#009246"/><rect x="7" width="6" height="14" fill="#FFF"/><rect x="13" width="7" height="14" fill="#CE2B37"/></svg>';
    }
    else if (country === 'Spain') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#AA151B"/><rect y="3" width="20" height="8" fill="#F1BF00"/></svg>';
    }
    else if (country === 'India') {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="4.67" fill="#FF9933"/><rect y="4.67" width="20" height="4.67" fill="#FFF"/><rect y="9.34" width="20" height="4.66" fill="#138808"/><circle cx="10" cy="7" r="1.2" fill="none" stroke="#000080" stroke-width="0.4"/></svg>';
    }
    else {
        flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14"><rect width="20" height="14" fill="#6b7280"/></svg>';
    }

   return '<div class="rg-region">' +
'<span class="rg-region-flag">' + flagSvg + '</span>' +
'<span class="rg-region-name">' + displayText + '</span>' +
'</div>';
};

    if (!Window.domVirtualizationData) {
        if (typeof (window.domVirtualizationDataSource) === 'function') {
            window.domVirtualizationDataSource();
        }
    }
    

    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.domVirtualizationData,
        treeColumnIndex: 2,
        idMapping: 'ItemID',
        parentIdMapping: 'ParentItemID',
        allowSorting: true,
        enableVirtualization: true,
        enableDomVirtualization: true,
        domVirtualizationSettings: { rowBuffer: 20 },
        pageSettings: { pageSize: 100 },
        enableVirtualMaskRow: true,
        clipMode: 'EllipsisWithTooltip',
        height: 400,
        rowHeight: 50,
        columns: [
            {
                field: 'ItemID',
                headerText: 'ID',
                width: 110,
                textAlign: 'Right',
                isPrimaryKey: true,
                visible: true
            },
            {
                field: 'ParentItemID',
                headerText: 'Parent ID',
                width: 110,
                textAlign: 'Right',
                visible: false
            },
            {
                field: 'ItemName',
                headerText: 'Inventory Name',
                width: 320
            },
            {
                field: 'ItemType',
                headerText: 'Type',
                width: 120,
                visible: false
            },
            {
                field: 'Category',
                headerText: 'Category',
                width: 200
            },
            {
                field: 'Region',
                headerText: 'Location',
                width: 200,
                template: regionTemplate
            },
            {
                field: 'Supplier',
                headerText: 'Supplier',
                width: 240
            },
            {
                field: 'StockStatus',
                headerText: 'Stock Status',
                width: 180,
                template: statusTemplate
            },
            {
                field: 'Quantity',
                headerText: 'Quantity',
                width: 120,
                textAlign: 'Right',
                editType: 'numericedit'
            },
            {
                field: 'UnitPrice',
                headerText: 'Unit Price',
                width: 130,
                textAlign: 'Right',
                format: { format: 'C2', currency: 'USD' },
                editType: 'numericedit'
            }
        ]
    });

    treegrid.appendTo('#TreeGrid');
};