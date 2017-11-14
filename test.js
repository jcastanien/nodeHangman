var inquirer = require ("inquirer")
function game(){
    inquirer.prompt([
    
        {
            type: "input",
            name: "letter",
            message: "Guess a letter"
        }
    ]).then(function(user) {
        if(randomWordGen(user.letter) >= [1]) {
            console.log("Correct!")
            //append letter to array of blanks for word
        } else {
            console.log("Incorrect!")
            //display array of blanks unchanged
            game();
        }
    })
    }
    game();
    

function randomWordGen(){
    var wordList = ["philadelphia", "new york", "dallas", "atlanta", "miami", "chicago"]
    var word = wordList[Math.floor(Math.random() * wordList.length)];
    var wordSplit = word.split("");
    console.log(wordSplit);
    var char = [];
        for (var i = 0; i < wordSplit.length; i++){
            if (wordSplit[i] === "a"){
                char.push(i+1);
            }
           // console.log(wordSplit[i]);
            console.log(char);
    }
}
