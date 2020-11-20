var counter = 6;
var max = 5;
var problemArray = [];
var board = document.getElementById('chalkBoard');
document.getElementById('button').onclick = numberGenerator;

// numberGenerator()

function getRndInteger(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function numberGenerator(){
    for (let i = 0; i < 6; i++){
        let numerator = getRndInteger(5000, 550);
        let denominator = getRndInteger(5000, 550);
        if (numerator < denominator){
            let temp = numerator;
            numerator = denominator;
            denominator = temp;
        }
        mathGen(numerator, denominator)
    }
};

function mathGen(num1, num2){

    let switchNum = getRndInteger(max, 1)
    let problem = '';
    switch (switchNum){
        case 1 :
            problem = `${num1} x ${num2} =`;
            console.log(problem)
            break;
        case 2 :
            problem = `${num1} - ${num2} =`;
            console.log(problem)
            break;
        case 3 :
            problem = `${num1} + ${num2} =`;
            console.log(problem)
            break;
        case 4 :
            problem = "Al is a turkey";
            break;
    }
    problemArray.push(problem)
    counter --
    if(counter === 4){
        max = 3;
    }
    else if(counter <= 0){
        max = 5;
        counter = 6;
        chalkBoard()
    }
}


function chalkBoard(){
    board = document.getElementById('chalkBoard');
    board.innerHTML = "";
    problemArray.forEach((val)=>{
        var cardDiv = document.createElement('div');
        cardDiv.classList.add("card");
        cardDiv.classList.add("cardStyle");
        cardDiv.innerHTML = val;
        board.appendChild(cardDiv)
    })
    problemArray = [];
    console.log(problemArray)
}