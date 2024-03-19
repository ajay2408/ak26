var min = 0;
var max = 0;
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

    min = a[0][0];
    
    
    debugger;
    for (let i = 0; i < a.length; i++) {
        
        for (let j = 0; j < a.length; j++) {
            
            if (a[i][j] > max) {
                
                max = a[i][j];
            }
            if(a[i][j] < min)
            {
                min = a[i][j];
            }
           
            
        }
        
        
    }
 lbl1.innerHTML += "max =" + max + "<br>"; 
 
 lbl2.innerHTML += "min =" + min; 
 console.log(a);

}