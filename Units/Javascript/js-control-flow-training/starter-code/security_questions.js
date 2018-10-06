console.log("security_questions.js loaded");
let securityQuestions = [
  {
    question: 'What is your dream car?',
    expectedAnswer: "2015 C7 Corvette Z06"
  },
  {
    question: 'What is your favorite movie?',
    expectedAnswer: "Goodfellas"
  },
  {
    question: 'What animal are you fearful of most?',
    expectedAnswer: "Lemur"
  }
];
let arrayLength = securityQuestions.length;
for (let i = 0; i < arrayLength; i++) {
  let userInput = prompt(securityQuestions[i].question);
  while (userInput != securityQuestions[i].expectedAnswer) {
  alert("Wrong answer");
  userInput = prompt(securityQuestions[i].question);
}
}
