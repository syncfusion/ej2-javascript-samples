this.default = function () {
    /**
     * Natural Language Query Sample
     */
    ej.base.enableRipple(true);

    function generateRandomUsers(count) {
        const names = ["John", "Jane", "Bob", "Alice", "Tom", "Sally", "Jim", "Mary", "Peter", "Nancy"];
        const cities = ["Los Angeles", "San Diego", "New York", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "Dallas", "San Jose"];
        const states = ["California", "New York", "Illinois", "Texas", "Arizona", "Pennsylvania"];
        const streets = ["Elm St", "Oak St", "Maple Ave", "Pine St", "Cedar St", "Birch St"];
        const emails = ["example.com", "test.com", "demo.com"];
        const users = [];

        for (let i = 0; i < count; i++) {
            const id = i + 1;
            const name = names[Math.floor(Math.random() * names.length)];
            const email = `${name.toLowerCase()}${id}@${emails[Math.floor(Math.random() * emails.length)]}`;
            const address = `${Math.floor(Math.random() * 10000)} ${streets[Math.floor(Math.random() * streets.length)]}`;
            const city = cities[Math.floor(Math.random() * cities.length)];
            const state = states[Math.floor(Math.random() * states.length)];
            const zipcode = `${Math.floor(10000 + Math.random() * 90000)}`;
            const credits = Math.floor(Math.random() * 2001);
            users.push({ id, name, email, address, city, state, zipcode, credits });
        }

        return users;
    }

    const users = generateRandomUsers(20);

    let tabObj = new ej.navigations.Tab({
        items: [
            { header: { 'text': 'Natural Language Query' }, content: '#prompt-ui' },
            { header: { 'text': 'Query Builder UI' }, content: '#querybuilder-ui' }
        ]
    });

    tabObj.appendTo('#tab');

    ej.popups.createSpinner({
        target: document.getElementById('grid')
    });

    if (document.getElementById('text-area')) {
        document.getElementById('text-area').value = 'find all users who lives in los angeles and have over 1000 credits';
    }
    let grid = new ej.grids.Grid({
        dataSource: users,
        allowPaging: true,
        pageSettings: { pageSize: 10 },
        columns: [
            { field: 'id', headerText: 'ID', textAlign: 'Right', width: 120 },
            { field: 'name', headerText: 'Name', width: 120 },
            { field: 'email', headerText: 'Email', width: 150 },
            { field: 'address', headerText: 'Address', width: 120 },
            { field: 'city', headerText: 'City', width: 120 },
            { field: 'state', headerText: 'State', width: 120 },
            { field: 'credits', headerText: 'Credits', width: 120 }
        ]
    });

    grid.appendTo('#grid');

    let columnData = [
        { field: 'id', label: 'ID', type: 'number' },
        { field: 'name', label: 'Name', type: 'string' },
        { field: 'email', label: 'Email', type: 'string' },
        { field: 'address', label: 'Address', type: 'string' },
        { field: 'city', label: 'City', type: 'string' },
        { field: 'state', label: 'State', type: 'string' },
        { field: 'credits', label: 'Credits', type: 'number' }
    ];

    let qryBldrObj = new ej.querybuilder.QueryBuilder({
        dataSource: users,
        columns: columnData
    });
    qryBldrObj.appendTo('#querybuilder');


    let button = new ej.buttons.Button({
        iconCss: 'e-icons e-reset'
    });
    button.appendTo('#submit');
    
    if (button.element) {
        button.element.onclick = () => {
            ej.popups.showSpinner(document.getElementById('grid'));
            let textArea = "write SQL query to " + (document.querySelector('#text-area')).value + " from the single table without changing the given values";
            let aiOutput = geminiModel(textArea);
            aiOutput.then((result) => {
                let val = result.split("```sql")[1].split("WHERE ")[1].split(";\n")[0];
                val = val.replace("\n", "");
                qryBldrObj.setRulesFromSql(val);
                let predicate = qryBldrObj.getPredicate(qryBldrObj.getValidRules());
                let query;
                if (ej.base.isNullOrUndefined(predicate)) {
                    query = new ej.data.Query();
                } else {
                    query = new ej.data.Query().where(predicate);
                }
                grid.query = query;
                grid.refresh();
                ej.popups.hideSpinner(document.getElementById('grid'));
            });
        };
    }

};