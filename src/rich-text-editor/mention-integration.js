/**
 * Rich Text Editor mention integration sample
 */
 
 this.default = function() {
 
    window.emailData = [
        { Name: "Selma Rose", Status: "active", Eimg: "2", EmailId: "selma@gmail.com" },
        { Name: "Maria", Status: "active", Eimg: "1", EmailId: "maria@gmail.com" },
        { Name: "Russo Kay", Status: "busy", Eimg: "8", EmailId: "russo@gmail.com" },
        { Name: "Camden Kate", Status: "active", Eimg: "9", EmailId: "camden@gmail.com" },
        { Name: "Robert", Status: "busy", Eimg: "dp", EmailId: "robert@gmail.com" },
        { Name: "Garth", Status: "active", Eimg: "7", EmailId: "garth@gmail.com" },
        { Name: "Andrew James", Status: "away", Eimg: "pic04", EmailId: "noah@gmail.com" },
        { Name: "Olivia", Status: "busy", Eimg: "5", EmailId: "olivia@gmail.com" },
        { Name: "Sophia", Status: "away", Eimg: "6", EmailId: "sophia@gmail.com" },
        { Name: "Margaret", Status: "active", Eimg: "3", EmailId: "margaret@gmail.com" },
        { Name: "Ursula Ann", Status: "active", Eimg: "dp", EmailId: "ursula@gmail.com" },
        { Name: "Laura Grace", Status: "away", Eimg: "4", EmailId: "laura@gmail.com" },
        { Name: "Albert", Status: "active", Eimg: "pic03", EmailId: "albert@gmail.com" },
        { Name: "William", Status: "away", Eimg: "10", EmailId: "william@gmail.com" }
    ];
    
     var emailObj;
     var defaultRTE = new ej.richtexteditor.RichTextEditor({
         placeholder: 'Type @ and tag the name',
         actionBegin: function (args) {
             if (args.requestType === 'EnterAction' && emailObj.element.classList.contains('e-popup-open')) {
                 args.cancel = true;
             }
         }
      });
     defaultRTE.appendTo('#mention_integration');
 
     // Initialize Mention component.
         emailObj = new ej.dropdowns.Mention({
         dataSource: emailData,
         fields: { text: 'Name' },
         suggestionCount: 8,
         displayTemplate: '<a href=mailto:${EmailId} title=${EmailId}>@${Name}</a>',
         itemTemplate: '<table><tr><td><div id="mention-TemplateList"><img class="mentionEmpImage" src="src/rich-text-editor/images/${Eimg}.png" alt="employee" /><span class="e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom ${Status}"></span></div></td><td><span class="person">${Name}</span><span class="email">${EmailId}</span></td</tr></table>',
         popupWidth: '250px',
         popupHeight: '200px',
         target: defaultRTE.inputElement,
         allowSpaces: true,
         suffixText: '&nbsp;'
     });
     emailObj.appendTo('#mentionEditor');
 };
