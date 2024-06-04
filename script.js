





const form = document.getElementById("form");
const InputNome = document.getElementById("input-nome");
const InputTel = document.getElementById("input-tel");
let linhas = '';

let numeros = [];

form.addEventListener("submit",function(e){
    e.preventDefault();
    AdicionarLinhas();
    AtualizarTabela();
})

AdicionarLinhas = function(){
    if (numeros.includes(InputTel.value)){
        alert("Ops! Esse número já foi adicionado a lista.");
    }else{
        let line = '<tr>';
        line += `<td> ${InputNome.value}</td>`;
        line += `<td> ${InputTel.value}</td>`;
        line += `</tr>`;
        linhas += line;
        numeros.push(InputTel.value);
    }

    InputNome.value = '';
    InputTel.value = '';
    
}

AtualizarTabela = function(){
    const tabela = document.querySelector("tbody");
    tabela.innerHTML = linhas;
}