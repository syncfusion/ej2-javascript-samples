this.default = function() {
    var radioButton = new ej.buttons.RadioButton({ label: 'Credit/Debit Card', name: 'payment', value: 'credit/debit', checked: true });
    radioButton.appendTo('#radio1');

    radioButton = new ej.buttons.RadioButton({ label: 'Net Banking', name: 'payment', value: 'netbanking' });
    radioButton.appendTo('#radio2');

    radioButton = new ej.buttons.RadioButton({ label: 'Cash on Delivery', name: 'payment', value: 'cashondelivery' });
    radioButton.appendTo('#radio3');

    radioButton = new ej.buttons.RadioButton({ label: 'Other Wallets', name: 'payment', value: 'others' });
    radioButton.appendTo('#radio4');
};