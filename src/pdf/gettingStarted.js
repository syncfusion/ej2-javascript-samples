this.default=function(){};
function generatePDF() {    
    var form = document.createElement("form");
	form.method = "post";
	form.action = "//js.syncfusion.com/demos/ejServices/api/PDF/GeneratePDFDocument";   
    document.body.append(form);	
    form.submit();
}	