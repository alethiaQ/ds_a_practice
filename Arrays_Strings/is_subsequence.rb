# Example 4: 392. Is Subsequence.

# Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

# A subsequence of a string is a sequence of characters that can be obtained by deleting some (or none) of the characters from the original string, while maintaining the relative order of the remaining characters. For example, "ace" is a subsequence of "abcde" while "aec" is not.

def is_subseq(s, t)
  i = 0
  j = 0 

  while i < s.length && j < t.length do 
    if s[i] == t[j]
      i += 1
    end
    j += 1
  end 

 p true if i == s.length
 p false if i != s.length

end

is_subseq("ace", "abcde")

# we need to check if s is a subseq of t, we can use two pointers, one i to keep track of our s, and another j to check t. 
# with each iteration we will need to incremenet j, we only increment i if we find a match
# at the end we can compare the length of i to the length of s, if they are = return true