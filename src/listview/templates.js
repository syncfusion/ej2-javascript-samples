/**
 * ListView Template Sample
 */
this.default = function () {

    var template = '<div ${if(category!==null)} class = "clearfix desc e-list-wrapper e-list-multi-line e-list-avatar" ${else} ' +
    'class = "clearfix e-list-wrapper e-list-multi-line e-list-avatar" ${/if}> ${if(imgSrc!=="")}' +
    '<img class="e-avatar" src="src/listview/images/${imgSrc}.png" alt="image"/> ' +
    '${/if} <span class="e-list-item-header">${title} </span>' +
    '<span class="e-list-content e-text-overflow" >${description} </span> ${if(timeStamp!=="")}  <div id="list-logo">' +
    '<span class="bookmark"></span> <span class="comments"></span>' +
    '<span class="share"></span></div> <div class="timeStamp">' +
    '${timeStamp} </div> ${/if} </div>';

    //Initialize ListView component
    var templateObj = new ej.lists.ListView({

        //Set defined data to dataSource property
        dataSource:  window.templateData,

        //Set defined customized template
        template: template,

        //Set header title
        headerTitle: 'Syncfusion Blog',

        cssClass: 'e-list-template',

        //Set true to show header title
        showHeader: true,

        //bind event to customize ListView
        actionComplete: onComplete

    });

    //Render initialized ListView component
    templateObj.appendTo('#listview_template');

    //Customizing the elements to perform our own events
    var share = document.getElementsByClassName('share');
    var comments = document.getElementsByClassName('comments');
    var bookmark = document.getElementsByClassName('bookmark');
    var timeStamp = document.getElementsByClassName('timeStamp');
    var i;
    for (i = 0; i < comments.length; i++) {
        comments[i].setAttribute('title', 'We can customize this element to perform our own action');
        comments[i].addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }

    for (i = 0; i < bookmark.length; i++) {
        bookmark[i].setAttribute('title', 'We can customize this element to perform our own action');
        bookmark[i].addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }

    for (i = 0; i < share.length; i++) {
        share[i].setAttribute('title', 'We can customize this element to perform our own action');
        share[i].addEventListener('click',function (event) {
            event.stopPropagation();
        });
    }

    for (i = 0; i < timeStamp.length; i++) {
        timeStamp[i].addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }

    function onComplete() {
        var listHeader = templateObj.element.childNodes[0];
        var header = listHeader.childNodes[0];
        if (header.style.display === 'none' || listHeader.childNodes.length === 3) {
            if (listHeader.childNodes[2] != null) {
                var childHeader = listHeader.childNodes[2];
                childHeader.remove();
            }
        } else {
            var headerEle = templateObj.element.querySelector('.e-list-header');
            var headerElement = templateObj.element.querySelector('#list-logo');
            var clone = headerElement.cloneNode(true);
            headerEle.appendChild(clone);
        }
    }
};
