
function genNum() {
   return Math.floor(Math.random() * 1000) + 1;
}

let randomNum = genNum();
let attemptsCount = 0;

function guessNum() {
    attemptsCount++;
    const input = parseInt(document.forms[0].elements['input'].value);

   
    
    if (input == randomNum) {
        document.getElementById("result").innerHTML = "GUESSED RIGHT!";
        document.getElementById("attempts").innerHTML = `rigth guess attempts: ${attemptsCount}`;
        clearText();
    } else if (input >= randomNum) {
        document.getElementById("result").innerHTML = "too high!!!";
        document.getElementById("attempts").innerHTML = `attempts: ${attemptsCount}`;
        clearText();
    } else if (input <= randomNum) {
        document.getElementById("result").innerHTML = "too low!!!";
        document.getElementById("attempts").innerHTML = `attempts: ${attemptsCount}`;
        clearText();
    }
}

function clearText() {
    document.forms[0].elements['input'].value = "";
}