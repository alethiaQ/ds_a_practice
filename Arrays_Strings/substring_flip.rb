# Example 2: You are given a binary string s (a string containing only "0" and "1"). You may choose up to one "0" and flip it to a "1". What is the length of the longest substring achievable that contains only "1"?

# For example, given s = "1101100111", the answer is 5. If you perform the flip at index 2, the string becomes 1111100111.


# looking for the longest substring with at most one zero 
def substring_flip(str)
  count = 0
  left = 0 
  ans = 0
  right = 0 
  for i in str.length 
    if str[right] == "0" 
      count += 1
    end
    while count > 1
     count -= 1 if str[left] == "0"
     left += 1 
    end 
    currMax = right - left + 1
    ans = [ans, currMax]
    right += 1 
  end
  p ans
end

substring_flip("1101100111")