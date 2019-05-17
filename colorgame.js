var numOfSquares=6;
var colors=generateRandomColor(numOfSquares);


var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("ColorDisplay");
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");


easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numOfSquares=3;
	messageDisplay.textContent="";
	colors=generateRandomColor(numOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickColor(); 
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}

	
	
})

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numOfSquares=6;
	colors=generateRandomColor(numOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickColor(); 
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		}
	
	}

})


resetButton.addEventListener("click",function(){
	resetButton.textContent="New Color";
	messageDisplay.textContent="";
	colors=generateRandomColor(numOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelBlue";

})


colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];

	//add event listener to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked suares
		var clickedColor=this.style.backgroundColor;


		//compare the clicked color to pickedColor
		if(clickedColor===pickedColor)
		{
			changeColor(pickedColor);
			messageDisplay.textContent="Correct!";
			resetButton.textContent="Play Again?";
			h1.style.backgroundColor=pickedColor;
		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}

	})
}

function changeColor(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pickColor()
{

	var rand=Math.floor(Math.random()*colors.length );
	return colors[rand];
}

function generateRandomColor(num){
	var arr=[]
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());

	}
	return arr;

}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}