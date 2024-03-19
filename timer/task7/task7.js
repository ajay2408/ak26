var color = ["green", "purple", "red", "black", "grey"];
var timer1 = undefined;
var count = 0;

function btn1Click() {
  timer1 = setInterval(timerfun1, 1000);
}
// function timerfun1() {
//   lbl1.innerHTML = count++;
// }
function timerfun1() {
  bd.style.background = color[count];
  if (count <= 5) {
    count++;
  } else {
    count = 0;
  }
}
