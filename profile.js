let _fullname = localStorage.getItem("fullname");
let _email = localStorage.getItem("email");
let _password = localStorage.getItem("password");
 
let signupLink = document.getElementById("signup-link");
let profielDiv = document.getElementsByClassName("profile");
let logoutBtn = document.getElementById("logout");

document.getElementById("fullName").innerHTML = `Full Name : ${_fullname}`;
document.getElementById("email").innerHTML = `Email : ${_email}`;
document.getElementById("password").innerHTML = `Password : ${_password}`;
 

// fullname.innerText=`${fullname.value}`
// email.innerText=`${email.value}`
// password.innerText=`${password.value}`
// cfmpassword.innerText=`${cfmpassword.value}`

function removeData() {
  localStorage.setItem("fullname", null);

  localStorage.setItem("email", null);

  localStorage.setItem("password", null);

  localStorage.setItem("cfmpassword", null);

  localStorage.removeItem("access_token");
}

 

function isAccessTokenProfile(){
    if(localStorage.getItem("access_token")!=null){
        window.location.href="profile.html"
    }
     
}
logoutBtn.addEventListener("click", removeData);
signupLink.addEventListener("click", isAccessTokenProfile);
