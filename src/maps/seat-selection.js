this.default = function () {
    var seatInfo = document.getElementById('selectedseats');
    ej.maps.Maps.Inject(ej.maps.Selection);
    var maps = new ej.maps.Maps({
        // custom code start
        load: function (args) {
            var seattheme = location.hash.split('/')[1];
            seattheme = seattheme ? seattheme : 'Material';
            args.maps.theme = (seattheme.charAt(0).toUpperCase() + seattheme.slice(1));
        },
        // custom code end
        projectionType: 'Equirectangular',
        itemSelection: function (args) {
            if (args.shapeData.fill === 'Orange') {
                args.fill = 'Orange !important';
                document.getElementById(args.target).setAttribute('class', 'ShapeselectionMapStyle');
                return;
            }
            args.fill = 'green';
            var seat = args.shapeData.seatno;
            var connector = ' ';
            if (seatInfo.innerHTML === '') {
                seatInfo.innerHTML = '<span id="seat-info">Seats Selected -</span>';
            }
            else {
                connector = ', ';
            }
            var seatString = '<span class="seats">' + connector + seat + '</span>';
            var seatString1 = ' ' + seat + '</span><span class="seats">,';
            var lastString = '<span id="seat-info">Seats Selected -</span><span class="seats"> ' + seat + '</span>';
            if (seatInfo.innerHTML.indexOf(seatString) === -1 && seatInfo.innerHTML.indexOf(seatString1) === -1 &&
                seatInfo.innerHTML.indexOf(lastString) === -1) {
                seatInfo.innerHTML += '<span class="seats">' + connector + seat + '</span>';
            }
            else {
                seatInfo.innerHTML = seatInfo.innerHTML.replace(seatString, '');
                seatInfo.innerHTML = seatInfo.innerHTML.replace(seatString1, '');
                if (seatInfo.innerHTML === lastString) {
                    seatInfo.innerHTML = '';
                }
            }
        },
        height: '400',
        zoomSettings: {
            enable: false
        },
        layers: [
            {
                geometryType: 'Normal',
                shapeData: new ej.maps.MapAjax('./src/maps/map-data/seat.json'),
                shapeSettings: {
                    colorValuePath: 'fill'
                },
                selectionSettings: {
                    enable: true,
                    opacity: 1,
                    enableMultiSelect: true
                }
            }
        ]
    });
    maps.appendTo('#maps');
    // to clear the selected seats
    document.getElementById('clear-btn').onclick = function () {
        seatInfo.innerHTML = '';
        var selected = document.getElementsByClassName('ShapeselectionMapStyle');
        for (var i = 0, length_1 = selected.length; i < length_1; i++) {
            selected[0].setAttribute('class', '');
        }
    };
};
