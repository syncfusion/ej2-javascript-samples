/**
 * Default Dialog sample
 */
this.default = function () {
    var initRte = true;
    var initchart = true;
    var initschedule = true;
    var dialogObj = new ej.popups.Dialog({
        header: 'Syncfusion Components inside Dialog',
        target: document.getElementById('target'),
        animationSettings: { effect: 'None' },
        showCloseIcon: true,
        width: '700px',
        buttons: [{
          click: dlgButtonClick,
          buttonModel: { content: 'OK', isPrimary: true }
        },
        {
          click: dlgButtonClick,
          buttonModel: { content: 'Cancel', cssClass: 'e-flat' }
        }],
        open: dialogOpen,
        close: dialogClose
      });
      dialogObj.appendTo('#defaultDialog');
      var tabObj = new ej.navigations.Tab({
        items: [
          {
            header: { 'text': 'Grid' }, content: '#Grid'
          },
          {
            header: { 'text': 'Scheduler' }, content: '#scheduleComponent'
          },
          {
            header: { 'text': 'Chart' }, content: '#chartComponent'
          },
          {
            header: { 'text': 'Rich Text Editor' }, content: '#rteComponent'
          },
          {
            header: { 'text': 'Forms' }, content: '#formComponent'
          }
        ],
        selected: selected
      });
      //Render initialized Tab component
      tabObj.appendTo('#tab_default');
      var gridData = new ej.data.DataManager(window.orderData).executeLocal(new ej.data.Query().take(15));
      var grid = new ej.grids.Grid(
        {
          dataSource: gridData,
          allowPaging: true,
          columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
            { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'Right' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
          ],
          pageSettings: { pageSizes: true, pageSize: 5 }
        });
      grid.appendTo('#Grid');
      var data = new ej.base.extend([], window.scheduleData, null, true);
      var scheduleObj = new ej.schedule.Schedule({
        height: '300px',
        selectedDate: new Date(2019, 0, 10),
        eventSettings: { dataSource: data },
        dragStart: function (args) {
          args.navigation.enable = true;
        }
      });
      scheduleObj.appendTo('#Schedule');
      var defaultRTE = new ej.richtexteditor.RichTextEditor({});
      defaultRTE.appendTo('#defaultRTE');
      // Button has been created to open the Dialog
      var button = new ej.buttons.Button({});
      button.appendTo('#dialogBtn');
      var chart = new ej.charts.Chart({
      
        //Initializing Primary X Axis
        primaryXAxis: {
          valueType: 'DateTime',
          labelFormat: 'y',
          intervalType: 'Years',
          edgeLabelPlacement: 'Shift',
          majorGridLines: { width: 0 }
        },
      
        //Initializing Primary Y Axis
        primaryYAxis:
        {
          labelFormat: '{value}%',
          rangePadding: 'None',
          minimum: 0,
          maximum: 100,
          interval: 20,
          lineStyle: { width: 0 },
          majorTickLines: { width: 0 },
          minorTickLines: { width: 0 }
        },
        chartArea: {
          border: {
            width: 0
          }
        },
        //Initializing Chart Series
        series: [
          {
            type: 'Line',
            dataSource: [
              { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
              { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
              { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
              { x: new Date(2011, 0, 1), y: 70 }
            ],
            xName: 'x', width: 2, marker: {
              visible: true,
              width: 10,
              height: 10
            },
            yName: 'y', name: 'Germany',
          },
          {
            type: 'Line',
            dataSource: [
              { x: new Date(2005, 0, 1), y: 28 }, { x: new Date(2006, 0, 1), y: 44 },
              { x: new Date(2007, 0, 1), y: 48 }, { x: new Date(2008, 0, 1), y: 50 },
              { x: new Date(2009, 0, 1), y: 66 }, { x: new Date(2010, 0, 1), y: 78 }, { x: new Date(2011, 0, 1), y: 84 }
            ],
            xName: 'x', width: 2, marker: {
              visible: true,
              width: 10,
              height: 10
            },
            yName: 'y', name: 'England',
          }
        ],
      
        //Initializing Chart title
        title: 'Inflation - Consumer Price',
        //Initializing User Interaction Tooltip
        tooltip: {
          enable: true
        },
        height: "300px",
        load: function (args) {
            var lineTheme = location.hash.split('/')[1];
            lineTheme = lineTheme ? lineTheme: 'Material';
            args.chart.theme = (lineTheme.charAt(0).toUpperCase() + 
                lineTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        }
      });
      chart.appendTo('#chart');
      document.getElementById('dialogBtn').onclick = function () {
        dialogObj.show();
      };
      
      // Navigate to corresponding link
      function dlgButtonClick() {
        dialogObj.hide();
      }
      
      // 'Open' Button will be shown, if Dialog is closed
      function dialogClose() {
        document.getElementById('dialogBtn').style.display = 'block';
      }
      
      // 'Open' Button will be hidden, if Dialog is opened
      function dialogOpen() {
        document.getElementById('dialogBtn').style.display = 'none';
      }
      function selected(args) {
        if (args.selectedIndex == 1 && initschedule) {
          scheduleObj.refresh();
          initschedule = false;
        }
        if (args.selectedIndex == 2 && initchart) {
          chart.refresh();
          initchart = false;
        }
        else if (args.selectedIndex == 3 && initRte) {
          defaultRTE.refresh();
          initRte = false;
        }
      }
      // Initialize Submit button
      var buttonFormValidate = new ej.buttons.Button({ isPrimary: true });
      buttonFormValidate.appendTo('#validateSubmit');
      // Initialize Reset button
      var buttonReset = new ej.buttons.Button({});
      buttonReset.appendTo('#resetbtn');
      // Initialize Custom placement 
      var option = {
        rules: {
          // Initialize the CustomPlacement.
          User: { required: true },
          DOB: { date: [true, 'Enter valid format'] },
          City: { required: true },
          State: { required: true },
        }
      };
      // Initialize Form validation
      var formObj;
      formObj = new ej.inputs.FormValidator('#formId', option);
      var formId = document.getElementById('formId');
      document.getElementById('formId').addEventListener("submit", function (e) {
        e.preventDefault();
        if (formObj.validate()) {
            alert('Customer details added!');
            formObj.reset();
        }
    });
      var datepickerObject = new ej.calendars.DatePicker({
        placeholder: 'Date of Birth'
      });
      // render initialized datepicker
      datepickerObject.appendTo('#dob');      
    };
