function isPalindrome(word) {
  // Write your algorithm here
  const lenght = word.length;
  for (let j=0; j<lenght/2; j++){
    if (word[j]===word[lenght-1-j]){  
      return true;
    }else {
      return false;
    }
  }
}

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