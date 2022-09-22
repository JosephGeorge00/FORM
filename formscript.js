const email = document.getElementById("email");
const password = document.getElementById("password");

function formValidation() {

    if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      alert("Please enter a valid email!");
      email.focus();
      return false;
    }
    
    if (!password.value.match(/^.{5,15}$/)) {
      alert("Password length must be between 5-15 characters!");
      password.focus();
      return false;
    }
    return true;
}