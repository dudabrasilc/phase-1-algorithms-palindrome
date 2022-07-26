// Write a function that takes a string as an argument and returns true if the string is a palindrome, for example: "mom" and it returns false otherwise.

function isPalindrome(word) {
  // loop through the letters of word, from left to right and push them into an array
  let leftToRight = [];
  for (let i = 0; i < word.length; i++) {
    leftToRight.push(word[i])
  }
  let rightToLeft = [];
  // loop through the letters of word, from right to left and push them into an array
  for (let i = word.length - 1; i >= 0; i--) {
    rightToLeft.push(word[i])
  }
  // turn arrays into string and compare them
  return leftToRight.join("") === rightToLeft.join("")
}

// function isPalindrome(word) {
//   const reverseWord = word.split("").reverse().join("")
//   return word === reverseWord
// }

/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
