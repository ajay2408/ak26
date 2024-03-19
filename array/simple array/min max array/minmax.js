var max = 0
var min = 0
function btn1Click(){
    
   var a =[];
   a[0] = parseInt(txt1.value);
   a[1] = parseInt(txt2.value);
   a[2] = parseInt(txt3.value);
   a[3] = parseInt(txt4.value);
   a[4] = parseInt(txt5.value);
     
   min = a[0];

     for (let i = 0; i < a.length; i++) 
    {
        
        if(a[i] > max)
        {
            max = a[i];
            
        }
        if(a[i] < min)
        {
                 min = a[i]   
        }
       
    }
      lbl1.innerHTML += "max=" + max;
      lbl2.innerHTML += "min=" + min;
}      