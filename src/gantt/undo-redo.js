this.default = function () {
  var ganttChart = new ej.gantt.Gantt({
    dataSource: window.undoRedoData,
    height: '650px',
    rowHeight:46,
    taskbarHeight:25,
    highlightWeekends: true,
    showColumnMenu: true,
    enableContextMenu: true,
    enableUndoRedo: true,
    allowSorting: true,
    allowResizing: true,
    allowReordering: true,
    actionComplete: actionComplete,
    resizeStop: updateBadges,
    undoRedoActions: [
      "Sorting",
      "Add",
      "ColumnReorder",
      "ColumnResize",
      "ColumnState",
      "Delete",
      "Edit",
      "Filtering",
      "Indent",
      "Outdent",
      "NextTimeSpan",
      "PreviousTimeSpan",
      "RowDragAndDrop",
      "Search",
    ],
    taskFields: {
      id: "TaskID",
      name: "TaskName",
      startDate: "StartDate",
      endDate: "EndDate",
      duration: "Duration",
      progress: "Progress",
      dependency: "Predecessor",
      child: "subtasks",
    },
    editSettings: {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true,
    },
    columns: [
      { field: "TaskID", headerText: "ID", width: 100 },
      { field: "TaskName", headerText: "Name", width: 250 },
      { field: "StartDate" },
      { field: "EndDate" },
      { field: "Duration" },
      { field: "Progress" },
      { field: "Predecessor", headerText: "Dependency" },
    ],
    toolbarClick: function (args) {
      if (args.item.text === "Undo") {
        ganttChart.undo();
      } else if (args.item.text === "Redo") {
        ganttChart.redo();
      }
      updateBadges();
    },
    toolbar: [
      "Add",
      "Edit",
      "Update",
      "Delete",
      "Cancel",
      { text: "Undo", tooltipText: "Undo", id: "Undo" },
      { text: "Redo", tooltipText: "Redo", id: "Redo" },
    ],
    treeColumnIndex: 1,
    labelSettings: { rightLabel: "TaskName" },
    splitterSettings: {
      columnIndex: 2
    },
    projectStartDate: new Date('06/24/2025'),
    projectEndDate: new Date('08/31/2025'),
  });
  ganttChart.appendTo("#UndoRedo");
 
  function actionComplete() {
    updateBadges();
  }
 
 
var ganttObj = document.getElementsByClassName("e-gantt")[0].ej2_instances[0];
var toolbar = document.querySelector(".e-gantt-toolbar");
 
if (toolbar) {
  var undoBtn = toolbar.querySelector('[aria-label="Undo"]');
  var redoBtn = toolbar.querySelector('[aria-label="Redo"]');
 
  if (undoBtn) {
    undoBtn.classList.add("e-overlay");
  }
  if (redoBtn) {
    redoBtn.classList.add("e-overlay");
  }
 
  if (redoBtn.classList.contains("e-overlay") && undoBtn.classList.contains("e-overlay")) {
    undoBtn.style.pointerEvents = "none";
    redoBtn.style.pointerEvents = "none";
    undoBtn.style.boxShadow = "0 0 0 transparent";
    redoBtn.style.boxShadow = "0 0 0 transparent";
  }
  else {
      undoBtn.style.boxShadow = "";
        redoBtn.style.boxShadow = "";
  }
}
 
function updateBadges() {
  var undoCount = ganttObj.getUndoActions().length;
  var redoCount = ganttObj.getRedoActions().length;
 
  if (undoBtn) {
    if (undoCount === 0) {
      undoBtn.classList.add("e-overlay");
      undoBtn.style.cursor = "default";
      undoBtn.style.pointerEvents = "none";
    } else {
      undoBtn.classList.remove("e-overlay");
      undoBtn.style.cursor = "pointer";
      undoBtn.style.pointerEvents = "auto";
    }
  }
 
  if (redoBtn) {
    if (redoCount === 0) {
      redoBtn.classList.add("e-overlay");
      redoBtn.style.cursor = "default";
      redoBtn.style.pointerEvents = "none";
   
    } else {
      redoBtn.classList.remove("e-overlay");
      redoBtn.style.cursor = "pointer";
      redoBtn.style.pointerEvents = "auto";
   
    }
  }
 
if (redoBtn.classList.contains("e-overlay")) {
  redoBtn.style.boxShadow = "0 0 0 transparent";
} else {
  redoBtn.style.boxShadow = ""; // Clears inline style, allowing CSS to apply
}
 
if (undoBtn.classList.contains("e-overlay")) {
  undoBtn.style.boxShadow = "0 0 0 transparent";
} else {
  undoBtn.style.boxShadow = ""; // Clears inline style
}
 
 
  setBadge(undoBtn, undoCount);
  setBadge(redoBtn, redoCount);
}
 
 
  function setBadge(button, count) {
    if (!button) return;
    var badge = button.querySelector(".e-badge.e-badge-danger.e-badge-notification.e-badge-overlap.e-badge-circle");
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "e-badge e-badge-danger e-badge-notification e-badge-overlap e-badge-circle";
      button.appendChild(badge);
    }
    var tailwind3 = document.body.classList.contains('tailwind3') ||
    document.body.classList.contains('tailwind3-dark');
    var bootstrap5 = document.body.classList.contains('bootstrap5.3') ||
    document.body.classList.contains('bootstrap5.3-dark');
    var material3 = document.body.classList.contains('material3-dark') ||
    document.body.classList.contains('material3');
    var fluent2 = document.body.classList.contains('fluent2-dark') ||
    document.body.classList.contains('fluent2');
    var fluent = document.body.classList.contains('fluent-dark') ||
    document.body.classList.contains('fluent');
    if (tailwind3){
      badge.style.backgroundColor = "#c2410c";
      badge.style.color = "#fff";
      badge.style.marginTop = "3px";
      badge.style.paddingTop = "2px";
 
    }
    else if (bootstrap5){
      badge.style.backgroundColor = "#ffc107";
      badge.style.color = "#000";
      badge.style.paddingTop = "3px";
      badge.style.marginTop = "6px";
 
    }
    else if (fluent2){
      badge.style.backgroundColor = "#fde300";
      badge.style.color = "#000";
      badge.style.paddingTop = "4px";
      badge.style.marginTop = "6px";
    }
    else if(fluent) {
      badge.style.backgroundColor = "#fde300";
      badge.style.color = "#000";
      badge.style.paddingTop = "2px";
      badge.style.marginTop = "8px";
    }
    else if (material3){
      badge.style.backgroundColor = "#b3261e";
      badge.style.color = "#fff";
      badge.style.paddingTop = "3px";
 
    }
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-block" : "none";
  }
};