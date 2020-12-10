let Email = document.querySelector("#mail");
let mobile = document.querySelector("#mbl");
let postalCode = document.querySelector("#postal");
let url = document.querySelector("#url");

Email.addEventListener("click", mailCheck);
mobile.addEventListener("click", mobileCheck);
postalCode.addEventListener("click", postalCodeCheck);
url.addEventListener("click", urlCheck);


function mailCheck() {
    let userInput = prompt("Enter  Email Address");
    let re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
    if (re.test(userInput)) {
        alert("Correct Email");
    } else {
        alert("wrong Email");
    }
}

function mobileCheck() {
    let userInput = prompt("Enter  Mobile number")
    let re =/^(\+)?(88)?01[0-9]{9}$/;
    if (re.test(userInput)) {
        alert("Correct Mobile number");
    } else {
        alert("wrong Mobile number");
    }
   
}


function postalCodeCheck() {
    let userInput = prompt("Enter  Postal Code")
    let re = /^[0-9]{4}$/;
    if (re.test(userInput)) {
        alert("Correct Postal Code");
    } else {
        alert("wrong Postal Code");
    }

}
function urlCheck() {
    let userInput = prompt("Enter URL bellow")
    let re = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;
    if (re.test(userInput)) {
        alert("Correct URL");
    } else {
        alert("wrong URL");
    }

}