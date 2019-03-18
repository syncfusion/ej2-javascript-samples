this.default = function () {
    var prevButton = new ej.buttons.Button({
        isPrimary: true
    });
    prevButton.appendTo('#prevBtn');

    var nextButton = new ej.buttons.Button({
        isPrimary: true
    });
    nextButton.appendTo('#nextBtn');


    var nextBtn = document.getElementById("nextBtn");
    nextBtn.addEventListener("click", function () {
        tabNav(1);
    });

    var prevBtn = document.getElementById("prevBtn");
    prevBtn.addEventListener("click", function () {
        tabNav(-1);
    });

    var datepicker = new ej.calendars.DatePicker({
        placeholder: 'Choose Your DOB'
    });
    datepicker.appendTo('#datepicker');


    var radioButton = new ej.buttons.RadioButton({
        label: "Male",
        name: 'Gender',
        value: 'm',
        checked: true
    });
    radioButton.appendTo('#radio1');

    radioButton = new ej.buttons.RadioButton({
        label: 'Female',
        name: 'Gender',
        value: 'fm'
    });
    radioButton.appendTo('#radio2');

    var options = {
        customPlacement: function (inputElement, errorElement) {
            inputElement.parentElement.appendChild(errorElement);
        }
    };

    var formObj = new ej.inputs.FormValidator("#formId", options);
    
    var currentTab = 0;
    displayTab(currentTab);

    function displayTab(n) {
        var x = document.getElementsByClassName("tab");
        if (n === 3) {
            n = 0;
            currentTab = 0;
        }
        x[n].style.display = "block";
        if (n === 0) {
            document.getElementById("prevBtn").style.display = "none";
        } else {
            document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
            document.getElementById("nextBtn").innerHTML = "Submit";
        } else {
            document.getElementById("nextBtn").innerHTML = "Next";
        }

    }

    function tabNav(n) {
        var x = document.getElementsByClassName("tab");
        if (n == 1 && !validateForm()) return false;
        x[currentTab].style.display = "none";
        currentTab = currentTab + n;
        if (currentTab >= x.length) {
            if (formObj.validate()) {
                displayTab(0);
                alert('Account has been created.');
                formObj.reset();
            }
        }
        displayTab(currentTab);
    }

    function validateForm() {
        var x, y, i, valid = true;
        x = document.getElementsByClassName("tab");
        y = x[currentTab].getElementsByTagName("input");
        for (i = 0; i < y.length; i++) {
            formObj.validate(y[i].getAttribute("name"));
            if (y[i].getAttribute("aria-invalid") === 'true') {
                valid = false;
            }
        }
        return valid;
    }
};