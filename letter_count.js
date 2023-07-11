function solution(s, letter) {
  let count = 0;
  for (let char of s) {
    if (char == letter) count++
  }
  return count;

}

console.log(solution('this is a test', 's'))
console.log(solution('this is a test', 'z'))
console.log(solution("bacab", 'b'))
console.log(solution("abbb", 'a'))


// Description
// Count the number of occurrences of a letter in a string.

// Do not use any built-in count() style functions for this task.

// Example
// Input:

// s == "bacab"
// letter = "b"
// Output:

// 2
// Input:

// s == "abbb"
// letter == "a"
// Output:

// 1