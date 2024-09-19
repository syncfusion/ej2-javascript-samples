/**
 * Sales map sample
 */
this.default = function () {
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var salesmap = location.hash.split('/')[1];
            salesmap = salesmap ? salesmap : 'Material';
            args.maps.theme = (salesmap.charAt(0).toUpperCase() +
            salesmap.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-high/i, 'High').replace(/5.3/i, '5');
        },
        // custom code end
        zoomSettings: {
            enable: true,
            mouseWheelZoom: false,
            pinchZooming: false
        },
        useGroupingSeparator: true,
        format: 'n',
        titleSettings: {
            text: 'Sales details of products in various countries',
            textStyle: {
                size: '16px',
                fontFamily: 'Segeo UI'
            }
        },
		tooltipDisplayMode: 'Click',
        layers: [
            {
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/world-map.json'),
                dataSource: window.salesmap,
                shapeSettings: {
                    fill: '#C1DFF5'
                },
                markerClusterSettings: {
                    allowClustering: true,
                    allowClusterExpand: true,
                    shape: 'Image',
                    height: 40,
                    width: 40,
                    labelStyle: { color: 'white' },
                    imageUrl: 'src/maps/images/cluster.svg'
                },
                markerSettings: [
                    {
                        dataSource: window.salesmap,
                        visible: true,
                        animationDuration: 0,
                        height: 15,
                        width: 15,
                        shape: 'Image',
                        imageUrl: 'src/maps/images/ballon.png',
                        tooltipSettings: {
                            format: '<b>Name</b> : ${name}<br><b>Product</b> : ${product}<br><b>Total value</b> : ${worth}',
                            visible: true,
                            valuePath: 'name',
                            textStyle: { fontFamily: 'Segeo UI' }
                        }
                    },
                ]
            }
        ]
    });
    maps.appendTo('#container');
};