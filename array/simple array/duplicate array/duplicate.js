function btn1Click()
{
    a1 = [];
    a2 = [];
    a1[0] = parseInt(txt1.value);
    a1[1] = parseInt(txt2.value);
    a1[2] = parseInt(txt3.value);
    a1[3] = parseInt(txt4.value);
    a1[4] = parseInt(txt5.value);
    a1[5] = parseInt(txt6.value);

    var k = 0;
    debugger;
    for (let i = 0; i < a1.length; i++) {
        console.log(a1);
        x = 0
        for (let j = 0; j < k; j++) {
            if (a2[j] == a1[i]) {
                x = 1;
                break;
            }
            
        }
        if (x == 0) {
            a2[k] = a1[i];
            k++;
        }
    }
    for (let i = 0; i < k; i++) {
        lbl1.innerHTML += a2[i];
        
    }
}