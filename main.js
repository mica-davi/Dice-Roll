const signs = document.getElementsByClassName("sign"); //referencia a todos os botões de + e -
let signValue;  //variavel que indica se deve adicionar ou subtrair da quantidade
let dataSides;  //dataSides indica em qual dos dados que deve ser adicionado ou subtraido um de acordo com a quantidade de lados
let diceAmountDisplay;  //referencia ao display do valor de dados a serem rolados

for(let i = 0; i < signs.length; i++){
    signs[i].addEventListener('click', function (e){    //adiciona um event listener a cada um dos botões da pagina
        signValue = signs[i].innerHTML                  //passa para a variavel se é + ou se é -
        dataSides = signs[i].getAttribute("data-sides") //passa para a variavel o numero de lados do dado que deve ser modificado
        diceAmountDisplay = document.querySelector("p[data-sides='" + dataSides + "']") //referencia ao texto que vai ser modificado
        ChangeDiceAmount()
    })
}

function ChangeDiceAmount(){
    diceAmountDisplay.innerHTML = parseInt(diceAmountDisplay.innerHTML) + parseInt(signValue+1) //soma o valor de diceAmountDisplay ao valor de "signValue" + "1"
    if(diceAmountDisplay.innerHTML < 0){    
        diceAmountDisplay.innerHTML = 0;    //se for menor que 0, volta para zero
    }

}
