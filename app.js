let listaDeNumerosSorteados = [];
let numeroLimite = 4;
let tentativas = 1;
let numeroSecreto = getNumeroSecreto();

adicionarTextoNaTela("h1", "Jogo do número secreto");
let mensagemHtml = `Adivinhe o número entre 1 e ${numeroLimite}`;
adicionarTextoNaTela("p", mensagemHtml);

function verificarChute() {
    let valorDigitado = parseInt(document.querySelector("input").value);
    console.log(numeroSecreto);
    console.log(valorDigitado);

    if (valorDigitado == numeroSecreto) 
    {
        adicionarTextoNaTela("h1", "Você acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagem = `Você acertou com ${tentativas} ${palavraTentativa}`;
        adicionarTextoNaTela('p', mensagem);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else if(valorDigitado < numeroSecreto) {
        adicionarTextoNaTela("p", "O valor digitado é menor do que o número secreto!");
        limparCampo();
    }
    else  
    {
        adicionarTextoNaTela("p", "O valor digitado é maior do que o número secreto!");
        limparCampo();
    }

    tentativas ++;
}

function adicionarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function getNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosNaLista == numeroLimite)
        listaDeNumerosSorteados = [];

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) 
        return getNumeroSecreto();
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let valorCampo = document.querySelector("input");
    valorCampo.value = "";
}

function novoJogo() {
    adicionarTextoNaTela("h1", "Jogo do número secreto");
    adicionarTextoNaTela("p", "Adivinhe o número entre 1 e 10");
    numeroSecreto = getNumeroSecreto();
    tentativas = 1;
    limparCampo();
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}
