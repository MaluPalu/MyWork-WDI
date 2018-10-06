console.log("login.js loaded");
let userLogin = {
  username: "BrokebackBooty",
  password: "HeathLedgerRocks"
}

let userInput = prompt('Enter password for ' + userLogin.username);
let i = 1;
while (userInput != userLogin.password && i <= 2) {
  userInput = prompt('Enter password for ' + userLogin.username);
  i++;
}
if (userInput === userLogin.password){
alert("Correct");
}
let numbers = [1,2,3,4,5,6,7,8,9,10];

function countdown(num) {
for (let i = num; i > 0; i--)
  console.log([i]);
};
countdown(34);

function multiply(a, b) {
  return a * b;
}
multiply(2, 4);

function replace(text) {
  let thisGuy = document.getElementById(#potato);
  thisGuy.append(text);
};
function die(){

}
funtion setPotato(selector, text) {
  $(selector).html(text);
}
setPotato("#theId", "<h1>Sup Bradda</h1>");
function setPotato(id, text) {
  $("#", + id).html(text);
};
