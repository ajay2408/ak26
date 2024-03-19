var timer1 = undefined;
var count = 0;

function btn1(){
    timer1 = setInterval(timerfun(), 1000);
}
function timerfun(){
    lbl1.innerHTML = count++;
    count++;
}