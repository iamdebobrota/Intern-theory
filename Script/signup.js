// document.querySelector("input").addEventListener("click",function(){
//     document.querySelector(".name").style.borderBottom="2px solid black";
//     document.querySelectorAll("input").style.border="none";
//     this.style.border="none";
// })

document.querySelector(".register-form").addEventListener("submit",myFormSubmit);

var signupArr = JSON.parse(localStorage.getItem("signupDetails")) || [];
function myFormSubmit (){
    event.preventDefault();
    var signupObj = {
        firstName: document.querySelector("#fname").value,
        lastName: document.querySelector("#lname").value,
        companyName: document.querySelector("#cname").value,
   
        mobile: document.querySelector("#mobile").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        findUs: document.querySelector("#findus").value,
  
    };
    signupArr.push(signupObj);
console.log(signupArr)
    localStorage.setItem("signupDetails", JSON.stringify(signupArr));

    document.querySelector("input[type='submit']")
    .addEventListener("click",function(){
        window.location.href="index.html";
    });
    
}

