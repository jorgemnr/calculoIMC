function calculoIMC(params) {
    var vForm = window.document.getElementById("vForm");
    var vNome = window.document.getElementById("nome");
    var vPeso = window.document.getElementById("peso");
    var vAltura = window.document.getElementById("altura");
    var vResultado = window.document.getElementById("resultado");
    var vAux;

	//vPeso := vPeso.replace(",",".");
    //alert(vNome.textContent.value.toString());

    if (vPeso.value <= 0 || vAltura.value <= 0) {
        //alert("Obrigatório preenchimento dos campos peso e altura!");
        window.document.getElementById("erros").innerText = "Obrigatório preenchimento dos campos peso e altura!";
        return;
    };

    vAux = parseFloat(vPeso.value) / (parseFloat(vAltura.value) + parseFloat(vAltura.value));

    vResultado.value = vNome.value + " seu IMC é " + vAux.toFixed(2);
    window.document.getElementById("erros").innerText = "";

    //window.alert("Cáculo finalizado");
}