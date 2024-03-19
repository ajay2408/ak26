var timer = undefined;
function btn1Click()
{

    timer = setInterval(timerfun,1000);
}
function timerfun()
{
    var letter = "0123456789ABCDEF";
     
    var color = "#";

    for (let i = 0; i < 6; i++) {
        color = color + letter[Math.floor(Math.random() * 16)];

        
    }
    document.getElementById("bg").style.backgroundColor = color;
    console.log(color)
}