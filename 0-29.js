function solution(numbers) {
  var answer = numbers.sort((a, b) => a - b);
  var max = answer.slice(numbers.length - 2, numbers.length + 1);
  return max[0] * max[1];
}
