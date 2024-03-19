var count = 10;
var Timer = undefined;
function timer1()
{
    lbl1.innerHTML = count--;
    if(lbl1.innerHTML == "0")
    {
        clearInterval(Timer);
    }

}
function btn1Click()
{
    if(Timer == undefined)
    {
        Timer = setInterval(timer1,1000);
    }
}