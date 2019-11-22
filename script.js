
function bigImgMeule(x) 
{
  	x.style.height = "235.65px";
  	x.style.width = "307.2px";
}
function normalImgMeule(x)
{
  	x.style.height = "157.1px";
  	x.style.width = "204.8px";
}
function bigImgSix(x)
{
	x.style.height = "250px";
  	x.style.width = "500px";	
}
function normalImgSix(x)
{
	x.style.height = "200px";
  	x.style.width = "400px";	
}
function wrong(button)
{
	button.style.backgroundColor = 'red'
	document.getElementById("rightWrongText").innerHTML = "Wrong!";
}
function right(button)
{
	button.style.backgroundColor = '#4CAF50'
	document.getElementById("rightWrongText").innerHTML = "Correct! It is 110.7 Million Dollars! Crazy, Right?";
	document.getElementById("why").innerHTML = "Learn More!"
	document.getElementById("why").href = "meuleExp.html"
}

function right1(button)
{
	button.style.backgroundColor = '#4CAF50'
	document.getElementById("rightWrongText").innerHTML = "Correct! It is 84.5 Million Dollars! Crazy, Right?";
	document.getElementById("why").innerHTML = "Learn More!"
	document.getElementById("why").href = "ligmaExp.html"
}