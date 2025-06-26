/* jshint esversion: 6 */
this.default = function () {
    var foodorderDetails = [];
    var cartCount = 0;
    var treegridObj = new ej.treegrid.TreeGrid({
        dataSource: window.foodMenu,
        idMapping: 'FoodId',
        parentIdMapping: 'CategoryId',
        treeColumnIndex: 0,
        rowTemplate: '#rowTemplate',
        allowKeyboard: false,
        toolbar: [
            {
                template: `
                    <div style="display:flex;align-items:center;cursor:auto;">
                        <img src="src/tree-grid/images/male.png" alt="avatar" style="width:40px;height:40px;border-radius:50%;margin-right:14px;">
                        <div>
                            <div style="font-size:20px;font-weight:600;line-height:1.2;">Hi, <span style="color:#ff9800;font-weight:700;">Susan</span></div>
                            <div style="font-size:13px;color:#888;line-height:1.2;">Morrisville, USA</div>
                        </div>
                    </div>
                    `,
                align: 'Left',
                id: 'customerDetails'
            },
            { template: '<div class="e-btn-group e-custom-button badge-block"><button id="CartUpdate" class="e-btn">VIEW CART<span id="cartbadge" class="e-cart-badge e-badge e-badge-primary e-badge-notification e-badge-overlap">0</span></button></div>', id: 'cartButton', align: 'Right' }
        ],
        height: 400,
        columns: [
            { field: 'FoodName', headerText: 'Explore Our Menu', width: 150 },
        ],
        dataBound: function (args) {
            this.grid.emptyRecordTemplate = "#emptytemplate";
        },
        rowDataBound: function (args) {
            const { CategoryId, FoodName } = args.data;
            if (CategoryId) {
                const foodItem = foodorderDetails.find(item =>
                    item.foodName && FoodName &&
                    item.foodName.toLowerCase() === FoodName.toLowerCase()
                );

                new ej.inputs.NumericTextBox({
                    value: (foodItem && foodItem.count) || 0,
                    min: 0,
                    max: 10,
                    step: 1,
                    format: 'N',
                    width: '110px',
                    change: foodCountChangeFn
                }).appendTo(args.row.querySelector('.resmenu-food-count'));
            }
        }
    });
    treegridObj.appendTo('#TreeGrid');
    window.chiptags = function (ingredients) {
        var chipElement = document.createElement('div');
        var chipList = new ej.buttons.ChipList({ chips: ingredients, cssClass: 'e-outline' }, chipElement);
        chipElement.id = 'ingredientsList';
        return chipList.element.outerHTML;
    };
    function foodCountChangeFn(args) {
        if (args.event == undefined || null == args.event.srcElement) {
            return;
        }
        var currentRow = args.event.srcElement.closest("tr");
        var foodName = currentRow.querySelector(".resmenu-foodname").textContent;
        var price = parseFloat(currentRow.querySelector(".resmenu-price").textContent.replace(/[^0-9.]/g, ""));
        var count = args.value;
        if (args.previousValue < args.value) {
            cartCount += (count - (args.previousValue || 0));
        } else if (args.previousValue > args.value) {
            cartCount -= (args.previousValue || 0) - count;
        }
        document.getElementsByClassName('e-cart-badge')[0].textContent = cartCount;
        var existingFood = foodorderDetails.find(function (item) { return item.foodName === foodName; });
        if (existingFood) {
            existingFood.count = count;
            existingFood.price = price;
        } else {
            foodorderDetails.push({
                foodName: foodName,
                price: price,
                count: count
            });
        }
    }
    var treegrid = document.querySelector('#TreeGrid').ej2_instances[0];
    var dishNames = Array.from(new Set(window.foodMenu.map(function (item) { return item.FoodName; })));
    var autoComplete = new ej.dropdowns.AutoComplete({
        dataSource: dishNames,
        placeholder: 'Search for dishes',
        width: 800,
        highlight: true,
        filterType: 'Contains',
        change: function (args) {
            var value = args.value ? args.value.toLowerCase() : '';
            var searchedData = window.foodMenu.filter(function (item) {
                return item.FoodName.toLowerCase().includes(value) ||
                    item.FoodCategory.toLowerCase().includes(value) ||
                    !item.CategoryId;
            });
            searchedData.forEach(function (parent) {
                if (!parent.CategoryId) {
                    var childItems = searchedData.filter(function (item) { return item.CategoryId === parent.FoodId; });
                    parent.vegCount = childItems.filter(function (item) { return item.FoodType === 'Veg'; }).length;
                    parent.nonvegCount = childItems.filter(function (item) { return item.FoodType === 'Non-veg'; }).length;
                }
            });
            searchedData = searchedData.filter(function (item) {
                var foodcount = item.vegCount + item.nonvegCount;
                return (foodcount === 0 && item.CategoryId) || (foodcount > 0 && !item.CategoryId);
            });
            treegrid.dataSource = searchedData;
        }
    });
    autoComplete.appendTo('#search-autocomplete');
    window.iterateFootType = function (vegCount, nonvegCount) {
        var sumOfFood = 0;
        if (vegCount > 0) {
            sumOfFood += vegCount;
        }
        if (nonvegCount > 0) {
            sumOfFood += nonvegCount;
        }
        return sumOfFood;
    };
    function getCartTableHtml(cartItems) {
        if (!cartItems.length) {
            return '<div style="padding:20px;text-align:center;">No items in cart.</div>';
        }
        var rows = cartItems.filter(i => i.count > 0).map(item => `
        <tr>
            <td>${item.foodName}</td>
            <td>$${item.price}</td>
            <td style="text-align:center;">${item.count}</td>
            <td style="text-align:right;">$${(item.price * item.count).toFixed(2)}</td>
        </tr>
    `).join('');
        var total = Math.round(cartItems.reduce((sum, item) => sum + (item.price * item.count), 0));
        var delivery = 3.6;
        var gst = Math.round(total * 0.12 * 100) / 100;
        var toPay = Math.round((total + delivery + gst) * 100) / 100;
        return `
        <div class="sample-order">
            <div  class="resmenu-order-no"><span > Order No: </span>${Math.floor(Math.random() * (99 - 10 + 1)) + 100}</div>
            <div  ><span class="resmenu-order-date">Date: </span>${new Date().toLocaleDateString()}</div>
        </div>
        <div id="dialog-container">
      
            <div style="max-height:220px;overflow-y:auto;margin-bottom:12px;">
            
            <table style="width:100%;border-collapse:collapse;">
                <thead>
                    <tr style="border-bottom: 2px solid #e0e0e0;">
                        <th style="text-align:left;">Dish</th>
                        <th style="text-align:left;">Price</th>
                        <th style="text-align:center;">Qty</th>
                        <th style="text-align:right;">Total</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
            </div>
            <div style="border-top:2px solid #eee;padding-top:12px;">
                <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                    <span>Item Total</span><span>$${total}</span>
                </div>
                <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                    <span>Delivery Fee</span><span>$${delivery}</span>
                </div>
                <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                    <span>TAX & Other Charges</span><span>$${gst}</span>
                </div>
                <div style="border-top:2px solid #beb5b5;display:flex;justify-content:space-between;font-weight:bold;font-size:18px;margin-top:10px;">
                    <span>TO PAY</span><span>$${toPay}</span>
                </div>
            </div>
            <div class="resmenu-thank-note">
            <div >Thank you for your order!</div>
            </div>
        </div>
    `;
    }
    var BillNo = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    var cartDialog = new ej.popups.Dialog({
        header: "Bill Summary",
        content: '',
        visible: false,
        width: '400px',
        showCloseIcon: true,
        isModal: true,
        animationSettings: { effect: 'Zoom' },
        buttons: [
            {
                click: function () { clearCart(); },
                buttonModel: { content: 'Cancel', cssClass: 'e-danger' }
            },
            {
                click: function () { printCartDialogContent(); },
                buttonModel: { content: 'Print', isPrimary: true }
            }
        ],
        target: '#TreeGrid',
        beforeOpen: function (args) {
            var itemsInCart = foodorderDetails.filter(function (item) { return item.count > 0; });
            if (itemsInCart.length < 4) {
                args.maxHeight = '500px';
            }
            else {
                args.maxHeight = '600px';
            }
            if (itemsInCart.length === 0) {
                cartDialog.buttons[1].buttonModel.disabled = true;
                cartDialog.refresh();
            }
            else {
                cartDialog.buttons[1].buttonModel.disabled = false;
                cartDialog.refresh();
            }
        }
    });

    function clearCart() {
        foodorderDetails.forEach(function (item) { item.count = 0; });
        cartCount = 0;
        document.getElementsByClassName('e-cart-badge')[0].textContent = cartCount;
        var numericBoxes = document.querySelectorAll('.resmenu-food-count.e-numerictextbox');
        numericBoxes.forEach(function (box) {
            var instance = box.ej2_instances && box.ej2_instances[0];
            if (instance) instance.value = 0;
        });
        cartDialog.content = getCartTableHtml([]);
        cartDialog.hide();
    }
    function printCartDialogContent() {
        var treeGridElement = document.getElementById('TreeGrid');
        var rect = treeGridElement.getBoundingClientRect();
        var windowWidth = 400;
        var windowHeight = 600;
        var leftPosition = rect.left + window.scrollX + (rect.width / 2) - (windowWidth / 2);
        var topPosition = rect.top + window.scrollY + (rect.height / 2) - (windowHeight / 2);
        var printContents = document.querySelector('#cartDialog .e-dlg-content').innerHTML;
        var printWindow = window.open('', '', `height=${windowHeight},width=${windowWidth},left=${leftPosition},top=${topPosition}`);
        printWindow.document.write(printContents);
        printWindow.focus();
        printWindow.addEventListener('afterprint', function (args) {
            printWindow.close();
            clearCart();
        });
        printWindow.print();
    }
    cartDialog.appendTo('#cartDialog');
    document.getElementById('CartUpdate').onclick = function () {
        var itemsInCart = foodorderDetails.filter(function (item) { return item.count > 0; });
        cartDialog.content = getCartTableHtml(itemsInCart);
        cartDialog.show();
    };
};