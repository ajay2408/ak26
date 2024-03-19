var count = 0;
var count1 = 0;
var timer = undefined;
var x = 0;
function timerfun() {
  lbl1.innerHTML = count;
  
  if (lbl1.innerHTML == "10") {
    x =1 ;
  } 
  else if(lbl1.innerHTML == "0"){
    x = 0;
  }
  if(x == 1){
count--;
  }
  else{
    count++;
  }
}
function btn1Click() {
  if (timer == undefined) {
    timer = setInterval(timerfun, 600);
  }
}
