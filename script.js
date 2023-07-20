let x = Math.random()*20;
let score = 0;
let high = 0;
score = parseInt(score);
high = parseInt(high);
x = Math.round(x);
 function check()
 {
let a = document.getElementById('in').value;

if(a == x)
{
document.getElementById('state').innerHTML = "WIN";
document.getElementById('state').style= "color:red;font-size:50px";
document.getElementById('num').value = x;
score++;
document.getElementById('score').innerHTML = score;
}
else
  {
    document.getElementById('state').innerHTML = "LOSE";
document.getElementById('state').style= "color:red;font-size:50px";
score--;
document.getElementById('score').innerHTML = score;
  }
}
function guess()
{
  document.getElementById('num').value = "?";
  x = Math.random()*20;
  x = Math.round(x);
}
function again()
{
  document.getElementById('num').value = "?";
  if(score>high)
  {
  high = score;
  }
  document.getElementById('h_score').innerHTML = high;
  score=0;
  document.getElementById('score').innerHTML = score;
  document.getElementById('state').innerHTML = "Start....";

  document.getElementById('in').innerHTML = "";
}

function show()
{
document.getElementById('num').value = x;
}