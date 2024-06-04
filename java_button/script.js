// function addNums(num1 = "clicks", num2 = 1) {
//   console.log(num1 + num2);
// }

var btnclick = 0;
function btnPressed() {
  btnclick += 1;
  clicks.innerHTML = +btnclick;
}

function changeColor() {
  let red = document.getElementById("rangeRed").value;
  let blue = document.getElementById("rangeBlue").value;
  let green = document.getElementById("rangeGreen").value;
  let color = "rgb(" + red + "," + green + "," + blue + ")";
  document.body.style.backgroundColor = color;
}

document.getElementById("rangeRed").addEventListener("input", changeColor);
document.getElementById("rangeBlue").addEventListener("input", changeColor);
document.getElementById("rangeGreen").addEventListener("input", changeColor);
