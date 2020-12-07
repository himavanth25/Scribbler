
function closeSignInModal() {
    document.getElementById("signin-modal").style.display = "none";
}

function showSignInModal() {
    document.getElementById("signin-modal").style.display = "block";
}
window.onclick = function (event) {
    var modalSignIn= document.getElementById("signin-modal");
    var modalSignUp = document.getElementById("signup-modal");
    if (event.target == modalSignIn) {
        modalSignIn.style.display = "none";
    }
    if (event.target == modalSignUp) {
        modalSignUp.style.display = "none";
    }

}

function closeSignUpModal() {
    document.getElementById("signup-modal").style.display = "none";

}
function showSignUpModal() {
    document.getElementById("signup-modal").style.display = "block";
}

