function calculoIMC(params) {
    var vForm = window.document.getElementById("vForm");
    var vNome = window.document.getElementById("nome");
    var vPeso = window.document.getElementById("peso").value;
    var vAltura = window.document.getElementById("altura").value;
    var vResultado = window.document.getElementById("resultado");
    var vAux;

	vPeso = vPeso.replace(",",".");
	vAltura = vAltura.replace(",",".");
    //alert(vNome.textContent.value.toString());

    if (vPeso <= 0 || vAltura <= 0) {
        //alert("Obrigatório preenchimento dos campos peso e altura!");
        window.document.getElementById("erros").innerText = "Obrigatório preenchimento dos campos peso e altura!";
        return;
    };

    vAux = parseFloat(vPeso) / (parseFloat(vAltura) + parseFloat(vAltura));

    vResultado.value = vNome.value + " seu IMC é " + vAux.toFixed(2);
    window.document.getElementById("erros").innerText = "";

    //window.alert("Cáculo finalizado");
}