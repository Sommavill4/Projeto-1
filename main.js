const botoes = document.querySelectorAll("button")
console.log(botoes)

botoes.forEach(function(botao){
    let curtiu =false;
    botao.addEventListener("click", botaoClicado)

    funcion botaoClicado(){
        console.log("botao clicado")
    }
})