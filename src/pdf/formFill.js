this.default=function(){};
function viewTemplate() {   
	var form = document.createElement("form");
	form.name ="form1";
	form.method= "post";
	form.action ="//js.syncfusion.com/demos/ejServices/api/PDF/GetFormFillTemplate"; 
    document.body.append(form);	
    form.submit();
}
function generatePDF() {   
	var form = document.createElement("form");
	form.name ="form1";
	form.method= "post";
	form.action ="//js.syncfusion.com/demos/ejServices/api/PDF/GenerateFormFillTemplate"; 
    document.body.append(form);	
    form.submit();
}