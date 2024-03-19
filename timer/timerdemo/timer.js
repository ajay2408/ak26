var count = 1;
var Timer1 = undefined;
window.onload = function()
{ };
function timer1()
{
    lbl1.innerHTML = count;
    count++;
}
function btn1Click()
{
    if(Timer1 == undefined)
    {
        Timer1 = setInterval(timer1,100)
    }
    console.log(Timer1);
}
function btn2Click()
{
    clearInterval(Timer1);
    Timer1 = undefined;
}
function btn3Click()
{
    clearInterval(Timer1);
    Timer1 = undefined;
    count = 0;
    lbl1.innerHTML = count;
}