# FizzBuzz

def assert_equal val1, val2
  if val1 == val2
    puts '.'
  else
    puts "Expected #{val2} to equal #{val1}"
  end
end

def diviz num1, num2
  num1 % num2 === 0
end

def fizzbuzz n
  diviz(n,3) ? (diviz(n, 5) ? 'FizzBuzz' : 'Fizz') : (diviz(n, 5) ? 'Buzz' : n)
end

def run_tests
  assert_equal("Fizz", fizzbuzz(36))
  assert_equal("Fizz", fizzbuzz(93))
  assert_equal("Buzz", fizzbuzz(25))
  assert_equal("Buzz", fizzbuzz(85))
  assert_equal("FizzBuzz", fizzbuzz(30))
end

def fizzbuzz_to num
  puts 1.upto(num) { |number| puts fizzbuzz(number) }
end

if (ARGV[0])
  if (ARGV[1])
    assert_equal(ARGV[1], fizzbuzz(ARGV[0].to_i))
  elsif (ARGV[0].downcase == 'test')
    run_tests
  else
    fizzbuzz_to(ARGV[0].to_i)
  end
else
  fizzbuzz_to(100)
end
