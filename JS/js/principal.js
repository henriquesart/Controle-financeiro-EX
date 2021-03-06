titulo = document.querySelector(".titulo");
titulo.textContent = "Controle Financeiro";

var receita = document.querySelector("#primeira-receita")
var valor = receita.querySelector(".info-valor");
var saldo = receita.querySelector(".info-saldo");
saldo.textContent = valor.textContent;

var receita2 = document.querySelector("#segunda-receita")
var valor2 = receita2.querySelector(".info-valor");
var saldo2 = receita2.querySelector(".info-saldo");
saldo2.textContent = parseFloat(valor.textContent) + parseFloat(valor2.textContent);

var receita3 = document.querySelector("#terceira-receita")
var valor3 = receita3.querySelector(".info-valor");
var saldo3 = receita3.querySelector(".info-saldo");
saldo3.textContent = parseFloat(saldo2.textContent) + parseFloat(valor3.textContent);

var receita4 = document.querySelector("#quarta-receita")
var valor4 = receita4.querySelector(".info-valor");
var saldo4 = receita4.querySelector(".info-saldo");
saldo4.textContent = parseFloat(saldo3.textContent) + parseFloat(valor4.textContent);

var receita5 = document.querySelector("#quinta-receita")
var valor5 = receita5.querySelector(".info-valor");
var saldo5 = receita5.querySelector(".info-saldo");
let saldos5 = parseFloat(saldo4.textContent) + parseFloat(valor5.textContent)
saldo5.textContent = saldos5.toFixed(2);

if(saldo5.textContent < 0){
    saldo5.style.color = "#cc2222";
}

var botao = document.querySelector("#adicionar-receita");
botao.addEventListener("click", function(evento){
    evento.preventDefault();
    form = document.formulario;
    var form = document.formulario;
    var descricao = form.descricao.value;
    var categoria = form.categoria.value;
    var data = form.data.value;
    var valor = parseFloat(form.valor.value);
    var erros = documento.querySelector(".erros");

    limparErros(erros);

    if (descricao.length <=0) {
        erros.textContent += "*A descrição é obrigatória.\n"
    }

    if (categoria.length <=0) {
        erros.textContent += "*A categoria é obrigatória.\n"
    }

    if (data.length <=0) {
        erros.textContent += "*A data é obrigatória.\n"
    }

    if (valor.length ==0) {
        erros.textContent += "*O valor deve ser diferente de zero(0).\n"
    }

 });

 function limparErros(erros) {
     erros.innerHTML = "";
 }