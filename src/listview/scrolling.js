/**
 * ListView Scrolling Sample
 */

this.default = function() {
    var foodData = [
        { text: 'Hamburger', id: 'list-01', price: '$10', src: 'src/listview/images/hamburger.jpg', alttext:'hamburger', type: 'non-veg', description: 'A patty of ground beef grilled and placed between two halves of a bun with slices of lettuce and mayonnaise', rating: 3 },
        { text: 'Cheeseburger', id: 'list-02', price: '$12', src: 'src/listview/images/cheeseburger.jpg', alttext:'cheeseburger', type: 'veg', description: 'A hamburger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time', rating: 4 },
        { text: 'Sandwich', id: 'list-03', price: '$8', src: 'src/listview/images/sandwich.jpg', alttext:'sandwich', type: 'veg', description: 'A combination of vegetables, sliced cheese or meat, placed on or between slices of bread with layer of ingredients', rating: 5 },
        { text: 'Milkshake', id: 'list-04', price: '$6', src: 'src/listview/images/milkshake.jpg', alttext:'milkshake', type: 'veg', description: 'A sweet beverage made by blending milk, ice cream, and flavorings or fruit syrup into a thick, sweet, cold mixture', rating: 3 },
        { text: 'Muffin', id: 'list-05', price: '$11', src: 'src/listview/images/muffin.jpg', alttext:'muffin', type: 'veg', description: 'Muffins are single-serving quick breads, which rise with the help of baking soda or baking powder and eggs instead of yeast', rating: 4 },
        { text: 'Pizza', id: 'list-06', price: '$22', src: 'src/listview/images/pizza.jpg', alttext:'pizza', type: 'veg', description: 'A combination of a flattened disk of bread dough with olive oil, oregano, tomato, mozzarella cheese', rating: 3 },
        { text: 'Onion ring', id: 'list-07', price: '$10', src: 'src/listview/images/onionrings.jpg', alttext:'onionrings', type: 'veg', description: 'Consists of a cross-sectional "ring" of onion dipped in bread crumbs and then deep fried; variant is made with onion paste.', rating: 4 },
        { text: 'Sausage', id: 'list-08', price: '$15', src: 'src/listview/images/sausage.jpg', alttext:'sausage', type: 'veg', description: 'Sausage is a combination of minced/ground meat, a binder, water and seasonings, mild but strongly spiced', rating: 5 },
        { text: 'Pretzel', id: 'list-09', price: '$25', src: 'src/listview/images/pretzel.jpg', alttext:'pretzel', type: 'veg', description: 'Made from a rope of dough, the pretzel is briefly boiled and then glazed with egg, salted, and baked', rating: 3 },
        { text: 'Pancake', id: 'list-10', price: '$23', src: 'src/listview/images/pancake.jpg', alttext:'pancake', type: 'veg', description: 'A combination of eggs, milk on a hot surface such as a griddle or frying pan, often frying with oil or butter', rating: 4 },
    ];
    //Define customized template
    function loadTemplate(data) {
        var typeValue = data.type === 'veg' ? '#006400' : '#FF0000';
        var ratingId = ej.base.getUniqueID('rating');
        if (!ej.base.Browser.isDevice) {
            return '<div class="e-list-wrapper" style="border-bottom: inset;">' +
            '<div style="display: flex; justify-content: space-between; align-items: flex-start; white-space: normal; padding: 10px;">' +
                '<div style="display: flex; align-items: center;">' +
                    '<img class="e-avatar" src="'+ data.src +'" alt="'+ data.alttext +'" style="background:#BCBCBC; width: 100px; height: 100px; border-radius: 4px;" />' +
                    '<div style="margin-left: 20px; text-align: left; max-width: 600px; display: flex; flex-direction: column;">' +
                        '<div style="display: flex; align-items: center;">' +
                            '<span style="font-size: 18px; font-weight: 600; padding-bottom: 3px;" class="e-headertext">' + data.text + '</span>' +
                            '<svg width="12" height="12" style="margin-left: 15px; margin-top: -2px;" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">' + 
                            '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 1H10C10.5523 1 11 1.44771 11 2V10C11 10.5523 10.5523 11 10 11H2C1.44771 11 1 10.5523 1 10V2C1 1.44771 1.44771 1 2 1ZM0 2C0 0.895432 0.895432 0 2 0H10C11.1046 0 12 0.895432 12 2V10C12 11.1046 11.1046 12 10 12H2C0.895432 12 0 11.1046 0 10V2ZM4 3C3.44771 3 3 3.44771 3 4V8C3 8.55229 3.44771 9 4 9H8C8.55229 9 9 8.55229 9 8V4C9 3.44771 8.55229 3 8 3H4Z" fill=" ' + typeValue +' "/>' +
                            '</svg>' +
                        '</div>' +
                        '<span style="font-size: 16px; padding-bottom: 3px;">' + data.price + '</span>' +
                        '<div id="id-description" class="e-text-content" style="font-size: 15px;">' + data.description + '</div>' +
                        '<div class="rating-content">' +
                            '<input id="' + ratingId + '" class="ratings">' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
        } else {
            return '<div class="e-list-wrapper e-list-multi-line e-list-avatar" style="padding-left: 122px; padding-right: 1.0666em; border-bottom: inset;">' +
            '<img class="e-avatar" src="'+ data.src +'" alt="'+ data.alttext +'"/>' +
            '<span class="e-list-item-header e-headertext" style="font-size: 14px;">' + data.text +  '</span>' +
            '<svg width="12" height="12" style="right: 10px; margin-top: -15px; position: absolute;" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">' + 
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 1H10C10.5523 1 11 1.44771 11 2V10C11 10.5523 10.5523 11 10 11H2C1.44771 11 1 10.5523 1 10V2C1 1.44771 1.44771 1 2 1ZM0 2C0 0.895432 0.895432 0 2 0H10C11.1046 0 12 0.895432 12 2V10C12 11.1046 11.1046 12 10 12H2C0.895432 12 0 11.1046 0 10V2ZM4 3C3.44771 3 3 3.44771 3 4V8C3 8.55229 3.44771 9 4 9H8C8.55229 9 9 8.55229 9 8V4C9 3.44771 8.55229 3 8 3H4Z" fill=" ' + typeValue +' "/>' +
            '</svg>' +
            '<div style="font-size: 12px;">' + data.price + '</div>' +
            '<span class="e-list-content e-text-overflow" style="font-size: 11px;" >' + data.description + '</span>' +
            '</div>';
        }
    }
    //Initialize ListView component
    var listObj_1 = new ej.lists.ListView({
        dataSource: foodData,
        scroll: onListScroll,
        height: 500,
        template: loadTemplate,
        cssClass: 'e-list-template',
        actionComplete:  onActionComplete,
    });
    //Render initialized ListView component
    listObj_1.appendTo('#list-scrolling-down');
    function onActionComplete() { 
        var ratingElements = listObj_1.element.querySelectorAll('.ratings');
        for (var i = 0; i < ratingElements.length; i++) {
            var ratingObj = new ej.inputs.Rating({
                value: foodData[i].rating,
                showTooltip: false,
                readOnly: true
            });
            ratingObj.appendTo('#' + ratingElements[i].id);
        }
    }

    var foodItems = [
        { text: 'Taco', price: '$15', src: 'src/listview/images/taco.jpg', type: 'veg', description: 'A crispy or soft corn or wheat tortilla that is folded or rolled and stuffed with a mixture of cheese, lettuce, and tomato', rating: 5 },
        { text: 'Hot dog', price: '$50', src: 'src/listview/images/hotdog.jpg', type: 'non-veg', description: 'A dish consisting of a grilled or steamed sausage served in the slit of a partially sliced bun also used as a wiener', rating: 3 },
        { text: 'Fried chicken', price: '$19', src: 'src/listview/images/friedchicken.jpg', type: 'non-veg', description: 'Chicken pieces coated with seasoned flour or batter and pan-fried, deep fried, pressure fried, or air fried', rating: 4 },
        { text: 'Donuts', price: '$5', src: 'src/listview/images/donuts.jpg', type: 'veg', description: 'A kind of ring-shaped snack food popular in many countries, which are usually deep fried from flour doughs', rating: 3 },
        { text: 'Baguette', price: '$7', src: 'src/listview/images/baguette.jpg', type: 'veg', description: 'French bread shaped like a long, thin loaf with a crisp and crunchy crust made using flour, yeast and water', rating: 4 },
        { text: 'Soft drink', price: '$3', src: 'src/listview/images/softdrink.jpg', type: 'veg', description: 'Flavored drinks usually with nutritive and/or intense sweeteners with other permitted food additives', rating: 5 },
        { text: 'Bacon', price: '$12', src: 'src/listview/images/bacon.jpg', type: 'non-veg', description: 'Salt-cured pork made from various cuts, typically the belly or less fatty parts of the back eaten as a side dish', rating: 3 },
        { text: 'Chips', price: '$13', src: 'src/listview/images/chips.jpg', type: 'veg', description: 'A small usually thin and flat piece (as of wood or stone) cut, struck, or flaked off also served as an appetizer', rating: 4 },
        { text: 'Noodles', price: '$11', src: 'src/listview/images/noodles.jpg', type: 'veg', description: 'A cooked egg-and-flour paste, generally distinguished from pasta by its elongated ribbonlike form', rating: 3 },
    ];

    function onListScroll(args) {
        var newData = [];
        var elementsCount = listObj_1.element.querySelectorAll('.ratings');
        var elementCountsLength = elementsCount.length;
        if (args.scrollDirection === "Bottom") {
            if (args.distanceY < 100) {
                for (var i = 0; i <= foodItems.length - 1; i++) {
                    var newId = ej.base.getUniqueID('list');
                    newData.push({ text: foodItems[i].text, id: newId, price: foodItems[i].price, src: foodItems[i].src, description: foodItems[i].description, type: foodItems[i].type });
                }
                listObj_1.addItem(newData);
                var newElements = listObj_1.element.querySelectorAll('.ratings');
                for (var j = elementCountsLength; j < newElements.length; j++) {
                    var ratingObj_1 = new ej.inputs.Rating({
                        value: foodItems[j - elementCountsLength].rating,
                        showTooltip: false,
                        readOnly: true
                    });
                    ratingObj_1.appendTo('#' + newElements[j].id);
                }
            }
        }
    }
};
