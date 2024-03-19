

function btn1Click()
{
    a = [];
    a[0] = parseInt(txt1.value);
    a[1] = parseInt(txt2.value);
    a[2] = parseInt(txt3.value);
    a[3] = parseInt(txt4.value);
    a[4] = parseInt(txt5.value);
    a[5] = parseInt(txt6.value);
    console.log(a);
    debugger;
    var x = 0;
    for (let i = 0; i < a.length; i=i+2) {
        x = a[i]
        a[i] = a[i + 1]
        a[i + 1] = x;
        
    }
    for (let i = 0; i < a.length; i++) {
        lbl1.innerHTML += a[i] + "&nbsp;";
        
    }
    
}