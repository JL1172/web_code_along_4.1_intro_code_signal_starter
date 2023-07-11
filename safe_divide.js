function solution(numerator, denominator) {
  return denominator == 0 ? 0 : numerator/denominator; 
}

console.log(solution(2, 3))
console.log(solution(2, 0))
