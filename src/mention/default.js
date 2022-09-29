
/**
 * Mention default sample
 */

this.default = function () {

    // Initialize Textbox component.
    var emailTextbox = new ej.inputs.TextBox({
        placeholder: 'Type @ and tag the email'
    });
    emailTextbox.appendTo('#emailsMention');

	// Initialize Mention component.
    var emailObj = new ej.dropdowns.Mention({
        dataSource: window.emailData,
        fields: { text: 'EmailId' }
    });
    emailObj.appendTo('#emailsMention');

    var messageData = new ej.dropdowns.Mention({
        dataSource: window.emailData,
        fields: { text: 'Name' }
    });
    messageData.appendTo('#commentsMention');
};
