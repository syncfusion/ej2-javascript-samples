this.default = function () {

    function productColumnTemplate(props) {
        return (
            '<div class="product-cell"><img src="src/grid/images/products/' +
            props.ProductName +
            '.png" alt="' +
            props.ProductName +
            '" class="product-image" /><div class="product-copy"><div class="product-name">' +
            props.ProductName +
            '</div><div class="product-meta"><span class="product-description">' +
            props.Description +
            '</span><span class="product-sku">SKU: ' +
            props.SKU +
            '</span></div></div></div>'
        );
    }

    function salesColumnTemplate(props) {
        var trend =
            ((props.SalesMonth3 - props.SalesMonth2) / Math.max(props.SalesMonth2, 1)) *
            100;
        return (
            '<div class="sales-cell"><div class="sales-number">' +
            props.SalesMonth3 +
            '</div><div class="sales-growth ' +
            (trend >= 0 ? 'positive' : 'negative') +
            '">' +
            (trend >= 0 ? '↑' : '↓') +
            ' ' +
            Math.abs(trend).toFixed(1) +
            '%</div></div>'
        );
    }

    function statusColumnTemplate(props) {
        var badgeClass;
        if (props.Status === 'In Stock') {
            badgeClass = 'status-badge-success';
        } else {
            badgeClass = 'status-badge-error';
        }
        return (
            '<div class="status-cell"><span class="status-badge ' +
            badgeClass +
            '">' +
            props.Status +
            '</span><div class="status-units">' +
            props.Units +
            ' units</div></div>'
        );
    }

    function detailTemplate(props) {
        var discount = Math.round(
            ((props.OriginalPrice - props.Price) / props.OriginalPrice) * 100
        );
        var highlights = (props.Highlights || [])
            .map(function (item) {
                return '<li><span class="bullet"></span>' + item + '</li>';
            })
            .join('');

        var specifications = Object.keys(props.Specifications || {})
            .map(function (key) {
                return (
                    '<div class="info-row"><span class="spec-title">' +
                    key +
                    '</span><span class="spec">' +
                    String(props.Specifications[key]) +
                    '</span></div>'
                );
            })
            .join('');

        return (
            '<div class="detail-page"><div class="detail-top">' +
            '<div class="product-detail-wrapper"><div class="detail-grid">' +
            '<div class="e-card"><div class="e-card-header"><div class="e-card-header-caption">' +
            '<div class="e-card-title">Product Description</div></div></div>' +
            '<div class="e-card-content"><div class="product-description-text">' +
            props.ProductDescription +
            '</div><h4 class="sub-title">Key Highlights</h4><ul class="highlight-list">' +
            highlights +
            '</ul></div></div><div class="e-card"><div class="e-card-header"><div class="e-card-header-caption">' +
            '<div class="e-card-title">Technical Specifications</div></div></div><div class="e-card-content">' +
            specifications +
            '</div></div><div class="e-card"><div class="e-card-header"><div class="e-card-header-caption">' +
            '<div class="e-card-title">Pricing Details</div></div></div>' +
            '<div class="e-card-content"><div class="info-row"><span>Current Price</span><span class="current-price">$' +
            props.Price.toLocaleString() +
            '</span></div><div class="info-row"><span>Original Price</span><span class="original-price">$' +
            props.OriginalPrice.toLocaleString() +
            '</span></div><div class="info-row"><span>Discount</span><span class="discount-price">' +
            discount +
            '%</span></div><div class="info-row"><span>Cost Price</span><span class="cost-price">$' +
            props.CostPrice.toLocaleString() +
            '</span></div><div class="info-row"><span>Profit Margin</span><span class="profit-price">' +
            props.ProfitMargin +
            '</span></div></div></div></div></div></div>'
        );
    }

    var grid = new ej.grids.Grid({
        dataSource: window.productDetail,
        height: 520,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        detailTemplate: detailTemplate,
        columns: [
            {
                field: 'ProductID',
                headerText: 'ID',
                width: 110,
                type: 'number',
                isPrimaryKey: true,
                textAlign: 'Left',
            },
            {
                field: 'ProductName',
                headerText: 'Product',
                width: 150,
                template: productColumnTemplate,
                textAlign: 'Center',
            },
            {
                field: 'Category',
                headerText: 'Category',
                width: 110,
                textAlign: 'Center',
            },
            {
                headerText: 'Sales',
                textAlign: 'Center',
                template: salesColumnTemplate,
                width: 90,
            },
            {
                field: 'Price',
                headerText: 'Price',
                width: 80,
                textAlign: 'Right',
                format: 'C2',
            },
            {
                field: 'Status',
                headerText: 'Status',
                width: 120,
                textAlign: 'Center',
                template: statusColumnTemplate,
            },
        ]
    });

    grid.appendTo('#Detail-Grid');
};