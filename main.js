const signs = document.getElementsByClassName("sign");
let signValue;
let dataSides;
let diceAmountDisplay;

for(let i = 0; i < signs.length; i++){
    signs[i].addEventListener('click', function (e){
        signValue = signs[i].innerHTML
        dataSides = signs[i].getAttribute("data-sides")
        diceAmountDisplay = document.querySelector("p[data-sides='" + dataSides + "']")
        ChangeDiceAmount()
    })
}

function ChangeDiceAmount(){
    diceAmountDisplay.innerHTML = parseInt(diceAmountDisplay.innerHTML) + parseInt(signValue+1)
    if(diceAmountDisplay.innerHTML < 0){
        diceAmountDisplay.innerHTML = 0;
    }

}
