/**
 *  Sample for list-view in splitter
 */
var commonData = [];
var dataSource = {};
var listObj;
var liElement;
this.default = function () {
    var splitterObj = new ej.layouts.Splitter({
        height: '292px',
        paneSettings: [
            { size: '35%', min: '25%' },
            { size: '65%', min: '45%' }
        ],
        width: '100%'
    });
    splitterObj.appendTo('#splitter');
    ej.lists.ListView.Inject(ej.lists.Virtualization);
    commonData = [
        { name: 'Margaret', imgUrl: 'https://ej2.syncfusion.com/demos/src/splitter/images/margaret.png', id: '1' },
        { name: 'Laura', imgUrl: 'https://ej2.syncfusion.com/demos/src/splitter/images/laura.png', id: '2' },
        { name: 'Robert',  imgUrl: 'https://ej2.syncfusion.com/demos/src/splitter/images/robert.png', id: '3' },
        { name: 'Albert', imgUrl: 'https://ej2.syncfusion.com/demos/src/splitter/images/albert.png', id: '5' },
        { name: 'Michale', imgUrl: 'https://ej2.syncfusion.com/demos/src/splitter/images/michale.png', id: '4' }
    ];
    liElement = document.getElementById('ui-list');
    if (ej.base.Browser.isDevice) {
        liElement.classList.add('ui-mobile');
    }
    [[1010, 'data1'], [5010, 'data5'], [10010, 'data10'], [25010, 'data25']].forEach(function (ds) {
        var data = commonData.slice();
        dataSource[ds[1]] = data;
    });
    var template = '<div class="e-list-wrapper e-list-avatar">' +
        '<span class="e-avatar e-avatar-circle ${icon} ${$imgUrl ? \'hideUI\' : \'showUI\' }">' +
        '${icon}</span> <img class="e-avatar e-avatar-circle ${$imgUrl ? \'showUI\' : \'hideUI\' }" ' +
        'src="${imgUrl}" alt="${name}" />' +
        '<span class="e-list-content">${name}</span></div>';
    listObj = new ej.lists.ListView({
        dataSource: dataSource.data1,
        enableVirtualization: true,
        cssClass: 'e-list-template',
        height: 289,
        template: template,
        select: onSelect,
        actionComplete: function () {
            listObj.selectItem(dataSource.data1[0]);
        }
    });
    //Render initialized ListView component
    listObj.appendTo('#ui-list');
    function onSelect(e) {
        var listid = e.item.dataset.uid;
        // tslint:disable:max-line-length
        switch (listid) {
            case '1':
                splitterObj.paneSettings[1].content = '<div class="header-image"><div class="e-avatar e-avatar-circle e-avatar-xlarge"><img src="./src/splitter/images/margaret.png" alt="margeret"></div></div><div class="profile-name">Margeret Peacock</div><table><tr><td class="e-bold">Title</td><td>Sales Representative</td></tr><tr><td class="e-bold">Hire Date</td><td>11/15/1994</td></tr><tr><td class="e-bold">Address</td><td>507 - 20th Ave. E. Apt. 2A</td></tr><tr><td class="e-bold">City</td><td>Seattle</td></tr><tr><td class="e-bold">Phone</td><td>(206) 555-9857</td></tr></table>';
                break;
            case '2':
                splitterObj.paneSettings[1].content = '<div class="header-image"><div class="e-avatar e-avatar-circle e-avatar-xlarge"><img src="./src/splitter/images/laura.png" alt="laura"></div><div class="profile-name">Laura Callahan</div><table><tr><td class="e-bold">Title</td><td>Sales Representative</td></tr><tr><td class="e-bold">Hire Date</td><td>09/25/1993</td></tr><tr><td class="e-bold">Address</td><td>908 W. Capital Way</td></tr><tr><td class="e-bold">City</td><td>Tacoma</td></tr><tr><td class="e-bold">Phone</td><td>(206) 555-9482</td></tr></table>';
                break;
            case '3':
                splitterObj.paneSettings[1].content = '<div class="header-image"><div class="e-avatar e-avatar-circle e-avatar-xlarge"><img src="./src/splitter/images/robert.png" alt="robert"></div><div class="profile-name">Robert King</div><table><tr><td class="e-bold">Title</td><td>Sales Manager</td></tr><tr><td class="e-bold">Hire Date</td><td>03/20/1990</td></tr><tr><td class="e-bold">Address</td><td>14 Garrett Hill</td></tr><tr><td class="e-bold">City</td><td>London</td></tr><tr><td class="e-bold">Phone</td><td>(71) 555-4848</td></tr></table>';
                break;
            case '4':
                splitterObj.paneSettings[1].content = '<div class="header-image"><div class="e-avatar e-avatar-circle e-avatar-xlarge"><img src="./src/splitter/images/michale.png" alt="michale"></div><div class="profile-name">Michale Suyama</div><table><tr><td class="e-bold">Title</td><td>Inside Sales Coordinator</td></tr><tr><td class="e-bold">Hire Date</td><td>06/10/1998</td></tr><tr><td class="e-bold">Address</td><td>4726 - 11th Ave. N.E.</td></tr><tr><td class="e-bold">City</td><td>Seattle</td></tr><tr><td class="e-bold">Phone</td><td>(206) 555-1189</td></tr></table>';
                break;
            case '5':
                splitterObj.paneSettings[1].content = '<div class="header-image"><div class="e-avatar e-avatar-circle e-avatar-xlarge"><img src="./src/splitter/images/albert.png" alt="albert"></div><div class="profile-name">Albert Dodsworth</div><table><tr><td class="e-bold">Title</td><td>Sales Representative</td></tr><tr><td class="e-bold">Hire Date</td><td>10/5/1996</td></tr><tr><td class="e-bold">Address</td><td>7 Houndstooth Rd.</td></tr><tr><td class="e-bold">City</td><td>London</td></tr><tr><td class="e-bold">Phone</td><td>(71) 555-4444</td></tr></table>';
                break;
        }
    }
};