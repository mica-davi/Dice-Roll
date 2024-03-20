let currentDice                                                            //variavel pra indicar qual botão foi clicado
const pastRolls = document.getElementById("past_rolls") 
const dice = document.getElementsByClassName("die")                        //dice = lista de todos os botões

for(let x = 0; x < dice.length; x++){ 
    dice[x].addEventListener("click", function(e){                         //loop cria um Event Listener em todos os botões
        currentDice = dice[x].getAttribute("data-sides")                   //passa o valor do data-sides para a variavel currentDice
        RollDice()                                                        
    })
}

function RollDice(){
    const roll = document.getElementById("result").value = Math.ceil(Math.random() * currentDice); //escolhe um valor entre 1 e currentDice e armazena em roll
    RegisterRoll(roll)
}

function RegisterRoll(value){
    const newRoll = document.createElement("p")     //cria um elemento
    newRoll.innerHTML = value                       //atribui a esse elemento o valor que caiu no dado
    pastRolls.prepend(newRoll)                      //inseri o elemento como primeiro filho da div past_rolls
}

