function btn1Click()
{
    a1 = [];
    
    a1[0] = parseInt(txt1.value);
    a1[1] = parseInt(txt2.value);
    a1[2] = parseInt(txt3.value);
    a1[3] = parseInt(txt4.value);
    a1[4] = parseInt(txt5.value);
    a1[5] = parseInt(txt6.value);

    var temp = 0;
    debugger;
    for (let i = 0; i < a1.length; i++) {
        
        for (let j = i+1; j < a1.length; j++) {
            
            // the 0 value print in back, you can write ==
            // the - value print in back , you cam write <
            if (a1[i] < 0) {
                
                temp = a1[i];
                a1[i] = a1[j];
                a1[j] = temp;

            }
            
        }
        
        
    }
    for (let i = 0; i < a1.length; i++) {
        lbl1.innerHTML += a1[i]; 
        
    }
}