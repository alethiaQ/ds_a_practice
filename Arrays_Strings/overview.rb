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

=begin 
  Sliding window approach is similar to two pointers, but the idea is to keep a "window" of elements and slide either bigger or smaller 
  This approach is usually good when trying to find a valid substring/subarray or look for the longest consecutive things 

  There are two points or two bounds, a left and right bound that create the window, the indexes within show how many items are in the window 

  Identifying when to use sliding window algorith: 
  1. Looking for what makes a subarray "valid"
  - Constraint metric, some attribute of a subarray like # consecutive, sum, # of unique ect
  - Numeric restriction on the constraint, like what subarray is greater or equal to 5, that would make the subarray valid

For example, let's say a problem declares a subarray is valid if it has a sum less than or equal to 10. The constraint metric here is the sum of the subarray, and the numeric restriction is <= 10.
 
  2. The problem will ask you to find the subarray in some way
  - Most commonly it will ask you to find the best valid subarray, the problem will define what makes a subarray better, like length or highest total 
  - Another common ask is to find the number of valid subarrays

=end

# Example 1: Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k. 

def longest_subarray(nums, k)
  curr = 0
  left = 0
  ans = 0


end
