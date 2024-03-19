function btn1Click()
{
    a1 = [];
    
    a1[0] = parseInt(txt1.value);
    a1[1] = parseInt(txt2.value);
    a1[2] = parseInt(txt3.value);
    a1[3] = parseInt(txt4.value);
    a1[4] = parseInt(txt5.value);
    a1[5] = parseInt(txt6.value);

    for (let i = 0; i < a1.length; i++) {
        lbl1.innerHTML += a1[i];
        
    }

}
function btn2Click()
{
    a2 = [];
    
    a2[0] = parseInt(txt7.value);
    

    for (let i = 0; i < a2.length; i++) {
        lbl1.innerHTML += a2[i];
        
    }

}
// function btn3Click()
// {
//     a3 = [];

//     a2[0] = parseInt(txt8.value)
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//     }
// }