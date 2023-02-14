import geraSenha from "./geradores.js";

const qtdCaracteres = document.querySelector('#qtd');
const addnumber = document.querySelector('#add-numero');
const addUppercase = document.querySelector('#add-maiusculas');
const addLowercase = document.querySelector('#add-minusculas');
const addSymbol = document.querySelector('#add-simbolos');
const enviarBotao = document.querySelector('#enviar');
const resultado = document.querySelector('.resultado');
const checkbox = document.querySelector('.checkbox')
enviarBotao.addEventListener('click', () => {
    resultado.innerHTML = `Senha: ${gera()}`
})

function gera(){

    if(qtdCaracteres.value <= 0){
        alert('Por favor, informe uma quantidade de 1 até 15.');
        return 'Não foi informado valores corretos, informe novamente.';
    }

    if(qtdCaracteres.value > 15){
        alert('Por favor, informe uma quantidade de até 15 caracteres.')
        return 'Não foi informado valores corretos, informe novamente.';
    }

    const botaoSenha = geraSenha(
        qtdCaracteres.value,
        addnumber.checked,
        addUppercase.checked,
        addLowercase.checked,
        addSymbol.checked
    )

    return botaoSenha || '';
}