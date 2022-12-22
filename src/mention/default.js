
/**
 * Mention default sample
 */

this.default = function () {

    var messageData = new ej.dropdowns.Mention({
        dataSource: window.emailData,
        fields: { text: 'Name' }
    });
    messageData.appendTo('#commentsMention');
};
