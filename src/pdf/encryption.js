this.default=function(){};
function generatePDF() {
    var option1 = document.querySelector('input[name = "encryptionType"]:checked').value;
     var form = document.createElement("form");
	 form.name = "form1";
	 form.method = "post";
	 form.action = "//js.syncfusion.com/demos/ejServices/api/PDF/GenerateEncryptDocument";
     var inputAttr = document.createElement("input");
	 inputAttr.name = "ImportType";
	 inputAttr.type="hidden";
	 inputAttr.value = option1;    
    form.append(inputAttr);
    document.body.append(form);
    form.submit();
}      