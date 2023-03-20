
function genNum() {
   return Math.floor(Math.random() * 1000) + 1;
}

let randomNum = genNum();
let attemptsCount = 0;

function guessNum() {
    attemptsCount++;
    const input = parseInt(document.forms[0].elements['input'].value);

   if(input>=1 && input<= 1000 )
   {
    if (input == randomNum) {
        document.getElementById("result").innerHTML = "GUESSED RIGHT!";
        document.getElementById("attempts").innerHTML = `rigth guess at ${attemptsCount} attempts !! `;
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
   else{
      document.getElementById("result").innerHTML = "Enter number between 1 to 1000!!!";
   }
}

function clearText() {
    document.forms[0].elements['input'].value = "";
}
