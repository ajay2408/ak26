function btn1Click()
{
    a = [];
    a[0] = [];
    a[0][0] = txt1.value;
    a[0][1] = txt2.value;
    a[0][2] = txt3.value;
    
    a[1] = [];
    a[1][0] = txt4.value;
    a[1][1] = txt5.value;
    a[1][2] = txt6.value;

    a[2] = [];
    a[2][0] = txt7.value;
    a[2][1] = txt8.value;
    a[2][2] = txt9.value;

    var flag =0;
    debugger;
    console.log(a)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(a[i][j] != a[j][i])
            {
                flag =1;
                break;

            }
            
        }
        if(flag == 1)
        {
            break;
        }
        
    }
        if(flag == 0)
        {
            lbl1.innerHTML += "this matrix is symetric";
        }
        else
        {
            lbl1.innerHTML += "this matrix is Asymetric";
        }
        lbl1.innerHTML += "<br>";
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                
                lbl2.innerHTML += a[j][i] + "&nbsp;&nbsp;"
                
            }
            lbl2.innerHTML += "<br>";
            
        }

}