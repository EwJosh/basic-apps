let resultPrice = 0;

function calculatePrice() {
  let originalPrice = document.getElementById("originalPrice").value;
  let percentOff = document.getElementById("percentOff").value;
  console.log(originalPrice);
  let newPrice = (originalPrice * (100 - percentOff)) / 100;
  console.log(newPrice);
  document.getElementById("result").innerHTML =
    "$" + newPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

let calcButton = document.getElementById("calcButton");
calcButton.addEventListener("click", calculatePrice);
