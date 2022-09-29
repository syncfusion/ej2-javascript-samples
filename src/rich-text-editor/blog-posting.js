/**
 * Rich Text Editor Blog-post sample
 */
this.default = function () {
    var button1 = new ej.buttons.Button({ isPrimary: true });
    button1.appendTo('#rteSubmit');
    var button2 = new ej.buttons.Button();
    button2.appendTo('#rteCancel');
    var defaultRTE = new ej.richtexteditor.RichTextEditor({ placeholder: 'Write a reply' });
    defaultRTE.appendTo('#defaultRTE');
    var buttonEle = document.getElementById('rteSubmit');
    var cancelEle = document.getElementById('rteCancel');
    cancelEle.addEventListener('click', function (e) {
        var answerElement = defaultRTE.contentModule.getEditPanel();
        answerElement.innerHTML = '';
        defaultRTE.value = '';
        defaultRTE.dataBind();
        defaultRTE.refresh();
    });
    var empCount = 0;
    buttonEle.addEventListener('click', function (e) {
        var answerElement = defaultRTE.contentModule.getEditPanel();
        var comment = answerElement.innerHTML;
        var empList = ['emp1', 'emp2', 'emp3'];
        var nameListList = ['Anne Dodsworth', 'Janet Leverling', 'Laura Callahan'];
        if (comment !== null && comment.trim() !== '' && (answerElement.innerText.trim() !== '' ||
        !ej.base.isNullOrUndefined(answerElement.querySelector('img')) || !ej.base.isNullOrUndefined(answerElement.querySelector('table')))) {
            var answer = document.querySelector('.answer');
            var cloneAnswer = answer.cloneNode(true);
            var authorName = cloneAnswer.querySelector('.authorname');
            var logo = cloneAnswer.querySelector('.logos');
            logo.classList.remove('logos');
            if (empCount < 3) {
                logo.classList.add(empList[empCount]);
                logo.classList.add('blog-avatar');
                authorName.innerHTML = nameListList[empCount];
                empCount++;
            }
            else {
                logo.classList.add('logo');
                logo.classList.add('blog-avatar');
                authorName.innerHTML = 'User';
            }
            var timeZone = cloneAnswer.querySelector('.detailsAnswer');
            var day = getMonthName(new Date().getMonth()) + ' ' + new Date().getDate();
            var hr = new Date().getHours() + ':' + new Date().getMinutes();
            if (new Date().getHours() > 12) {
                hr = hr + ' PM';
            }
            else {
                hr = hr + ' AM';
            }
            timeZone.innerHTML = 'Answered on ' + day + ', ' + new Date().getFullYear() + ' ' + hr;
            var postContent = cloneAnswer.querySelector('.posting');
            postContent.innerHTML = comment;
            var postElement = document.querySelector('.answerSection');
            postElement.appendChild(cloneAnswer);
            var countEle = document.querySelector('.answerCount');
            var count = parseInt(countEle.innerHTML, null);
            count = count + 1;
            countEle.innerHTML = count.toString() + ' Answers';
            answerElement.innerHTML = '';
            defaultRTE.value = '';
            defaultRTE.dataBind();
            defaultRTE.refresh();
        }
    });
    function getMonthName(index) {
        var month = [];
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';
        return month[index];
    }
};