function solution(sides) {
  let sor = sides.sort((a, b) => a - b);
  const max = sor.pop();
  let sum = sor.reduce((a, b) => a + b);
  let answer = 0;
  if (max >= sum) {
    answer = 2;
  } else {
    answer = 1;
  }
  return answer;
}
