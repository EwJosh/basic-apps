let resultPrice = 0;

function calculatePrice() {
  let originalPrice = document.getElementById("originalPrice").value;
  let percentOff = document.getElementById("percentOff").value;
  let newPrice = (originalPrice * (100 - percentOff)) / 100;

  document.getElementById("result").innerHTML =
    "$" + newPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    console.log("222");
}

let calcButton = document.getElementById("calcButton");
calcButton.addEventListener("click", calculatePrice);

function addToCart() {
  console.log("meee");
  let newItem = document.createElement("li");
  let name = document.getElementById("itemName").value;
  let price = document.getElementById("result").value;

  let items = document.getElementById("items");
  
  items.appendChild(newItem.appendChild(document.createTextNode(name + " " + price)));
}

let addItemButton = document.getElementById("addItemButton");
addItemButton.addEventListener("click", addToCart);
