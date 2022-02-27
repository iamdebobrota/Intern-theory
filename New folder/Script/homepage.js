var item = 1;

document.querySelector(".prevousBtn").addEventListener("click", prev);
document.querySelector(".nextBtn").addEventListener("click", next);

// To get previous container
function prev() {
  var items = document.querySelectorAll(".items > div");
  if (item == 1) {
    item = items.length;
  } else {
    item--;
  }
  showItem();
}

// To get next container
function next() {
  var items = document.querySelectorAll(".items > div");
  if (item == items.length) {
    item = 1;
  } else {
    item++;
  }
  showItem();
}
// Show current Item in container
function showItem() {
  var items = document.querySelectorAll(".items > div");
  for (var i = 0; i < items.length; i++) {
    if (i + 1 == item) {
      items[i].classList.toggle("activeBox");
    } else {
      items[i].classList.remove("activeBox");
    }
  }
}
showItem();
// setInterval(() => {
//   next();
// }, 2000);

// Search-bar js
var data = JSON.parse(localStorage.getItem("data")) || [];
// Click events
var showCity = true;
var showType = true;
var showPref = true;
document.querySelector("#cities").addEventListener("click", showCities);
document.querySelector("#type").addEventListener("click", showTypes);
document.querySelector("#preference").addEventListener("click", showPreference);

function showCities() {
  var cities = data.cities;
  if (showCity) {
    cities.map(function (data) {
      var option = document.createElement("option");
      option.setAttribute("value", data.text);
      document.querySelector("#city").append(option);
    });
    showCity = false;
  }
}

function showTypes() {
  var types = data.types;
  if (showTypes) {
    types.map(function (data) {
      var types = document.createElement("option");
      types.setAttribute("value", data.text);
      document.querySelector("#types").append(types);
    });
    showTypes = false;
  }
}
function showPreference() {
  var preference = data.preferences;
  if (showPref) {
    preference.map(function (data) {
      var preferences = document.createElement("option");
      preferences.setAttribute("value", data.text);
      document.querySelector("#pref").append(preferences);
    });
    showPref = false;
  }
}

// Search-bar JS
// Select Form
document.querySelector("#formData").addEventListener("submit", collectData);

function collectData() {
  event.preventDefault();
  console.log("first");
  var data = JSON.parse(localStorage.getItem("data")).internships;
  var city = document.querySelector("#cities").value;
  var type = document.querySelector("#type").value;
  var preference = document.querySelector("#preference").value;
  var search = document.querySelector("#search").value;
  var filterData = JSON.parse(localStorage.getItem("searchData")) || [];
  if (search != "") {
    filterData = data.filter(function (item) {
      return item.title.includes(search);
    });
    localStorage.setItem("searchData", JSON.stringify(filterData));
    window.location.href = "intership.html";
    return;
  }
  if (city == "" && search == "" && preference == "" && type == "") {
    filterData = data;
  } else {
    filterData = data.filter(function (item) {
      return city != ""
        ? item.location.includes(city)
        : true && type != ""
        ? item.internship_type.includes(type)
        : true && preference != ""
        ? item.days_left.includes(preference)
        : true;
    });
  }
  localStorage.setItem("searchData", JSON.stringify(filterData));
  window.location.href = "internship.html";
}
