=begin
  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?
=end

def largestPrimeFactor (n)
  while n % 2 === 0
    n /= 2
  end
  i = 3
  loop do
    while n % i === 0
      n /= i
    end
    i += 2
    break if i >= n
  end
  return n;
end

puts largestPrimeFactor(600851475143)
