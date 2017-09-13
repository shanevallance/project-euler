/*
  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?
*/

function largestPrimeFactor (n) {
  let largest = n;
  while (n % 2 === 0) {
    n /= 2;
  }
  for (i = 3 ; i < n ; i += 2 ) {
    while (n % i === 0) {
      n /= i;
    }
  }
  return n;
}