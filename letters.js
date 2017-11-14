var inquirer = require ("inquirer")


function game(){
inquirer.prompt([

    {
        type: "input",
        name: "letter",
        message: "Guess a letter"
    }
]).then(function() {
    if(randomWordGen(user.letter) >= 1) {
        console.log("Correct!")
        //append letter to array of blanks for word
    } else {
        Console.log("Incorrect!")
        //display array of blanks unchanged
        game();
    }
})
}
game();

//Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
var Letters = function (letter, location) {
    this.letter = letter;
    this.locatoin = location;
}


function randomWordGen(user.letter){
    var wordList = ["Philadelphia", "New York", "Dallas", "Atlanta", "Miami", "Chicago"]
    var word = wordList[Math.floor(Math.random() * wordList.length)];
    var wordSplit = word.split("");
    console.log(wordSplit);
    var char = [];
        for (var i = 0; i < wordSplit.length; i++){
            if (wordSplit[i] === user.letter){
                char.push(i+1);
            }
           // console.log(wordSplit[i]);
            console.log(char);
    }
}

randomWordGen();



//var fs = require("fs");
//var UserSearch = require("./lettes");

//Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
function Words(){

    this.letters = [];
    this.randomWord = randomWordGen();

    this.addLetter = function(letter, location){
    this.letterSearch = new Letters(letter, location)
    }
    
}

//remaining guess

//end game prompt


module.exports = Letters;


var fs = require("fs");
var UserSearch = require("./UserSearch");

var WeatherAdmin = function() {

  this.getData = function() {
    fs.readFile("log.txt", "utf8", function(error, data){

      console.log(data);

    });
  };

  this.newUserSearch = function(name, location) {

    var newUserSearch = new UserSearch(name, location);
    var logTxt = "\nName: " + newUserSearch.name +
    " Location: " + newUserSearch.location + " Date: " + newUserSearch.date;

    fs.appendFile("log.txt", logTxt);

    newUserSearch.getWeather();

  };

};

module.exports = WeatherAdmin;
