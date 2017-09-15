/*
  A palindromic number reads the same both ways.
  The largest palindrome made from the product of
  two 2-digit numbers is 9009 = 91 × 99.
  
  Find the largest palindrome made from the
  product of two 3-digit numbers.
*/

function largestPalindrome() {
  let largestPalindromeProduct = 0
  for (i = 999; i > 0; i--){
    // for each number up to the highest 3 digit number 999
    for (j = 999; j > 0; j--) {
      // iterate through 1-999 multiplying together
      let product = i * j;
      // run palindrome test function on product
      if (isPalindrome(product) && product > largestPalindromeProduct){
        largestPalindromeProduct = product;
      }
    }
  }
  return largestPalindromeProduct;
}
// function to test whether a string is a palindrome and retrn true / false
function isPalindrome(test){
  str = test.toString();
  return str === str.split("").reverse().join("");
}
