var count = 0;
var count1 = 0;
var Timer = undefined;
var Timer1 = undefined;

function btn1Click() {
  Timer = setInterval(Timerfun1, 1000);
  Timer1 = setInterval(Timerfun2, 1000);
}
function Timerfun1() {
  lbl1.innerHTML = count;
  if (lbl1.innerHTML == 10) {
    Timer = clearInterval();
  } else {
    count++;
  }
}
function Timerfun2() {
  lbl2.innerHTML = count1;
  if (lbl1.innerHTML == 10) {
    count1++;
  }
  else{
    Timer1 = clearInterval();
  }
  if(lbl2.innerHTML == 10){
    count1 = 10;
  }
  
}
