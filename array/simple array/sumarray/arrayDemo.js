function btn1Click(){
    var sum = 0;
   var a =[];
   a[0] = parseInt(txt1.value);
   a[1] = parseInt(txt2.value);
   a[2] = parseInt(txt3.value);
   a[3] = parseInt(txt4.value);
   a[4] = parseInt(txt5.value);
     
  
    for (let i = 0; i < a.length ; i++) {
        
    sum += a[i];
    lbl1.innerHTML += a[i] + "+";
   }
   lbl1.innerHTML += "=" + sum;


}