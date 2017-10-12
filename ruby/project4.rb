=begin
  A palindromic number reads the same both ways.
  The largest palindrome made from the product of
  two 2-digit numbers is 9009 = 91 × 99.

  Find the largest palindrome made from the
  product of two 3-digit numbers.
=end
# try to_s and to_i to prompt user for number of digits and iterate
def largestPalindrome()
  largestPalindromeProduct = 0
  i = 999
  loop do
    j = 999
    loop do
      product = i * j
      if isPalindrome(product) && product > largestPalindromeProduct
        largestPalindromeProduct = product
      end
      j -= 1
      break if j <=0
    end
    i -= 1
    break if i <= 0
  end
  return largestPalindromeProduct
end
# function to test whether a string is a palindrome and retrn true / false
def isPalindrome(test)
  str = test.to_s
  return str === str.reverse
end

puts largestPalindrome()
