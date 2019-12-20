var level=6;
var countdowns=3;
var colors=generateRandomColors(level);

var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var picked=document.querySelector("#picked");
var h1=document.querySelector("h1");
var pickedColor=pickcolor();
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
hard.classList.add("selected");

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");

	level=3;
	colors=generateRandomColors(level);
	pickedColor=pickcolor();
	picked.textContent=pickedColor;
	picked.style.textTransform="uppercase";
	h1.style.backgroundColor="steelblue";
	for(var i=0;i<6;i++)
	{
		if(colors[i])
			squares[i].style.backgroundColor=colors[i];
		else
			squares[i].style.display = "none";
	}
	


});

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	level=6;

	colors=generateRandomColors(level);
	pickedColor=pickcolor();
	picked.textContent=pickedColor;
	picked.style.textTransform="uppercase";
	h1.style.backgroundColor="steelblue";
	for(var i=0;i<6;i++)
	{
		
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		
	}
});

reset.addEventListener("click",function(){
	resetGame();
	reset.textContent="New Colors";
});

picked.textContent=pickedColor;
picked.style.textTransform="uppercase";

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function()
		{
			var clickedColor=this.style.backgroundColor;
			if(clickedColor==pickedColor)
			{
				message.textContent="Correct!!";
				changecolor(pickedColor);
				h1.style.backgroundColor=pickedColor;
				reset.textContent="Play Again";
				setTimeout(function(){
						countdown(countdowns);
				},10);
			}
			else
			{
				this.style.backgroundColor="#232323";
				message.textContent="Try Again";
			}

		});
}

function countdown(countdowns)
{
	var t=countdowns;
	var x=setInterval(function(){


			message.textContent="Reseting in "+t;
			t--;
			if(t<0)
			{
				clearInterval(x);
				message.textContent="";
				reset.textContent="New Colors";
				resetGame();
			}
		},1000);
		
	
	
}

function changecolor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		// if(squares[i].style.backgroundColor!=="rgb(35, 35, 35)")
			squares[i].style.backgroundColor=color;
	}

}
function pickcolor()
{
	var num=Math.floor(Math.random()*colors.length);
	return colors[num];
}



function generateRandomColors(level)
{
	var randomcolorArray = []
	for(var i=0;i<level;i++)
	{
		randomcolorArray.push(randomColor());
	}
	return randomcolorArray;
}

function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	var color="rgb("+ r +", "+ g + ", " +b+ ")";
	return color;
}

function resetGame()
{
	colors=generateRandomColors(level);
	pickedColor=pickcolor();
	picked.textContent=pickedColor;
	picked.style.textTransform="uppercase";
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	message.textContent="";
}
