var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

myInput.onblur = function(){
    document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function(){
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else{
        capital.classList.remove("valid");
        capital.classList.add("invalid")
    }

    if (myInput.value.length >=8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.remove("invalid")
    }
}
