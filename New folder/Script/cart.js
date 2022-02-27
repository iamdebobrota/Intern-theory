var cartData = JSON.parse(localStorage.getItem("Cartitem"));

function display(cartData) {
  cartData.map(function (data) {
    var box = document.createElement("div");
    box.setAttribute("class", "innerBox");
    var innerLeft = document.createElement("div");
    innerLeft.setAttribute("class", "innerLeft");

    var imgBox = document.createElement("div");
    imgBox.setAttribute("class", "imgBox");

    var img = document.createElement("img");
    img.setAttribute("src", data.img);
    imgBox.append(img);
    innerLeft.append(imgBox);
    var innerRight = document.createElement("div");
    innerRight.setAttribute("class", "innerRight");
    var x = data.name;
    var pname = document.createElement("p");
    pname.textContent = x;
    pname.setAttribute("class", "name");

    var note = document.createElement("p");
    note.innerText = data.note;

    var emi = document.createElement("p");
    emi.innerText = data.emi;

    var priceBox = document.createElement("div");
    priceBox.setAttribute("class", "priceBox");
    var y = data.price;
    var price = document.createElement("p");
    price.textContent = "Rs. " + y;

    var del = document.createElement("del");
    del.innerText = "Rs. " + data.offPrice;
    priceBox.append(price, del);
    innerRight.append(pname, note, emi, priceBox);
    box.append(innerLeft, innerRight);
    document.querySelector(".cartLeft").append(box);
  });
}
display(cartData);

function checkOut(cartData) {
  var total = cartData.reduce(function (acc, item) {
    return acc + item.price;
  }, 0);
  var rightInnerBox = document.createElement("div");

  var itemBox = document.createElement("div");
  itemBox.className = "itemBox";
  var items = document.createElement("p");
  items.textContent = "Total Items";
  var tItems = document.createElement("p");
  tItems.textContent = cartData.length;
  itemBox.append(items, tItems);

  var priceBox = document.createElement("div");
  priceBox.className = "priceBox";

  var price = document.createElement("p");
  price.textContent = "Price";
  var tPrice = document.createElement("p");
  tPrice.textContent = "Rs. " + total;

  priceBox.append(price, tPrice);

  var mrpBox = document.createElement("div");
  mrpBox.className = "mrpBox";

  var mrp = document.createElement("p");
  mrp.textContent = "MRP";
  var mrpPrice = document.createElement("p");
  mrpPrice.textContent = "Rs. " + total;
  mrpBox.append(mrp, mrpPrice);

  var button = document.createElement("button");
  button.setAttribute("class", "btn");

  button.textContent = "Puchase";

  rightInnerBox.append(itemBox, priceBox, mrpBox, button);
  document.querySelector(".cartRight").append(rightInnerBox);
}
checkOut(cartData);
