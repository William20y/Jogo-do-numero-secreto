let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // busca no html a tag h1
    campo.innerHTML = texto; // insere dentro da tag(h1) o texto desejado 
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
// document.query sigfnica 
function exibirMensagemInical(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
exibirMensagemInical();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavratentativa}`
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor!')
        } else {
            exibirTextoNaTela('p','O numero secreto é maior')
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantitadadeDeElementosNaLista    =listaDeNumerosSorteados.length;

   if(quantitadadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = []
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInical();
    document.getElementById('reiniciar').setAttribute('disabled',true )
}



//push adiciona itens ao final da lista, frutas.push("morango"); adicionou morango a lista
//pop tira o ultimo item da lista frutas.pop("")
//.length ve a quantidade de itens da lista console.log(frutas.length); mostra quantos itens tem na lista


//depois de termimar de codar e querer subir a as atualizacoes usamos 3 codigos no terminal do proprio vscode
//git add para preparar alterações
//git commit -m "sua mensagem aqui" resgitra oque vc fez de atualização
//git push origin main envia tudo para o git hub
//git status verificar quais arquivos foram modificados
//git pull baixar as mudanças foram feitas