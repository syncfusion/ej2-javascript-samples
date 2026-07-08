this.default = function () {
    var avatarColorClasses = [
        'avatar-red', 'avatar-blue', 'avatar-green', 'avatar-orange', 'avatar-purple'
    ];

    function getInitials(name) {
        var parts = name.trim().split(' ');
        if (parts.length >= 2) {
            return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    }

    function getAvatarClass(name) {
        var sum = 0;
        for (var i = 0; i < name.length; i++) {
            sum += name.charCodeAt(i);
        }
        return avatarColorClasses[sum % avatarColorClasses.length];
    }

    window.empAvatarDetail = function (e) {
        var wrapper = document.createElement('div');
        wrapper.className = 'customer-details';

        var avatarDiv = document.createElement('div');
        avatarDiv.className = 'customer-avatar ' + getAvatarClass(e.Employees);
        avatarDiv.textContent = getInitials(e.Employees);

        var infoDiv = document.createElement('div');
        infoDiv.className = 'customer-info';

        var namePara = document.createElement('p');
        namePara.className = 'customer-name';
        namePara.textContent = e.Employees;

        var emailPara = document.createElement('p');
        emailPara.className = 'customer-email';
        emailPara.textContent = e.Mail;

        infoDiv.appendChild(namePara);
        infoDiv.appendChild(emailPara);
        wrapper.appendChild(avatarDiv);
        wrapper.appendChild(infoDiv);

        return wrapper.outerHTML;
    };

    window.ratingDetail = function (e) {
        var temp = document.getElementsByTagName("template")[0];
        var cloneTemplate = temp.content.cloneNode(true);
        var ratingElement = cloneTemplate.querySelector(".rating");
        var rating = new ej.inputs.Rating({
            value: e.Rating,
            readOnly: true,
            cssClass: 'custom-rating'
        });
        rating.appendTo(ratingElement);
        return (ratingElement).ej2_instances[0].wrapper.outerHTML;
    };

    window.progessDetail = function (e) {
        var myProgress = document.createElement('div');
        myProgress.id = 'myProgress';
        myProgress.className = 'pbar';
        var myBar = document.createElement('div');
        myBar.id = 'myBar';
        myBar.className = 'bar';
        if (e.Status === 'Inactive') {
            myBar.classList.add('progressdisable');
        }
        if (e.Software <= 20) {
            e.Software = e.Software + 30;
        }
        (myBar).style.width = e[e.column.field] + '%';
        var pbarlabel = document.createElement('div');
        pbarlabel.id = 'pbarlabel';
        pbarlabel.className = 'barlabel';
        pbarlabel.textContent = e.Software + '%';
        myBar.appendChild(pbarlabel);
        myProgress.appendChild(myBar);
        return myProgress.outerHTML;
    };

    window.statusDetail = function (e) {
        var div = document.createElement('div');
        var span = document.createElement('span');
        if (e.Status === 'Active') {
            span.className = 'statustxt e-activecolor';
            span.textContent = 'Active';
            div.className = 'statustemp e-activecolor';
        } else {
            span.className = 'statustxt e-inactivecolor';
            span.textContent = 'Inactive';
            div.className = 'statustemp e-inactivecolor';
        }
        div.appendChild(span);
        return div.outerHTML;
    };

    var urlapi = new ej.data.DataManager({
        url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
        adaptor: new ej.data.UrlAdaptor()
    });

    var grid = new ej.grids.Grid({
        dataSource: urlapi,
        query: new ej.data.Query().addParams('dataCount', '100000'),
        allowFiltering: true,
        allowSorting: true,
        enableVirtualization: true,
        enableDomVirtualization: true,
        domVirtualizationSettings: { rowBuffer: 10 },
        pageSettings: { pageSize: 100 },
        filterSettings: { type: 'CheckBox' },
        height: 400,
        rowHeight: 50,
        clipMode: 'EllipsisWithTooltip',
        columns: [
            { field: 'EmployeeID', visible: true, headerText: 'Employee ID', isPrimaryKey: true, width: '150', textAlign: 'Right' },
            {
                field: 'Employees', headerText: 'Employee Name', width: '260',
                template: '#empAvatarTemplate'
            },
            {
                field: 'Designation', headerText: 'Designation', width: '170'
            },
            {
                field: 'Status', headerText: 'Status',
                width: '150', template: '#statusTemplate'
            },
            {
                field: 'Trustworthiness', headerText: 'Trustworthiness',
                width: '160', template: '#trustTemplate', visible: false
            },
            {
                field: 'Rating', headerText: 'Rating',
                width: '160', template: '#ratingTemplate', visible: false
            },
            {
                field: 'Software', allowFiltering: false, allowSorting: false, headerText: 'Software Proficiency',
                width: '180', template: '#progessTemplate', visible: false
            },
            {
                field: 'CurrentSalary', headerText: 'Current Salary', format: 'C2',
                textAlign: 'Right', width: '160'
            },
            {
                field: 'Location', width: '160', headerText: 'Location'
            },
            { field: 'Address', headerText: 'Address', width: '240' },
        ]
    });
    grid.appendTo('#DOMVirtualGrid');
};
