//TODO-Refactor/Add a prompt of some kind to show when you win

var rgbGuess = document.querySelectorAll("span");
var colors = document.querySelectorAll(".colorTile");
var rgbBool = false;
var messageDisplay = document.querySelector("#message");
var bodyBackground = 'rgb(' + 30 +',' + 30 + ',' + 30 +')';
var answerColor = 'rgb(' + 0 +',' + 0 + ',' + 0 +')';
var rgbTriplet = [0,0,0];
var resetGameButton = document.querySelector("#resetGame");
var modeButtons = document.querySelectorAll(".mode");
var difficulty = "easy";
modeButtons[0].classList.add("selected");
resetGameButton.style.backgroundColor = "white";

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this === modeButtons[0]){
			difficulty = "easy";
		}else {
			difficulty = "hard";
		}
		gameSetup();		
	})
}

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

resetGameButton.addEventListener("click", gameSetup);

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