    this.default = function () {
        var cardTemplateFn = ej.base.compile(document.getElementById('card_template').innerHTML.trim());
        var card;
        var cardEle;
        var cardObj = window.cardBook;
        var data = [];
        var multiSelectData = [];
        var searchData = [];
        var searchValCount = 0;
        var filterCategory = [{ Name: 'Client-Side', Code: 'client' }, { Name: 'Server-Side', Code: 'server' }, { Name: 'Front-End', Code: 'ui' }];
        var emptyData = true;
        cardRendering(cardObj);
        var multiselectComp = new ej.dropdowns.MultiSelect({
            dataSource: filterCategory,
            fields: { text: 'Name', value: 'Code' },
            placeholder: 'Search by categories',
            select: multiSelectFun,
            removed: multiSelectRemove,
        });
        multiselectComp.appendTo('#local');
        function cardRendering(cardObj) {
            var errorContent = document.querySelector('.tile_layout .row.error');
            if (cardObj.length > 0) {
                errorContent.style.display = 'none';
                cardObj.forEach(function (data, index) {
                    card = cardTemplateFn(data);
                    cardEle = document.getElementById('card_sample_' + (++index));
                    if (cardEle) {
                        cardEle.appendChild(card[0]);
                    }
                });
            }
            else {
                errorContent.style.display = 'flex';
            }
        }
        function destroyAllCard() {
            var cards = document.querySelectorAll('.card-control-section .e-card');
            [].slice.call(cards).forEach(function (el) {
                ej.base.detach(el);
            });
        }
        function multiSelectRemove(e) {
            var cardDa = searchData.length > 0 ? searchData : (multiSelectData.length > 0 ? multiSelectData : cardObj);
            if (multiselectComp.value && multiselectComp.value.length === 0 && searchValCount === 0) {
                multiSelectData = cardDa;
                destroyAllCard();
                cardRendering(cardObj);
            }
            else if (multiselectComp.value.length === 0 && searchValCount > 0) {
                searchFilter(document.getElementById('search_Card').value);
            }
            else if (multiselectComp.value.length === 0) {
                destroyAllCard();
                multiSelectData = cardDa;
                cardRendering(cardDa);
            }
            else {
                var keywords = e.itemData.Code.split(',');
                var dublicate_1;
                keywords.forEach(function (key) {
                    dublicate_1 = new ej.data.DataManager(cardObj).executeLocal(new ej.data.Query().where('cardImage.tag', 'Contains', key, true));
                    dublicate_1.forEach(function (da) {
                        if (cardDa.indexOf(da) !== -1) {
                            cardDa.splice(cardDa.indexOf(da), 1);
                        }
                    });
                    multiSelectData = cardDa;
                });
                destroyAllCard();
                cardRendering(multiSelectData);
            }
        }
        function multiSelectFun(e) {
            var keywords = e.itemData.Code.split(',');
            var dublicate;
            var cardDa = searchData.length > 0 ? searchData : cardObj;
            if (multiselectComp.value && multiselectComp.value.length === 0 && searchValCount === 0) {
                multiSelectData = [];
            }
            keywords.forEach(function (key) {
                dublicate = new ej.data.DataManager(cardDa).executeLocal(new ej.data.Query().where('cardImage.tag', 'Contains', key, true));
                if (dublicate.length === 0) {
                    multiSelectData = [];
                    destroyAllCard();
                    return;
                }
                dublicate.forEach(function (da) {
                    if (multiSelectData.indexOf(da) === -1) {
                        multiSelectData.push(da);
                    }
                });
            });
            destroyAllCard();
            cardRendering(multiSelectData);
        }
        function searchFilter(key) {
            searchValCount = key.length;
            var predicate = new ej.data.Predicate('cardContent', 'Contains', key, true);
            predicate = predicate.or('cardImage.title', 'Contains', key, true).or('header_title', 'Contains', key, true).or('header_subtitle', 'Contains', key, true);
            var cardDa = (multiSelectData.length > 0 && multiselectComp.value.length > 0) ? multiSelectData : cardObj;
            searchData = data = new ej.data.DataManager(cardDa).executeLocal(new ej.data.Query().where(predicate));
            destroyAllCard();
            cardRendering(data);
        }
        document.getElementById('search_Card').onkeyup = function (e) {
            if (e.code === 'Tab' || e.code === 'Escape' || e.code === 'ShiftLeft' || (e.code === 'Backspace' && emptyData)) {
                return;
            }
            var inputVal = e.target.value;
            /*jshint -W030 */
            inputVal.length === 0 ? emptyData = true : emptyData = false;
            searchFilter(inputVal);
        };
    };