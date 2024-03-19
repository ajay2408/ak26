var count = 0;
var timer = undefined;
window.onload = function()
{
    
        timer = setInterval(pstn,1000);
    
}
function pstn() {
    var piston = document.querySelectorAll(".piston");
    
    if (count > 0) {
        piston[count].classList.add("in");
        piston[count-1].classList.remove("in");
    }
    else
    {
        piston[count].classList.add("in");
        piston[piston.length-1].classList.remove("in");
    }
    count++;
    if (count > piston.length-1) {
        count = 0;
    }

    console.log(piston);
}