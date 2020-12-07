// Get the signin modal
var signinmodal = document.getElementById('modelSignIn');

// Get the button that opens the modal
var signinbtn = document.getElementById("sign-in-btn");

// Get the <span> element that closes the modal
var signinspan = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
signinbtn.onclick = function() {
  signinmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signinspan.onclick = function() {
  signinmodal.style.display = "none";
}

SignUp.onclick = function() {
  signupmodal.style.display = "block";
  signinmodal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click' , function(event) {
  if (event.target == signinmodal) {
    signinmodal.style.display = "none";
  }
});

// Get the signup modal
var signupmodal = document.getElementById('modelSignUp');

// Get the button that opens the modal
var signupbtn = document.getElementById("sign-up-btn");

// Get the <span> element that closes the modal
var signupspan = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
signupbtn.onclick = function() {
  signupmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signupspan.onclick = function() {
  signupmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click' , function(event) {
  if (event.target == signupmodal) {
    signupmodal.style.display = "none";
  }
});
