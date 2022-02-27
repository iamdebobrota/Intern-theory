//students
document.querySelector("#students").addEventListener("click", function () {
  document.querySelector("#company").style.borderBottom = "none";
  document.querySelector("#company").style.color = "grey";
  students.style.borderBottom = "2px solid blue";
  students.style.color = "blue";

  document.querySelector("#lbox").innerHTML;
  document.querySelector(".facebook").style.display = "flex";
  document.querySelector(".google").style.display = "flex";
  document.querySelector(".linkdin").style.display = "none";
});

//company
document.querySelector("#company").addEventListener("click", function () {
  document.querySelector("#students").style.borderBottom = "none";
  document.querySelector("#students").style.color = "grey";
  company.style.borderBottom = "2px solid blue";
  company.style.color = "blue";
  document.querySelector(
    "#lbox"
  ).innerHTML = `If you are a student looking for internships, please login as a student by clicking <a href="signup.html"> here.</a>`;

  document.querySelector(".facebook").style.display = "none";
  document.querySelector(".google").style.display = "none";
  document.querySelector(".linkdin").style.display = "flex";
});

document.querySelector(".here").addEventListener("click", function () {
  document.querySelector("#students").style.borderBottom = "none";
  company.style.borderBottom = "2px solid red";
});

// login button
document.querySelector("#form").addEventListener("submit", myFormSubmit);

var signupArr = JSON.parse(localStorage.getItem("signUpDetails")) || [];
function myFormSubmit() {
  event.preventDefault();
  var signupObj = {
    email: document.querySelector(".email").value,
    pass: document.querySelector(".password").value,
  };

  signupArr.push(signupObj);
  console.log(signupArr);
  localStorage.setItem("signUpDetails", JSON.stringify(signupArr));

  document
    .querySelector("input[type='submit']")
    .addEventListener("click", function () {
      window.location.href = "index.html";
      alert("Login Successful");
    });
}
