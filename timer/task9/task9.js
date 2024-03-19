var timer = undefined;
// var letter = "0123456789ABCDEF";
// var color = "#";
function btn1Click()
{
    timer = setInterval(randomcolor,1000);
}
function randomcolor() {

    

        var color =Math.floor(Math.random() * (1000 - 100)) + 100;
        

    
    document.getElementById("bg").style.background = "#"+ color;
    console.log(color);
    
}