var count = 0;
var count1 = 1;
var pause = document.getElementById("btn2").style.display = "none";
var restart = document.getElementById("btn3").style.display = "none";
var timer = undefined;
var timer1 = undefined;
var score = 0;
var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 function btn1Click() {
  timer = setInterval(timer1fun, 1000);
  timer1 = setInterval(_MoveBubble, 10);

  if (timer == undefined) {
    timer = setInterval(timer1fun, 1000);
  }
  if (timer1 == undefined) {
    timer1 = setInterval(_MoveBubble, 10);
  }

  var start = document.getElementById("btn1").style.display = "none";
  var pause = document.getElementById("btn2").style.display = "inline-block";
  var restart = document.getElementById("btn3").style.display = "inline-block";
};
// document.getElementById("buble").
function timer1fun() {
  var crcle = document.getElementById("circle-list");
  var bubble = document.createElement("div");
  bubble.id = "buble";
  var width = window.innerWidth;
  var height = window.innerHeight;

  var Xpos = Math.floor(Math.random() * (width - 100));
  var Ypos = Math.floor(Math.random() * (height - 100));

  // bubble.style.top = Ypos + "px";
  bubble.style.bottom =  "0px";
  bubble.style.left = Xpos + "px";

  bubble.classList.add("in");

  var RandomChar = Math.floor(Math.random() * letter.length);
  bubble.innerHTML = letter[RandomChar];

  if (count > 0) {
    crcle.appendChild(bubble);
  }

  count++;

  // console.log(bubble);
}
function BodyKeyPress(event) {
  var key = event.key;
  var bubbleId = document.querySelectorAll(".in");

  for (let i = 0; i < bubbleId.length; i++) {
    const singleBubble = bubbleId[i];

    if (singleBubble.innerHTML == key) {
      document.getElementById("circle-list").removeChild(singleBubble);
      score++;
      lbl1.innerHTML = score;
    }
  }

  console.log(score);
}

function _MoveBubble() {
  var skip = 1;
  var bbls = document.getElementById("circle-list").querySelectorAll(".in");
  var Wheight = window.innerHeight - 80;
  for (let i = 0; i < bbls.length; i++) {
    const SingleBBL = bbls[i];
    var BBLBotPos = parseInt(SingleBBL.style.bottom);

    SingleBBL.style.bottom = (BBLBotPos + 1) + "px";

    if (BBLBotPos > Wheight) {
      document.getElementById("circle-list").removeChild(SingleBBL);
      count1++;
      if (count1 > 1) {
        box1.style.background = "yellow";
      }
      if (count1 > 2) {
        box2.style.background = "yellow";
      }
      if (count1 > 3) {
        box3.style.background = "yellow";
      }
      if (count1 > 4) {
        box4.style.background = "yellow";
      }
      if (count1 > 5) {
        box5.style.background = "yellow";
        
      }
      if (count1 > 6) {
        alert("GAME IS OVER");
        clearInterval(timer);
        clearInterval(timer1);
        window.location.href = "index.html";
      }
    }
    
  }
  
  console.log(bbls);
}
function btn2Click() {
    clearInterval(timer);
    clearInterval(timer1);
    timer = undefined;
    timer1 = undefined;
    console.log(timer1)
}
function btn3Click() {
  window.location.href = "index.html";
}
