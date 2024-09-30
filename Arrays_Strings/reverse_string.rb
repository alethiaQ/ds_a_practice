# Write a function that reverses a string. The input string is given as an array of characters s.

def reverse(s)
  left = 0 
  right = s.length - 1

  while left < right 
    placeholder = s[left]
    s[left] = s[right]
    s[right] = placeholder
    left += 1 
    right -= 1 
  end
  return s
end