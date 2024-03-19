var count = 0;
var count1 = 0;
var count2 = 0;
var x = 0;
var timer = undefined;
var timer1 = undefined;
var timer2 = undefined;
function timer1fun()
{
    lbl3.innerHTML = count;
    if (lbl3.innerHTML == "60") {
        x = 1;
    }
    else if (lbl3.innerHTML == "0") {
        x = 0;
    }
    if (x == 1) {
        count = 0;
    }
    else{
        count++;
    }
}
function timerfun2() {
    lbl2.innerHTML = count1;
    if (lbl3.innerHTML == "60") {
        count1++;
    }
    else if(lbl2.innerHTML == "30") {
      count1 = 0;  
    }
}
function timerfun3() {
    lbl1.innerHTML = count2;

    if (lbl2.innerHTML == "30") {
        count2++;
    }
    else if (lbl1.innerHTML == "60") {
        count2 = 0;
    }
}
function btn1Click()
{
    if (timer == undefined) {
        timer = setInterval(timer1fun,100);
        timer1 = setInterval(timerfun2,100);
        timer2 = setInterval(timerfun3,100);
    }
}
function btn2Click() {
    clearInterval(timer);
    clearInterval(timer1);
    clearInterval(timer2);
    timer = undefined;
    timer1 = undefined;
    timer2 = undefined;
    console.log(timer)
}
function btn3Click() {
    clearInterval(timer);
    clearInterval(timer1);
    clearInterval(timer2);
    lbl4.innerHTML = "";
    timer = undefined;
    timer1 = undefined;
    timer2 = undefined;
    count = 0;
    count1 = 0;
    count2 = 0;
    lbl1.innerHTML = count;
    lbl2.innerHTML = count1;
    lbl3.innerHTML = count2;

}
function btn4Click()
{
    
        lbl4.innerHTML +=lbl1.innerHTML + ":" + lbl2.innerHTML + ":" + lbl3.innerHTML + "<br>";
    
}
