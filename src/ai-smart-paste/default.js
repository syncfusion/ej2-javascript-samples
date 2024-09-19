
this.default = function () {
    /**
     * Smart Paste Button Sample
     */
    let inputobj1 = new ej.inputs.TextBox({
        placeholder: "What's the bug ?",
        floatLabelType: "Never",
    });
    inputobj1.appendTo("#bug-name");

    let inputobj2 = new ej.inputs.TextBox({
        placeholder: "Who is the reporter ?",
        floatLabelType: "Never",
    });
    inputobj2.appendTo("#reporter-name");

    let inputobj3 = new ej.inputs.TextBox({
        placeholder: "When it is reported ?",
        floatLabelType: "Never",
    });
    inputobj3.appendTo("#submitted-date");

    let textArea1 = new ej.inputs.TextArea({
        placeholder: "Describe a little about the bug.",
        rows: 2,
        floatLabelType: "Never",
    });
    textArea1.appendTo("#bug-description");

    let textArea2 = new ej.inputs.TextArea({
        placeholder: "Enter the repro steps here..",
        cols: 30,
        rows: 4,
        floatLabelType: "Never",
    });
    textArea2.appendTo("#reproduce-steps");

    let radioButton = new ej.buttons.RadioButton({
        label: "Low",
        name: "bug-priority",
        value: "low"
    });
    radioButton.appendTo("#radio1");

    radioButton = new ej.buttons.RadioButton({
        label: "Medium",
        name: "bug-priority",
        value: "medium",
        checked: true
    });
    radioButton.appendTo("#radio2");

    radioButton = new ej.buttons.RadioButton({
        label: "High",
        name: "bug-priority",
        value: "high",
    });
    radioButton.appendTo("#radio3");

    const browserData = [
        'Chrome', 'Firefox', 'Safari'
    ];
    let comboBoxObj = new ej.dropdowns.ComboBox({
        popupHeight: '230px',
        dataSource: browserData,
        placeholder: 'Choose the browser',
    });
    comboBoxObj.appendTo('#browser');

    // Initialize Button component.
    let resetButton = new ej.buttons.Button({
        content: 'Reset',
        iconCss: "e-icons e-reset",
    });
    // Render initialized Button.
    resetButton.appendTo('#reset');


    const serverAIRequest = async (chatParameters) => {
        let output = '';
        try {
            output = await AzureAIRequest(chatParameters);
            output = output.replace('END_RESPONSE', '')
        } catch (error) {
            console.error("Error:", error);
        }
        return output;
    };

    // Initialize Button component.
    let button = new ej.buttons.SmartPasteButton({
        content: 'Smart Paste',
        iconCss: "e-icons e-paste",
        aiAssistHandler: serverAIRequest
    });
    // Render initialized Button.
    button.appendTo('#smart-paste');

    // Property Pane Code
    let bugPresets = [
        "Issue with the dropdown menu",
        "Trouble logging into the website",
        "Search functionality not working",
        "Images missing on the product page"
    ];

    let bugReports = [
        `Hi, this is Alice. On July 3rd, I've come across a bug where the dropdown menu in the navigation bar doesn't close after selecting an item. I just navigated to the homepage, opened the dropdown menu in the navigation bar, clicked an item in the dropdown and then the issue occurred which happens only on Chrome. Though this doesn't seem like a serious/important bug, kindly look into it and resolve it. Regards, J Alice Abraham`,
        `Hey team, On May 2nd, K John Doe reported an issue where the login page refreshes instead of logging in when the user clicks the login button. This problem prevents users from accessing their accounts, making it a critical issue that needs immediate attention. The issue has been observed across all major browsers. To reproduce the issue, open any browser and navigate to the website's login page. Enter a valid username and password, then click the Login button.`,
        `Hi, Whenever I type something in the search bar and hit search, it doesn't return any results, even for items I know exist. This problem was noticed by Jane Smith on July 5th in FireFox browser. You can repro the issue by opening the site in the Firefox browser and navigate to the search bar. Type in any search term, including items that are known to exist, and click the search button. The search functionality fails to return any results, displaying an empty result set even for valid queries. This is quite important, but not urgent. Please look into it. Regards, M William Marker`,
        `Hello, When I selected the category option on the landing page and chose the electronics category, the images were missing on the product page. The placeholders are there, but no actual images are loading. This happens on all browsers. I reported this on July 3rd. It's not urgent, but it does affect the user experience. Regards, L Mike Johnson`
    ];

    let copyContent = document.getElementById('bug-report-text');
    if (copyContent) {
        copyContent.innerHTML = bugReports[0];
    }

    let copyButton = new ej.buttons.Button({
        content: 'Copy',
        iconCss: "e-icons e-copy"
    });
    copyButton.appendTo('#copy-btn');

    if (copyButton.element) {
        copyButton.element.onclick = async () => {
            await navigator.clipboard.writeText(copyContent.innerHTML);
            copyButton.content = "Copied";
            copyButton.iconCss = "e-icons e-check";
        }
    }

    let chipList = new ej.buttons.ChipList(
        {
            chips: bugPresets,
            selection: 'Single',
            selectedChips: [0],
            click: (e) => {
                copyContent.innerHTML = bugReports[e.index];
                chipList.selectedChips = e.index;
                copyButton.content = "Copy";
                copyButton.iconCss = "e-icons e-copy";
            }
        },
        '#chip-choice');
};