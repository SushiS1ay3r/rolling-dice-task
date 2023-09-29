function initialize()
{
    dice1 = document.getElementById("diceOne");
    dice2 = document.getElementById("diceTwo");
    totalVal = document.getElementById("totalValue");
    generateDiceNumber();
}

function generateDiceNumber()
{
    randomNum = Math.random() * (6) + 1; // Java Equation for Randomness
    randomNum = parseInt(randomNum);

    randomNum2 = Math.random() * (6) + 1; // Java Equation for Randomness
    randomNum2 = parseInt(randomNum2);
    display();
}

function display()
{ 
    dice1.innerHTML = "Dice 1: Rolling...";
    dice2.innerHTML = "Dice 2: Rolling...";
    totalVal.innerHTML = "";

    setTimeout(function() {
        dice1.innerHTML = "Dice 1: " + randomNum;
        dice2.innerHTML = "Dice 2: " + randomNum2;
        totalVal.innerHTML = "Total Value: " + (randomNum + randomNum2);
    }, 3000);

   
    
    
}
