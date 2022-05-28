var mainBtn = document.querySelector(".main-icon");
var secondBtn = document.querySelector(".second-icon");

mainBtn.addEventListener("click", toogleActiveClass);
secondBtn.addEventListener("click", toogleActiveClass);

//Function for open & close Sidebar
function toogleActiveClass() {
  var element = document.querySelector(".sidebar-container");
  element.classList.toggle("active");
}

// Sidebar JS
// Course Button
var courseBtn = document.querySelector("#course");

courseBtn.addEventListener("click", openBox);

function openBox() {
  var openBtn = document.querySelector("#course>.open");
  var closeBtn = document.querySelector("#course>.close");
  var container1 = document.querySelector(".courseContainer1");
  var container2 = document.querySelector(".courseContainer2");
  openBtn.classList.toggle("activeBtn");
  closeBtn.classList.toggle("activeBtn");
  container1.classList.toggle("activeCourse");
  container2.classList.toggle("activeCourse");
}

// Register Button
var registerBtn = document.querySelector("#register");

registerBtn.addEventListener("click", openRegisterBox);

function openRegisterBox() {
  var openBtn = document.querySelector("#register>.open");
  var closeBtn = document.querySelector("#register>.close");
  var container1 = document.querySelector(".registerContainer1");
  var container2 = document.querySelector(".registerContainer2");
  openBtn.classList.toggle("activeBtn");
  closeBtn.classList.toggle("activeBtn");
  container1.classList.toggle("activeRegister");
  container2.classList.toggle("activeRegister");
}

// Login Button
var loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", openLoginBox);

function openLoginBox() {
  var openBtn = document.querySelector("#login>.open");
  var closeBtn = document.querySelector("#login>.close");
  var container1 = document.querySelector(".loginContainer1");
  var container2 = document.querySelector(".loginContainer2");
  openBtn.classList.toggle("activeBtn");
  closeBtn.classList.toggle("activeBtn");
  container1.classList.toggle("activeLogin");
  container2.classList.toggle("activeLogin");
}

// Logo Click handler
document
  .querySelector(".main-icon+.logo")
  .addEventListener("click", function () {
    window.location.href = "index.html";
  });
document
  .querySelector(".header-right>.icon")
  .addEventListener("click", function () {
    window.location.href = "cart.html";
  });
