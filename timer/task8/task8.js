var timer = undefined;
var count = 0;
var a = ["1.jpg","2.jpg","3.jpg","4.png"];
function btn1Click()
{
    timer = setInterval(timerfun,1000);
}
// console.log(a);
function timerfun()
{
   document.getElementById("bg").style.backgroundImage =`url(${a[count]})`;
    if (count <=3) {
        count++;
    }
    else
    {
        count = 0;
    }
}