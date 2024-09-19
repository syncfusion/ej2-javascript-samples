this.default = function () {
    /**
     * AI Task Recommendation Sample
     */
    ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Selection, ej.grids.Edit, ej.grids.Toolbar);
    ej.dropdowns.MultiSelect.Inject(ej.dropdowns.CheckBoxSelection);

    let smartSuggestion = [];
    let tasks = [];
    let projectDetailsDialog;
    let projectDetailsDialogCreated = false;
    let showSprintPlanDetailsCreated = false;
    let isGeneratedProjectTasks = false;
    let aiResultUpdated = false;
    let taskCount;
    let projectDetails;
    let checkList;
    const expectedFormat = `[{'Id': 'TASK1', 'Title': 'Crunches x50', 'Status': 'Open', 'Color': 'black', 'Description': 'Perform 50 crunches for core strengthening', 'StoryPoints': 3, 'Assignee': 'Alice Johnson'}, {'Id': 'TASK2', 'Title': 'Plank x2 minutes', 'Status': 'Open', 'Color': 'black', 'Description': 'Hold a plank position for 2 minutes for core and upper body strength', 'StoryPoints': 5, 'Assignee': 'Alice Johnson'}, {'Id': 'TASK3', 'Title': 'Russian Twists x40', 'Status': 'Open', 'Color': 'black', 'Description': 'Complete 40 reps of Russian twists for oblique muscle development', 'StoryPoints': 4, 'Assignee': ''}, {'Id': 'TASK5', 'Title': 'Bicycle Crunches x60', 'Status': 'Open', 'Color': 'black', 'Description': 'Complete 60 reps of bicycle crunches for overall core activation', 'StoryPoints': 5, 'Assignee': 'Alice Johnson'}]`;

    let toast = new ej.notifications.Toast({
        position: { X: 'Right', Y: 'Top' },
        showCloseButton: true,
        target: '#toast-kanban-observable'
    });
    toast.appendTo('#toast');

    let addProjectButton = new ej.buttons.Button({
        content: 'Add Project Details'
    });
    addProjectButton.appendTo('#add-project');

    if (addProjectButton.element) {
        addProjectButton.element.onclick = () => {
            isGeneratedProjectTasks = false;
            projectDetailsDialog.show();
        };
    
        let openProjectDetailsDialog = new ej.buttons.Button({
            content: 'Add New Projects'
        });
        openProjectDetailsDialog.appendTo('#openProjectDetailsDialog');
        openProjectDetailsDialog.element.onclick = () => {
            isGeneratedProjectTasks = false;
            projectDetailsDialog.show();
        };
    
        let prepareSprintPlanDetails = new ej.buttons.Button({
            content: 'Sprint Plan',
            disabled: true
        });
        prepareSprintPlanDetails.appendTo('#prepareSprintPlanDetails');
        prepareSprintPlanDetails.element.onclick = () => {
            aiResultUpdated = false;
            showSprintPlanDetails.show();
        };
    
        let goToBacklogView = new ej.buttons.Button({
            content: 'Backlog'
        });
        goToBacklogView.appendTo('#goToBacklogView');
        goToBacklogView.element.onclick = () => {
            goToBacklogBoardView.content = "View as Board";
            grid.dataSource = smartSuggestion;
            grid.dataBind();
            (document.getElementById('grid-cntiner')).style.display = '';
            (document.getElementById('backlog')).style.display = '';
            (document.getElementById('backlogsBoard')).style.display = 'none';
            (document.getElementById('sprint')).style.display = 'none';
        };
    
        let goToSprintBoardView = new ej.buttons.Button({
            content: 'Sprint'
        });
        goToSprintBoardView.appendTo('#goToSprintBoardView');
        goToSprintBoardView.element.onclick = () => {
            sprintBoardKanbanObj.dataSource = tasks;
            sprintBoardKanbanObj.dataBind();
            sprintBoardKanbanObj.refresh();
            (document.getElementById('backlog')).style.display = 'none';
            (document.getElementById('grid-cntiner')).style.display = 'none';
            (document.getElementById('backlogsBoard')).style.display = 'none';
            (document.getElementById('sprint')).style.display = '';
        };
    
        let goToBacklogBoardView = new ej.buttons.Button({
            content: 'View as Board'
        });
        goToBacklogBoardView.appendTo('#goToBacklogBoardView');
        goToBacklogBoardView.element.onclick = () => {
            if (goToBacklogBoardView.content == "View as Board") {
                goToBacklogBoardView.content = "View as Backlog";
                backlogKanbanObj.dataSource = smartSuggestion;
                backlogKanbanObj.dataBind();
                backlogKanbanObj.refresh();
                (document.getElementById('grid-cntiner')).style.display = 'none';
                (document.getElementById('backlogsBoard')).style.display = '';
            } else {
                goToBacklogBoardView.content = "View as Board";
                grid.dataSource = smartSuggestion;
                grid.dataBind();
                (document.getElementById('grid-cntiner')).style.display = '';
                (document.getElementById('backlogsBoard')).style.display = 'none';
            }
            (document.getElementById('sprint')).style.display = 'none';
        };
    
        let grid = new ej.grids.Grid(
            {
                dataSource: smartSuggestion,
                allowPaging: true,
                toolbar: ['Add'],
                editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog', template: '#dialogtemplate' },
                columns: [
                    { field: "Id", headerText: 'Task ID', defaultValue: '', isPrimaryKey: true, validationRules: { required: true } },
                    { field: "Title", headerText: 'Title', defaultValue: '', validationRules: { required: true } },
                    { field: "Description", headerText: 'Description', defaultValue: '', editType: 'defaultEdit' },
                    { field: "StoryPoints", headerText: 'StoryPoints', defaultValue: 0, editType: 'defaultEdit', validationRules: { required: true, min: 0 } },
                    { field: "Status", headerText: 'Status', defaultValue: '', isPrimaryKey: true, validationRules: { required: true } },
                ],
                actionComplete: actionComplete
            });
        grid.appendTo('#grid-container');
    
        function actionComplete(args) {
            if (args.requestType === 'beginEdit' || args.requestType === 'add') {
                let data = args.rowData;
                new ej.inputs.NumericTextBox({
                    min: 1,
                    step: 1,
                    placeholder: "StoryPoints",
                    width: '100%',
                    floatLabelType: 'Always',
                    value: data.StoryPoints ? data.StoryPoints : 1
                }, args.form?.elements.namedItem('StoryPoints'));
                new ej.inputs.TextBox({
                    placeholder: 'Task ID',
                    width: '100%',
                    floatLabelType: 'Always',
                    value: data.Id ? data.Id : ''
                }, args.form?.elements.namedItem('Id'));
                new ej.inputs.TextBox({
                    placeholder: 'Title',
                    width: '100%',
                    floatLabelType: 'Always',
                    value: data.Title ? data.Title : ''
                }, args.form?.elements.namedItem('Title'));
    
                new ej.inputs.TextBox({
                    placeholder: 'Description',
                    width: '100%',
                    floatLabelType: 'Always',
                    multiline: true,
                    value: data.Description ? data.Description : ''
                }, args.form?.elements.namedItem('Description'));
    
                new ej.inputs.TextBox({
                    placeholder: 'Status',
                    width: '100%',
                    floatLabelType: 'Always',
                    value: data.Status ? data.Status : 'Open'
                }, args.form?.elements.namedItem('Status'));
            }
        }
    
        let backlogKanbanObj = new ej.kanban.Kanban({
            keyField: 'Status',
            dataSource: smartSuggestion,
            columns: [
                { headerText: 'To Do', keyField: 'Open' },
                { headerText: 'In Progress', keyField: 'InProgress' },
                { headerText: 'Review', keyField: 'Review' },
                { headerText: 'Done', keyField: 'Close' }
            ],
            cardSettings: {
                headerField: 'Title',
                contentField: 'Description',
                grabberField: 'Color',
                template: '#cardTemplate-backlog-board'
            }
        });
        backlogKanbanObj.appendTo('#backlogsBoard');
    
        let dialogCtn = document.getElementById('projectDetails');
        let dialogFooter = document.getElementById('projectdialogFooter');
        projectDetailsDialog = new ej.popups.Dialog({
            header: 'AI Smart Task Suggestion',
            content: dialogCtn,
            showCloseIcon: true,
            width: '30%',
            minHeight: '60%',
            zIndex: 1000,
            isModal: true,
            cssClass: 'custom-dialog',
            footerTemplate: dialogFooter,
            target: document.getElementById('container'),
            close: () => {
                closeprojectDetailsDialog();
            }
        });
        projectDetailsDialog.appendTo('#projectDetailsDialog');
        projectDetailsDialog.hide();
        projectDetailsDialog.open = () => {
            if (!projectDetailsDialogCreated) {
                projectDetailsDialogCreated = true;
                taskCount = new ej.inputs.NumericTextBox({
                    min: 1,
                    step: 1,
                    width: '100%',
                    floatLabelType: 'Always',
                    value: 0
                });
                taskCount.appendTo('#tasks-value');
                projectDetails = new ej.inputs.TextBox({
                    width: '100%',
                    floatLabelType: 'Always',
                    value: '',
                    multiline: true
                });
                projectDetails.appendTo('#project-details');
                let generateTasks = new ej.splitbuttons.ProgressButton({
                    content: 'Generate Tasks',
                    enableProgress: false,
                    begin: () => {
                        generateTasks.content = "Progressing...";
                        generateTasks.dataBind();
                        const checkTasksGenerated = () => {
                            if (isGeneratedProjectTasks) {
                                generateTasks.content = "Generate Tasks";
                                generateTasks.dataBind();
                                closeprojectDetailsDialog();
                            } else {
                                setTimeout(checkTasksGenerated, 100);
                            }
                        };
                        checkTasksGenerated();
                    }
                });
                generateTasks.appendTo('#generate-tasks');
                generateTasks.element.onclick = () => {
                    isGeneratedProjectTasks = false;
                    (document.getElementById('homecontainer')).style.display = 'none';
                    (document.getElementById('toast-kanban-observable')).style.display = '';
                    goToBacklogBoardView.content = "View as Board";
                    grid.dataSource = smartSuggestion;
                    grid.dataBind();
                    (document.getElementById('grid-cntiner')).style.display = '';
                    (document.getElementById('backlogsBoard')).style.display = 'none';
                    (document.getElementById('sprint')).style.display = 'none';
                    GenerateProjectTasks();
                };
            }
        };
    
        function closeprojectDetailsDialog() {
            projectDetailsDialog.hide();
            taskCount.value = 0;
            projectDetails.value = '';
        }
    
        let sprintBoardKanbanObj = new ej.kanban.Kanban({
            keyField: 'Status',
            dataSource: tasks,
            columns: [
                { headerText: 'To Do', keyField: 'Open' },
                { headerText: 'In Progress', keyField: 'InProgress' },
                { headerText: 'Review', keyField: 'Review' },
                { headerText: 'Done', keyField: 'Close' }
            ],
            cardSettings: {
                headerField: 'Title',
                contentField: 'Description',
                grabberField: 'Color',
                template: '#cardTemplate-sprint-board'
            },
            swimlaneSettings: {
                keyField: 'Assignee'
            }
        });
        sprintBoardKanbanObj.appendTo('#sprintBoard');
    
        let dialogCtnsprint = document.getElementById('sprintDetails');
        let dialogFootersprint = document.getElementById('sprintdialogFooter');
    
        let showSprintPlanDetails = new ej.popups.Dialog({
            header: 'Sprint Plan Details',
            content: dialogCtnsprint,
            showCloseIcon: true,
            width: '30%',
            minHeight: '40%',
            isModal: true,
            cssClass: 'custom-dialog',
            footerTemplate: dialogFootersprint,
            target: '#toast-kanban-observable',
            close: () => {
                showSprintPlanDetails.hide();
                checkList.value = [];
            }
        });
        showSprintPlanDetails.appendTo('#sprintPlanDetailsDialog');
        showSprintPlanDetails.hide();
        showSprintPlanDetails.open = () => {
            if (!showSprintPlanDetailsCreated) {
                showSprintPlanDetailsCreated = true;
                checkList = new ej.dropdowns.MultiSelect({
                    dataSource: window.assigneeDetails,
                    fields: { text: 'Assignee', value: 'Assignee' },
                    mode: 'CheckBox',
                    placeholder: 'Select assignees',
                    showSelectAll: true,
                    showDropDownIcon: true,
                    filterBarPlaceholder: 'Search assignees',
                    popupHeight: '350px',
                    value: []
                });
                checkList.appendTo('#assignee-details');
                let prepareSprintTasks = new ej.splitbuttons.ProgressButton({
                    content: 'PrepareSprintPlan',
                    enableProgress: false,
                    begin: () => {
                        prepareSprintTasks.content = "Progressing...";
                        prepareSprintTasks.dataBind();
                        const checkTasksGenerated = () => {
                            if (aiResultUpdated) {
                                prepareSprintTasks.content = "PrepareSprintPlan";
                                prepareSprintTasks.dataBind();
                                showSprintPlanDetails.hide();
                                checkList.value = [];
                            } else {
                                setTimeout(checkTasksGenerated, 100);
                            }
                        };
                        checkTasksGenerated();
                    }
                });
                prepareSprintTasks.appendTo('#prepare-sprint-tasks');
                prepareSprintTasks.element.onclick = () => {
                    prepareSprintPlan();
                };
            }
        }
    
        function GenerateProjectTasks() {
            try {
                if (taskCount.value && projectDetails.value) {
                    var description = `Generate ${taskCount.value} task recommendations for ${projectDetails.value}. Each task should include the following fields: Id (like example: ID should be in project name simple 4char word - 1), Title, Status, Description, Assignee, StoryPoints, Color and Due Date, formatted according to the dataset. Assign each task to the Assignee: empty string, set the Status to 'Open', and use black for the Color. Use the dataset provided below to create your recommendations. IMPORTANT: Return the data strictly in JSON format with all the required fields. Only the JSON data is needed, no additional text.Return only the JSON array format without any explanations.`;
                    let result = getResponseFromOpenAI(description);
                    result.then((result) => {
                        try {
                            const jsonArrayPattern = /\[.*?\]/s;
                            result = result.match(jsonArrayPattern);
                            if (result && result[0]) {
                                let data = result[0].replace("```json", "").replace("```", "").replace("\r", "").replace("\n", "").replace("\t", "").trim();
                                let modifiedData = JSON.parse(data);
                                smartSuggestion = modifiedData !== null ? smartSuggestion.concat(modifiedData) : smartSuggestion;
                                grid.dataSource = smartSuggestion;
                                grid.dataBind();
                                isGeneratedProjectTasks = true;
                                prepareSprintPlanDetails.disabled = false;
                            } else {
                                toast.content = "An error occurred during the AI process, Please try again."
                                toast.show();
                            }
    
                        } catch {
                            toast.content = "An error occurred during the AI process, Please try again."
                            toast.show();
                        }
    
                    });
                }
            } catch {
                toast.content = "An error occurred during the AI process, Please try again."
                toast.show();
            }
        }
    
        function prepareSprintPlan() {
            aiResultUpdated = false;
            try {
                var tasksDataset = JSON.stringify(smartSuggestion);
                var assigneeCapacityDetails = JSON.stringify(window.assigneeDetails);
                var selectedAssignees = JSON.stringify(checkList.value);
                var sprintWorkingDays = 12;
                const prompt = `You are a sprint planner assistant. Your task is to generate a sprint plan by assigning backlog tasks to the selected assignee based on their daily capacity and the overall sprint duration.
                Inputs:
                1. Backlog tasks dataset:
                - ID: Unique identifier for the task.
                - Title: Brief description of the task.
                - Status: Current status of the task (e.g., 'Open').
                - Assignee: Person responsible for the task.
                - Color: A color code representing the priority or category.
                - Description: Detailed description of the task.
                - StoryPoints: Effort required to complete the task, measured in story points.
    
                - Data: ${tasksDataset}
    
                2. Assignee capacity dataset:
                - Assignee: Name of the assignee.
                - Capacity: Number of story points the assignee can complete per day (day = 8 hours, 1 story point = 3 hours).
    
                - Data: ${assigneeCapacityDetails}
    
                3. Selected assignee dataset:
                - Assignee: Name of the assignee selected for the sprint. Should assign tasks for all selected assignees.
    
                - Data: ${selectedAssignees}
    
                4. Sprint duration: The total number of working days in the sprint.
    
                - Data: ${sprintWorkingDays}
    
                Make a sprint plan for overall working days (Sprint duration: ${sprintWorkingDays} days).
    
                Objective:
                Based on the inputs, assign tasks from the backlog to the selected assignee while considering their daily capacity and the sprint duration. The total story points assigned to the assignee should not exceed their available capacity over the sprint.
    
                Output:
                Expected format: ${expectedFormat}
    
                Return a JSON object containing the list of tasks assigned to the selected assignee for the sprint.
                Note: Ensure the JSON output includes all tasks with the necessary updates. Return only the JSON array format without any explanations or JSON structure changes.`;
                let result = getResponseFromOpenAI(prompt);
                result.then((result) => {
                    try {
                        const jsonArrayPattern = /\[.*?\]/s;
                        result = result.match(jsonArrayPattern);
                        if (result && result[0]) {
                            let data = result[0].replace("```json", "").replace("```", "").replace("\r", "").replace("\n", "").replace("\t", "").trim();
                            let updatedTasks = JSON.parse(data);
                            tasks = updatedTasks !== null ? tasks.concat(updatedTasks) : tasks;
                            sprintBoardKanbanObj.dataSource = tasks;
                            sprintBoardKanbanObj.dataBind();
                            (document.getElementById("backlog")).style.display = "none";
                            (document.getElementById("grid-cntiner")).style.display = "none";
                            (document.getElementById("backlogsBoard")).style.display = "none";
                            (document.getElementById("sprint")).style.display = "";
                            aiResultUpdated = true;
                        } else {
                            toast.content = "An error occurred during the AI process, Please try again."
                            toast.show();
                        }
                    } catch {
                        toast.content = "An error occurred during the AI process, Please try again."
                        toast.show();
                    }
                });
            } catch {
                toast.content = "An error occurred during the AI process, Please try again."
                toast.show();
            }
            aiResultUpdated = true;
        }
    
        async function getResponseFromOpenAI(promptQuery) {
            const content = await OpenAiModel(promptQuery);
            return content ? content : '';
        }
    }
};