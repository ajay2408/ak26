// function btn1Click()
// {
//     a1 = [];
    
//     a1[0] = parseInt(txt1.value);
//     a1[1] = parseInt(txt2.value);
//     a1[2] = parseInt(txt3.value);
//     a1[3] = parseInt(txt4.value);
//     a1[4] = parseInt(txt5.value);
//     a1[5] = parseInt(txt6.value);

//     for (let i = 0; i < a1.length; i++) {
//         lbl1.innerHTML += a1[i];
        
//     }
// }
function btn1Click()
{
    var a = [];
    var b = parseInt(document.getElementById("txt7").value);

    var textbox = document.getElementsByName("txt1");

    debugger;
    for (let i = 0; i < textbox.length; i++) {
        
        a[i] = parseInt(textbox[i].value);
    }
    for (let i = 0; i < a.length; i++) {
        
        if(a[i] != b)
        {
            lbl1.innerHTML += a[i];
        }
    }
    console.log(b);
          
}