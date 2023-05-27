let form = document.getElementsByClassName("form")[0];
let input = form.getElementsByTagName("input");
let isFormValid=true;

let navDiv = document.getElementsByClassName("nav")[0];
let signupBtn = document.getElementById("signup");
let profileLink = document.getElementById("profile-link");
let signupLink = document.getElementById("signup-link");

let fullname = document.getElementById("fullName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cfmpassword = document.getElementById("cfmpassword");

const message = document.getElementById("message")
 
//Storing User Data
function storeUserData() {
  event.preventDefault();
   
  
  let filledFields = CheckemptyFields();
  if (filledFields == true) {
    localStorage.setItem("fullname", fullname.value);

    localStorage.setItem("email", email.value);

    localStorage.setItem("password", password.value);

    localStorage.setItem("cfmpassword", cfmpassword.value);

    function generateAccessToken(lengthInBytes) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      let result = "";

      for (let i = 0; i < lengthInBytes; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
      }
      return result;
    }
    const token = generateAccessToken(16);
    let accessToken = JSON.stringify(token);
    localStorage.setItem("access_token", accessToken);

    isAccessTokenSignUp();
   }
else {
    signupPage();
  }
}

//Checking all fields are filled
function CheckemptyFields() {
  event.preventDefault();
//   const message = document.createElement("p");
  for (let i = 0; i < input.length; i++) {
    if (input[i].value == "") {
      message.innerText = "Error:All the fields are mandatory";
      message.style.color="red"
      message.style.transition = "visibility 3s ease";
      form.insertBefore(message,signupBtn);
      isFormValid=false
      return isFormValid;
    }
    
  }
  if(isFormValid){
  message.innerText = "Successfully Signed Up!";
  message.style.color="green"
  message.style.transition = "visibility 3s ease";
  form.insertBefore(message,signupBtn);
  isFormValid=true
  return isFormValid;
}
}
//SignUp
function signupPage(){
window.location.href="index.html"
}

//PROFILE
function isAccessTokenSignUp(){
    if(localStorage.getItem("access_token")==null){
        window.location.href="index.html"
    }
    else{
        window.location.href="profile.html";
    }

}
 
 profileLink.addEventListener("click", isAccessTokenSignUp);
 signupLink.addEventListener("click",signupPage)
signupBtn.addEventListener("click", storeUserData);
