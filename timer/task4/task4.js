var count = 0;
var count1 = 0;
var timer = undefined;
var Timer1 = undefined;
function btn1Click()
{
    timer = setInterval(timerfun,100);
    Timer1 = setInterval(timerfun,100);
}
function timerfun()
{
    lbl1.innerHTML = count;
  if (lbl1.innerHTML == 10) {
    timer = clearInterval();
  } else {
    count++;
  }
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