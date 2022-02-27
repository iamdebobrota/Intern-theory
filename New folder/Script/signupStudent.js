// document.querySelector("#name").addEventListener("click",function(){
//     document.createElement("div");
//     document.createAttribute("mobile").value="Enter mobile No."

// })


document.querySelector(".register-form").addEventListener("submit",myFormSubmit);

var signupArr = JSON.parse(localStorage.getItem("signupDetails")) || [];
function myFormSubmit (){
    event.preventDefault();
    var signupObj = {
        firstName: document.querySelector("#fname").value,
        lastName: document.querySelector("#lname").value,
        email: document.querySelector(".email").value,
        password: document.querySelector(".password").value,
  
    };
    signupArr.push(signupObj);
console.log(signupArr)
    localStorage.setItem("signupDetails", JSON.stringify(signupArr));

    document.querySelector("input[type='submit']")
    .addEventListener("click",function(){
        window.location.href="index.html";
    });
    
}