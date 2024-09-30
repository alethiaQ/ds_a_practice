# TWO POINTER REVIEW
=begin
  The idea is to move two variables along an iterable like an array 

  One way to use two pointers is to start them at the edges:  
  Typically there is a start or left variable which starts at index 0
  and a right variable that begins at the last index 
  Then we use a while loop until the indexes meet 
  At each iteration we move the indexes closer to eachother 
  Deciding which pointer to move depends on the problem 

  PSUEDO CODE 

  function(arr)
  left = 0 
  right = arr.length - 1 

  while left < right 
    do some logic here depending on the problem
    do some more logic here depending on the following
      1. left ++ 
      2. right --
      3. both
    

=end 

#practice 

# Example 1: Given a string s, return true if it is a palindrome, false otherwise.

# A string is a palindrome if it reads the same forward as backward. That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".

def palindrome_checker(word)
  left = 0
  right = word.length - 1
  ans = true
  while left <= right do 
    if word[left] != word[right]
      return ans = false
    end
    left += 1
    right -= 1
  end
  p ans
end

palindrome_checker("racecar")