//TODO-Refactor and Reorganize whole JS page. Fix redundancies

var rgbGuess = document.querySelectorAll("span");
var colors = document.querySelectorAll(".colorTile");
var rgbBool = false;
var messageDisplay = document.querySelector("#message");
var bodyBackground = 'rgb(' + 30 +',' + 30 + ',' + 30 +')';
var answerColor = 'rgb(' + 0 +',' + 0 + ',' + 0 +')';
var rgbTriplet = [0,0,0];
var resetGameButton = document.querySelector("#resetGame");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var difficulty = "easy";
resetGameButton.style.backgroundColor = "white";
easyButton.style.backgroundColor = 'rgb(' + 0 +',' + 140 + ',' + 200 +')';
hardButton.style.backgroundColor = "white";

colors[0].style.backgroundColor = "blue";

gameSetup();

function gameSetup(){
	messageDisplay.textContent = "";
	resetGameButton.textContent = "New Colors";

	rgbBool = false;
	for(var j = 0; j < colors.length; j++){
		colors[j].style.backgroundColor = bodyBackground;
	}

	if(difficulty === "easy"){
		amountSquares = 3;
	}else{
		amountSquares = 6;
	}

	for(var i = 0; i < amountSquares; i++){
		rgbTriplet = [Math.round((Math.random(0,257)*256)),Math.round((Math.random(0,257)*256)),Math.round((Math.random(0,257)*256))];
		if(rgbBool === false){
			if(Math.random() >= .500){
				rgbBool = true;
				createAnswerColor();
			}
		}
		colors[i].style.backgroundColor = 'rgb('+rgbTriplet[0]+','+rgbTriplet[1]+','+rgbTriplet[2]+')';
	}
	if(rgbBool === false){
		createAnswerColor();
	}
	return;
}

for(var i = 0; i < colors.length; i++){
	colors[i].addEventListener("mouseover", function(){
		this.style.width = "30%";
	})
	colors[i].addEventListener("mouseout", function(){
		this.style.width = "30%";
	})
	colors[i].addEventListener("click", function(){
		if(this.style.backgroundColor == answerColor){
			messageDisplay.textContent = "You got it!";
			resetGameButton.textContent = "Play again?";
		}else{
			messageDisplay.textContent = "Try Again!";
			this.style.backgroundColor = bodyBackground;
		}
	})
}
//TODO-Consolidate/Refactor this code. Consider using classList.add/remove and create general functionality
resetGameButton.addEventListener("click", gameSetup);
easyButton.addEventListener("click", function(){
	difficulty = "easy";
	gameSetup();
	easyButton.style.backgroundColor = 'rgb(' + 0 +',' + 140 + ',' + 200 +')';
	hardButton.style.backgroundColor = "white";
});
easyButton.addEventListener("mouseover", function(){
	easyButton.style.backgroundColor = 'rgb(' + 0 +',' + 140 + ',' + 200 +')';
})
easyButton.addEventListener("mouseout", function(){
	if(difficulty !== "easy"){
	easyButton.style.backgroundColor = "white";
	}
	
})
hardButton.addEventListener("click", function(){
	difficulty = "hard";
	gameSetup();
	hardButton.style.backgroundColor = 'rgb(' + 0 +',' + 140 + ',' + 200 +')';
	easyButton.style.backgroundColor = "white";
});
hardButton.addEventListener("mouseover", function(){
	hardButton.style.backgroundColor = 'rgb(' + 0 +',' + 140 + ',' + 200 +')';
})
hardButton.addEventListener("mouseout", function(){
	if(difficulty !== "hard"){
	hardButton.style.backgroundColor = "white";
	}
})
resetGameButton.addEventListener("mouseover", function(){
	resetGameButton.style.backgroundColor = 'rgb(' + 0 +',' + 140 + ',' + 200 +')';
})
resetGameButton.addEventListener("mouseout", function(){
	resetGameButton.style.backgroundColor = "white";
})

function createAnswerColor(){
	for(var j = 1; j < 4; j++){
			rgbGuess[j].textContent = rgbTriplet[j-1];
		}
	answerColor = 'rgb('+rgbGuess[1].textContent+', '+rgbGuess[2].textContent+', '+rgbGuess[3].textContent+')';
}