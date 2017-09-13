/* 
  Brute force, incrementing through 1-to-variable checking modulo.
  Would like to find a more streamlined approach.
*/

function divThreeFive(num) {
  var sum = 0;
  while (num > 0){
    if (num % 3 === 0 || num % 5 === 0){
      console.log(num);
      sum = sum + num;
    }
    num --;
  }
  console.log(sum);
}
divThreeFive(1000);
