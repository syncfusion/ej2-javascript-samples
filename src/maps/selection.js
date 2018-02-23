/**
 * Maps selection sample
 */
this.default = function () {
    
    var maps = new ej.maps.Maps({
        load: function (args) {
            var theme = location.hash.split('/')[1];
            theme = theme ? theme : 'Material';
            args.maps.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));
        },
        itemSelection: function (args) {
            if (args.shapeData !== ej.base.isNullOrUndefined) {
                var matched = navigator.userAgent;
                var browser = matched.toLowerCase();
                var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
                if (isIE11) {
                    browser = 'msie';
                }
                var object = args.data;
                var popup = document.getElementById('closepopup');
                var closebutton = document.getElementById('closebutton');
                var winner = document.getElementById('winner');
                var state = document.getElementById('state');
                var trumpvote = document.getElementById('trumpvotes');
                var clintonvote = document.getElementById('clintonvotes');
                popup.style.display = 'block';
                closebutton.style.display = 'block';
                closebutton.style.left = '206px';
                closebutton.style.top = '-15px';
                closebutton.onclick = function () {
                    var popup = document.getElementById('closepopup');
                    var closebutton = document.getElementById('closebutton');
                    popup.style.display = 'none';
                    closebutton.style.display = 'none';
                };
                if (browser !== 'mozilla') {
                    state.innerText = args.data.State;
                    winner.innerText = args.data.Candidate;
                    trumpvote.innerText = args.data.Trump + '%';
                    clintonvote.innerText = args.data.Clinton + '%';
                }
                else {
                    state.textContent = args.data.State;
                    winner.textContent = args.data.Candidate;
                    trumpvote.textContent = args.data.Trump + '%';
                    clintonvote.textContent = args.data.Clinton + '%';
                }
            }
        },
        titleSettings: {
            text: 'USA Election Results - 2016',
            textStyle: {
                size: '16px'
            }
        },
        legendSettings: {
            visible: true,
            mode: 'Interactive',
            position: 'Top',
            width: '80%',
                textStyle: {
                    fontWeight: '400',
                    size: '14px'
                }
        },
        zoomSettings: {
            enable: false
        },
       
        layers: [
            {
                shapeData: window.USA,
                shapePropertyPath: 'name',
                shapeDataPath: 'State',
                dataSource: window.electionData,
                tooltipSettings: {
                    visible: true,
                    valuePath: 'State'
                },
                highlightSettings: {
                    enable: true,
                    fill: '#A3B0D0'
                },
                selectionSettings: {
                    enable: true,
                    fill: '#4C515B ',
                    opacity: 1
                },
                shapeSettings: {
                    colorValuePath: 'Candidate',
                    colorMapping: [
                        {
                            value: 'Trump', color: '#D84444'
                        },
                        {
                            value: 'Clinton', color: '#316DB5'
                        }
                    ]
                }
            }
        ]
    });
    maps.appendTo('#container');
};