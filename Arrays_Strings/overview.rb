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

# palindrome_checker("racecar")

=begin 

Another way to use two pointers is if we want to move along two arrays or iterables simultaneously 

We'd again start at the beginning of each array and increase our pointer depending on our logic 

=end

# Example 3: Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.

def sorted_arrays(arr1, arr2)
  ans = [];
  first = 0;
  second = 0; 

  while   first < arr1.length && second < arr2.length do 
    num1 = arr1[first]
    num2 = arr2[second]

    if num1 < num2 
      ans.push(num1)
      first += 1
    else 
      ans.push(num2)
      second += 1
    end
  end

  while first < arr1.length
    ans.push(arr1[first])
    first += 1
  end

  while second < arr2.length 
    ans.push(arr2[second])
    second += 1
  end

  p ans
end

sorted_arrays([1,4,7,20], [3,6,10])