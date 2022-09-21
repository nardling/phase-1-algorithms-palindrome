function isPalindrome(word) {
  // Write your algorithm here
  const mid = Math.floor(word.length / 2);
  const last = word.length - 1;
  for (let i = 0; i < mid; ++i)
  {
    if(word[i] === word[last - i])
      continue;
    return false;
  }
  return true;
}

/* 
  Add your pseudocode here
  for i = 0...(len / 2)
    if str[i] === str[len - 1 - i]
     continue
    return false
  return true
*/

/*
  Add written explanation of your solution here
  for a string of length 6, compare
   s[0] to s[5]
   s[1] to s[4]
   s[2] to s[3]
   break at once if there's a mismatch
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
