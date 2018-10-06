console.log("sing.js loaded");
let bottleCount = parseInt(prompt("How many versus do you want to hear?"));
while (isNaN(bottleCount)) {
    bottleCount = parseInt(prompt("How many versus do you want to hear?"));
}
while (bottleCount > 0) {
  console.log(bottleCount + ' bottle' + (bottleCount == 1 ? '' : 's') + ' of beer on the wall,\n ' + bottleCount +
  ' bottle' + (bottleCount == 1 ? '' : 's') + ' of beer!\n Take one down, pass it around!\n ' + --bottleCount +
  ' bottle' + (bottleCount == 1 ? '' : 's') + ' of beer on the wall');
}
console.log('No bottles of beer');
