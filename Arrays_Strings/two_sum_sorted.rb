# Example 2: Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise. This problem is similar to Two Sum. (In Two Sum, the input is not sorted).

# For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.
require 'set'


def two_sum(nums, target)
  # p nums, target
  left = 0 
  right = nums.length - 1
  ans = false
  while left <= right 
    sum = nums[left] + nums[right]
    p sum 
    if sum == target 
      p true
      return ans = true
    elsif sum < target 
      left += 1 
    else 
      right -= 1
    end
  end
  p ans
end

two_sum([1, 2, 4, 6, 8, 9, 14, 15], 13)

# left + right = number > target ? then decrease right 
# left + right = number < target ? increase left 
# left + right = target return true 
# while loop ends with no pairs, return false 
