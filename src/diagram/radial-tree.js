var radialTree = [
    {
        'Id': 'parent', 'Name': 'Maria Anders', 'Designation': 'Managing Director'
    },
    {
        'Id': 1, 'Name': 'Ana Trujillo', 'Designation': 'Project Manager',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 2, 'Name': 'Lino Rodri', 'Designation': 'Project Manager',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 3, 'Name': 'Philip Cramer', 'Designation': 'Project Manager',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 4, 'Name': 'Pedro Afonso', 'Designation': 'Project Manager',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 5, 'Name': 'Anto Moreno', 'Designation': 'Project Lead',
        'ReportingPerson': 1
    },
    {
        'Id': 6, 'Name': 'Elizabeth Roel', 'Designation': 'Project Lead',
        'ReportingPerson': 1
    },
    {
        'Id': 7, 'Name': 'Aria Cruz', 'Designation': 'Project Lead',
        'ReportingPerson': 1
    },
    {
        'Id': 8, 'Name': 'Eduardo Roel', 'Designation': 'Project Lead',
        'ReportingPerson': 1
    },
    {
        'Id': 9, 'Name': 'Howard Snyd', 'Designation': 'Project Lead',
        'ReportingPerson': 2
    },
    {
        'Id': 10, 'Name': 'Daniel Tonini', 'Designation': 'Project Lead',
        'ReportingPerson': 2
    },
    {
        'Id': 11, 'Name': 'Nardo Batista', 'Designation': 'Project Lead',
        'ReportingPerson': 89
    },
    {
        'Id': 12, 'Name': 'Michael Holz', 'Designation': 'Project Lead',
        'ReportingPerson': 89
    },
    {
        'Id': 13, 'Name': 'Kloss Perrier', 'Designation': 'Project Lead',
        'ReportingPerson': 90
    },
    {
        'Id': 14, 'Name': 'Liz Nixon', 'Designation': 'Project Lead',
        'ReportingPerson': 3
    },
    {
        'Id': 15, 'Name': 'Paul Henriot', 'Designation': 'Project Lead',
        'ReportingPerson': 3
    },
    {
        'Id': 16, 'Name': 'Paula Parente', 'Designation': 'Project Lead',
        'ReportingPerson': 90
    },
    {
        'Id': 17, 'Name': 'Matti Kenna', 'Designation': 'Project Lead',
        'ReportingPerson': 4
    },
    {
        'Id': 18, 'Name': 'Laura Callahan', 'Designation': 'Project Lead',
        'ReportingPerson': 4
    },
    {
        'Id': 19, 'Name': 'Simon Roel', 'Designation': 'Project Lead',
        'ReportingPerson': 4
    },
    {
        'Id': 20, 'Name': 'Thomas Hardy', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 12
    },
    {
        'Id': 21, 'Name': 'Martín Kloss', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 5
    },
    {
        'Id': 23, 'Name': 'Diego Roel', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 7
    },
    {
        'Id': 24, 'Name': 'José Pedro ', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 8
    },
    {
        'Id': 25, 'Name': 'Manu Pereira', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 8
    },
    {
        'Id': 26, 'Name': 'Annette Roel', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 25
    },
    {
        'Id': 27, 'Name': 'Catherine Kaff', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 8
    },
    {
        'Id': 28, 'Name': 'Lúcia Carvalho', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 12
    },
    {
        'Id': 29, 'Name': 'Alej Camino', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 13
    },
    {
        'Id': 30, 'Name': 'Liu Wong', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 14
    },
    {
        'Id': 31, 'Name': 'Karin Josephs', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 14
    },
    {
        'Id': 33, 'Name': 'Pirkko King', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 17
    },
    {
        'Id': 34, 'Name': 'Karl Jablonski', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 18
    },
    {
        'Id': 35, 'Name': 'Zbyszek Yang', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 19
    },
    {
        'Id': 36, 'Name': 'Nancy', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 5
    },
    {
        'Id': 37, 'Name': 'Anne', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 6
    },
    {
        'Id': 38, 'Name': 'Isabel Castro', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 7
    },
    {
        'Id': 39, 'Name': 'Nardo Batista', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 9
    },
    {
        'Id': 40, 'Name': 'Rene Phillips', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 16
    },
    {
        'Id': 41, 'Name': 'Rita Pfalzheim', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 9
    },
    {
        'Id': 42, 'Name': 'Janete Limeira', 'Designation': 'Senior S/w Engg',
        'ReportingPerson': 11
    },
    {
        'Id': 43, 'Name': 'Christina kaff', 'Designation': 'S/w Engg',
        'ReportingPerson': 20
    },
    {
        'Id': 44, 'Name': 'Peter Franken', 'Designation': 'S/w Engg',
        'ReportingPerson': 21
    },
    {
        'Id': 45, 'Name': 'Carlos Schmitt', 'Designation': 'S/w Engg',
        'ReportingPerson': 23
    },
    {
        'Id': 46, 'Name': 'Yoshi Wilson', 'Designation': 'S/w Engg',
        'ReportingPerson': 23
    },
    {
        'Id': 47, 'Name': 'Jean Fresnière', 'Designation': 'S/w Engg',
        'ReportingPerson': 24
    },
    {
        'Id': 48, 'Name': 'Simon Roel', 'Designation': 'S/w Engg',
        'ReportingPerson': 25
    },
    {
        'Id': 52, 'Name': 'Palle Ibsen', 'Designation': 'S/w Engg',
        'ReportingPerson': 29
    },
    {
        'Id': 53, 'Name': 'Lúcia Carvalho', 'Designation': 'S/w Engg',
        'ReportingPerson': 30
    },
    {
        'Id': 54, 'Name': 'Hanna Moos', 'Designation': 'Project Trainee',
        'ReportingPerson': 30
    },
    {
        'Id': 55, 'Name': 'Peter Citeaux', 'Designation': 'Project Trainee',
        'ReportingPerson': 33
    },
    {
        'Id': 56, 'Name': 'Elizabeth Mary', 'Designation': 'Project Trainee',
        'ReportingPerson': 33
    },
    {
        'Id': 57, 'Name': 'Victoria Ash', 'Designation': 'Project Trainee',
        'ReportingPerson': 34
    },
    {
        'Id': 58, 'Name': 'Janine Labrune', 'Designation': 'Project Trainee',
        'ReportingPerson': 35
    },
    {
        'Id': 60, 'Name': 'Carine Schmitt', 'Designation': 'Project Trainee',
        'ReportingPerson': 11
    },
    {
        'Id': 61, 'Name': 'Paolo Accorti', 'Designation': 'Project Trainee',
        'ReportingPerson': 38
    },
    {
        'Id': 62, 'Name': 'André Fonseca', 'Designation': 'Project Trainee',
        'ReportingPerson': 41
    },
    {
        'Id': 63, 'Name': 'Mario Pontes', 'Designation': 'Project Trainee',
        'ReportingPerson': 6
    },
    {
        'Id': 64, 'Name': 'John Steel', 'Designation': 'Project Trainee',
        'ReportingPerson': 7
    },
    {
        'Id': 65, 'Name': 'Renate Jose', 'Designation': 'Project Trainee',
        'ReportingPerson': 42
    },
    {
        'Id': 66, 'Name': 'Jaime Yorres', 'Designation': 'Project Trainee',
        'ReportingPerson': 20
    },
    {
        'Id': 67, 'Name': 'Alex Feuer', 'Designation': 'Project Trainee',
        'ReportingPerson': 21
    },
    {
        'Id': 70, 'Name': 'Helen Marie', 'Designation': 'Project Trainee',
        'ReportingPerson': 24
    },
    {
        'Id': 73, 'Name': 'Sergio roel', 'Designation': 'Project Trainee',
        'ReportingPerson': 37
    },
    {
        'Id': 75, 'Name': 'Janete Limeira', 'Designation': 'Project Trainee',
        'ReportingPerson': 29
    },
    {
        'Id': 76, 'Name': 'Jonas Bergsen', 'Designation': 'Project Trainee',
        'ReportingPerson': 18
    },
    {
        'Id': 77, 'Name': 'Miguel Angel', 'Designation': 'Project Trainee',
        'ReportingPerson': 18
    },
    {
        'Id': 80, 'Name': 'Helvetis Nagy', 'Designation': 'Project Trainee',
        'ReportingPerson': 34
    },
    {
        'Id': 81, 'Name': 'Rita Müller', 'Designation': 'Project Trainee',
        'ReportingPerson': 35
    },
    {
        'Id': 82, 'Name': 'Georg Pipps', 'Designation': 'Project Trainee',
        'ReportingPerson': 36
    },
    {
        'Id': 83, 'Name': 'Horst Kloss', 'Designation': 'Project Trainee',
        'ReportingPerson': 37
    },
    {
        'Id': 84, 'Name': 'Paula Wilson', 'Designation': 'Project Trainee',
        'ReportingPerson': 38
    },
    {
        'Id': 85, 'Name': ' Jose Michael', 'Designation': 'Project Trainee',
        'ReportingPerson': 37
    },
    {
        'Id': 86, 'Name': 'Mauri Moroni', 'Designation': 'Project Trainee',
        'ReportingPerson': 40
    },
    {
        'Id': 87, 'Name': 'Michael Holz', 'Designation': 'Project Trainee',
        'ReportingPerson': 41
    },
    {
        'Id': 88, 'Name': 'Alej Camino', 'Designation': 'Project Trainee',
        'ReportingPerson': 42
    },
    {
        'Id': 89, 'Name': 'Jytte Petersen', 'Designation': 'Project Manager',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 90, 'Name': 'Mary Saveley', 'Designation': 'Project Manager',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 91, 'Name': 'Robert King', 'Designation': 'Project Manager',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 95, 'Name': 'Roland Mendel', 'Designation': 'CSR',
        'ReportingPerson': 19
    },
    {
        'Id': 98, 'Name': 'Helen Bennett', 'Designation': 'SR',
        'ReportingPerson': 42
    },
    {
        'Id': 99, 'Name': 'Carlos Nagy', 'Designation': 'SR',
        'ReportingPerson': 42
    },
    {
        'Id': 100, 'Name': 'Felipe Kloss', 'Designation': 'SR',
        'ReportingPerson': 77
    },
];
/**
 * Sample for Radial tree
 */
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.RadialTree);
this.default = function () {
    //Initialize diagram control
    var diagram = new ej.diagrams.Diagram({
        width: '100%', height: '600px', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        //configures data source settings
        dataSourceSettings: {
            id: 'Id', parentId: 'ReportingPerson',
            dataManager: new ej.data.DataManager(radialTree),
            //binds the data with the nodes
            doBinding: function (nodeModel, data, diagram) {
                nodeModel.annotations = [{
                    content: data.Name,
                    style: data.Id === 'parent' ? { color: 'white', fontSize: 50 } : { color: 'black', fontSize: 20 }
                }];
                nodeModel.constraints = ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.InheritTooltip | ej.diagrams.NodeConstraints.Tooltip;
                nodeModel.tooltip = {
                    content: data.Name + '<br/>' + data.Designation, relativeMode: 'Object',
                    position: 'TopCenter', showTipPointer: true
                };
                if (data.Designation === 'Managing Director') {
                    nodeModel.width = 400;
                    nodeModel.height = 400;
                    nodeModel.shape = { shape: 'Ellipse' };
                    nodeModel.style = { fill: 'black' };
                }
                else if (data.Designation === 'Project Manager') {
                    nodeModel.width = 130;
                    nodeModel.height = 130;
                    nodeModel.style = { fill: '#f8ab52' };
                }
                else {
                    nodeModel.width = 100;
                    nodeModel.height = 100;
                    nodeModel.shape = { shape: 'Ellipse' };
                    nodeModel.style = { fill: '#afeeee' };
                }
            }
        },
        //Disables all interactions except zoom/pan
        tool: ej.diagrams.DiagramTools.ZoomPan,
        //Configures automatic layout
        layout: {
            type: 'RadialTree', verticalSpacing: 30, horizontalSpacing: 20,
            root: 'Category',
        },
        //Defines the default node and connector properties
        getNodeDefaults: function (obj, diagram) {
            return obj;
        }, getConnectorDefaults: function (connector, diagram) {
            connector.type = 'Straight';
            return connector;
        }
    });
    diagram.appendTo('#diagram');
    diagram.fitToPage();
    //create and add ZoomIn,ZoomOut and Reset options in ToolBar.
    var toolbarObj = new ej.navigations.Toolbar({
        clicked: onItemClick,
        items: [
            { type: 'Button', tooltipText: 'ZoomIn', text: 'Zoom In', prefixIcon: 'e-ddb-icons e-zoomin' }, { type: 'Separator' },
            { type: 'Button', tooltipText: 'ZoomOut', text: 'Zoom Out', prefixIcon: 'e-ddb-icons e-zoomout'}, { type: 'Separator' },
            { type: 'Button', tooltipText: 'Reset', text: 'Reset', prefixIcon: 'e-ddb-icons e-reset' }
        ]
    });

    toolbarObj.appendTo('#toolbar');
    //based on the option, Click event to perform ZoomIn,ZoomOut and Reset.
    function onItemClick(args) {
        switch (args.item.text) {
            case 'Zoom In':
                var zoomin = { type: 'ZoomIn', zoomFactor: 0.2 };
                diagram.zoomTo(zoomin);
                break;
            case 'Zoom Out':
                var zoomout = { type: 'ZoomOut', zoomFactor: 0.2 };
                diagram.zoomTo(zoomout);
                break;
            case 'Reset':
                diagram.reset();
                diagram.fitToPage();
                break;
        }
    }
};