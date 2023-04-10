let posicaoImagem = 1;
visualizarImagem(posicaoImagem);

function maisSlide(p){
    visualizarImagem(posicaoImagem += p);
}

function imagemAtual(p){
    visualizarImagem(posicaoImagem = p);
}

function visualizarImagem(p){
    let imagens = document.getElementsByClassName("meuSlide");
    if(p > imagens.length){
        posicaoImagem = 1
    }
    if(p < 1){
        posicaoImagem = imagens.length
    }
    for (let i = 0; i<imagens.length; i++){
        imagens[i].style.display = "none";
    }
    imagens[posicaoImagem-1].style.display = "block";
}