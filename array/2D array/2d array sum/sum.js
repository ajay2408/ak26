function btn1Click()
{
    a = [];
    a[0] = [];
    a[0][0] = parseInt(txt1.value) ;
    a[0][1] = parseInt(txt2.value) ;
    a[0][2] = parseInt(txt3.value) ;
    
    a[1] = [];
    a[1][0] = parseInt(txt4.value) ;
    a[1][1] = parseInt(txt5.value) ;
    a[1][2] = parseInt(txt6.value) ;

    a[2] = [];
    a[2][0] = parseInt(txt7.value) ;
    a[2][1] = parseInt(txt8.value) ;
    a[2][2] = parseInt(txt9.value) ;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            
            lbl1.innerHTML += a[i][j] + "&nbsp;&nbsp;";
            
        }
        lbl1.innerHTML += "<br>";
    }
    


    b = [];
    b[0] = [];
    b[0][0] = parseInt(txt10.value) ;
    b[0][1] = parseInt(txt11.value) ;
    b[0][2] = parseInt(txt12.value) ;

    b[1] = [];
    b[1][0] = parseInt(txt13.value) ;
    b[1][1] = parseInt(txt14.value) ;
    b[1][2] = parseInt(txt15.value) ;

    b[2] = [];
    b[2][0] = parseInt(txt16.value);
    b[2][1] = parseInt(txt17.value);
    b[2][2] = parseInt(txt18.value);

    c = [];
    c[0]=[];
    c[0][0]=0;
    c[0][1]=0;
    c[0][2]=0;


    c[1]=[];
    c[1][0]=0;
    c[1][1]=0;
    c[1][2]=0;

    c[2]=[];
    c[2][0]=0;
    c[2][1]=0;
    c[2][2]=0;


    


    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            
            lbl2.innerHTML += b[i][j] + "&nbsp;&nbsp;";
            
        }
        lbl2.innerHTML += "<br>";
    }
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // c[i][j] = 0;/
            for (let k = 0; k < 3; k++) {
                
                c[i][j] += a[i][k] * b[k][j];

                
            }
            
        }
        
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            
            lbl3.innerHTML += c[i][j] + "&nbsp;&nbsp;"
        }
        lbl3.innerHTML += "<br>";
        
    }

   
}