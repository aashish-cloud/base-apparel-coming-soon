var regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var inputText = document.querySelector("#email");

var inputField = document.querySelector(".rounded-field");

var inputFieldBox = document.querySelector(".error-msg");

var notifyButton = document.querySelector(".button");

notifyButton.addEventListener("click", function() {
  var res = emailValidation(inputText.value);
  if(res) {
    inputText.value = "";
  } else {
    inputField.classList.add("invalid");
    inputFieldBox.classList.add("form");
    document.querySelector(".error-icon").style.visibility = "visible";
    setTimeout(function() {
      inputField.classList.remove("invalid");
      inputFieldBox.classList.remove("form");
      document.querySelector(".error-icon").style.visibility = "hidden";
      inputText.value = "";
    }, 800);
  }
});

function emailValidation(mail) {
  if(mail.match(regexp)) {
    return true;
  } else {
    return false;
  }
}
