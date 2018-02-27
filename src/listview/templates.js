/**
 * ListView Template Sample
 */
this.default = function () {

    var template = '<div id="postContainer" ${if(category!==null)} class = "clearfix desc"${else}' +
    'class = "clearfix" ${/if}> ${if(imgSrc!=="")} <div id="postImg"> <img src=${imgSrc} /> </div>' +
    '${/if}  <div id="content"> <div id="heading">${title} </div>' +
    '<div class="description" >${description} </div> ${if(timeStamp!=="")}  <div id="info"><div id="logo"> <div id="share">' +
    '<span class="share"></span> </div> <div id="comments"> <span class="comments"></span> </div>' +
    '<div id="bookmark"> <span class="bookmark"></span> </div></div> <div class="timeStamp">' +
    '${timeStamp} </div> ${/if} </div> </div></div>';

    //Initialize ListView component
    var templateObj = new ej.lists.ListView({

        //Set defined data to dataSource property
        dataSource:  window.templateData,

        //Set defined customized template
        template: template,
        
        //Set header title
        headerTitle: 'Syncfusion Blog',

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
    var description = document.getElementsByClassName('description');
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

    for (i = 0; i < description.length; i++) {
        description[i].addEventListener('click', function (event) {
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
            var headerElement = templateObj.element.querySelector('#info');
            var clone = headerElement.cloneNode(true);
            headerEle.appendChild(clone);
        }
    }
};
