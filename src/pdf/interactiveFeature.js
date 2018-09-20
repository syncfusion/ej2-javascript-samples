this.default=function(){};
function generatePDF() {   
	var form = document.createElement("form");
	form.name ="form1";
	form.method= "post";
	form.action ="//js.syncfusion.com/demos/ejServices/api/PDF/GenerateInteractiveFeature"; 
    document.body.append(form);	
    form.submit();
}