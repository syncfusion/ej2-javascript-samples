this.default = function () {
    /**
     * Sentiment Analysis Sample
     */
    let isAiChecked = false;
    let dataSource = window.pizzaData;
    let sentiment = new ej.splitbuttons.ProgressButton({
        content: 'Check Customer Sentiments',
        enableProgress: false,
        begin: () => {
            sentiment.content = "Progressing...";
            sentiment.dataBind();
            const checkTasksGenerated = () => {
                if (isAiChecked) {
                    sentiment.content = "Check Customer Sentiments";
                    sentiment.dataBind();
                    isAiChecked = false;
                } else {
                    setTimeout(checkTasksGenerated, 100);
                }
            };
            checkTasksGenerated();
        }
    });
    sentiment.appendTo('#sentiment');

    if (sentiment.element) {
        sentiment.element.onclick = () => {
            isAiChecked = false;
            getScore();
        }

        let toast = new ej.notifications.Toast({
            position: { X: 'Right', Y: 'Top' },
            showCloseButton: true,
            target: '#Kanban'
        });
        toast.appendTo('#toast');

        function getScore() {
            try {
                let pizzaJson = JSON.stringify(dataSource);
                let description = "Provide a SentimentScore out of 5 (whole numbers only) based on the Feedback. If the feedback is null, do not give a SentimentScore. Use the dataset provided below to make recommendations. NOTE: Return the data in JSON format with all fields included, and return only JSON data, no explanatory text. Don't change the dataset formart. Just update the sentiment scrore given dataset field (fieldName: SentimentScore)" + pizzaJson;
                getResponseFromOpenAI(description).then((response) => {
                    try {
                        const jsonArrayPattern = /\[\s*{[\s\S]*?}\s*\]/;
                        let result = response.match(jsonArrayPattern);
                        if (result && result[0]) {
                            let data = result[0].replace("```json", "").replace("```", "").replace("\r", "").replace("\n", "").replace("\t", "").trim();
                            dataSource = JSON.parse(data);
                            dataSource.forEach(item => {
                                if (item.SentimentScore !== undefined) {
                                    if (item.SentimentScore > 0 && item.SentimentScore <= 2) {
                                        item.Emoji = "😢";
                                    } else if (item.SentimentScore > 3 && item.SentimentScore <= 5) {
                                        item.Emoji = "😀";
                                    } else if (item.SentimentScore === 3) {
                                        item.Emoji = "😐";
                                    }
                                }
                            });
                            kanbanObj.dataSource = dataSource;
                            kanbanObj.dataBind();
                            isAiChecked = true;
                        } else {
                            isAiChecked = true;
                            toast.content = "An error occurred during the AI process, Please try again."
                            toast.show();
                        }
                    } catch {
                        isAiChecked = true;
                        toast.content = "An error occurred during the AI process, Please try again."
                        toast.show();
                    }
                });
            } catch {
                isAiChecked = true;
                toast.content = "An error occurred during the AI process, Please try again."
                toast.show();
            }
        }

        async function getResponseFromOpenAI(promptQuery) {
            const content = await OpenAiModel(promptQuery);
            return content ? content : '';
        }

        let kanbanObj = new ej.kanban.Kanban({
            dataSource: dataSource,
            keyField: 'Category',
            columns: [
                { headerText: 'Menu', keyField: 'Menu' },
                { headerText: 'Order', keyField: 'Order' },
                { headerText: 'Ready to Serve', keyField: 'Ready to Serve' },
                { headerText: 'Delivered', keyField: 'Delivered,Served' }
            ],
            cardSettings: {
                headerField: 'Id',
                template: '#cardTemplate'
            },
            dialogSettings: {
                template: '#dialogTemplate'
            },
            dialogClose: onDialogClose,
            dialogOpen: onDialogOpen

        });
        let categoryData = ['Menu', 'Order', 'Ready to Serve', 'Delivered', 'Served'];
        kanbanObj.appendTo('#Kanban'); //Render initialized Kanban control
        function onDialogOpen(args) {
            if (args.requestType !== 'Delete') {
                let curData = args.data;
                let filledTextBox = new ej.inputs.TextBox({});
                filledTextBox.appendTo(args.element?.querySelector('#Id'));
                let numericObj = new ej.inputs.NumericTextBox({
                    value: curData.Estimate, placeholder: 'Estimate'
                });
                numericObj.appendTo(args.element?.querySelector('#Estimate'));

                let categoryDropObj = new ej.dropdowns.DropDownList({
                    value: curData.Category, popupHeight: '300px',
                    dataSource: categoryData, fields: { text: 'Category', value: 'Category' }, placeholder: 'Category'
                });
                categoryDropObj.appendTo(args.element?.querySelector('#Category'));

                let titleObj = new ej.inputs.TextBox({
                    placeholder: 'Title',

                });
                titleObj.appendTo(args.element?.querySelector('#Title'));

                let sizeObj = new ej.inputs.TextBox({
                    placeholder: 'Size',
                });
                sizeObj.appendTo(args.element?.querySelector('#Size'));

                let textareaObj = new ej.inputs.TextBox({
                    placeholder: 'Description',
                    multiline: true
                });
                textareaObj.appendTo(args.element?.querySelector('#Description'));

                let datepicker = new ej.calendars.DatePicker({
                    value: curData.Date,
                    format: 'MM/dd/yyyy',
                });
                datepicker.appendTo(args.element?.querySelector('#datepicker'));

                let feedback = new ej.inputs.TextBox({
                    placeholder: 'Feedback',
                    multiline: true
                });
                feedback.appendTo(args.element?.querySelector('#feedback'));
            }
        }
        function onDialogClose(args) {
            if (args.element?.querySelector('#datepicker')) {
                args.data.Date = (args.element?.querySelector('#datepicker')).ej2_instances[0].value.toLocaleString('es-PR').split(",")[0];
            }
        }
    }
};