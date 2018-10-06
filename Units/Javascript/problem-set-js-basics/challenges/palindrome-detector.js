/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE
function isPalindrome(word) {
  let wordArray = word.split()word.join();
  wordArray.reverse();
  return wordArray == word.split();
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('A man, a plan, a canal: Panama.'));
