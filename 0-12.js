function solution(n, k) {
  let answer = n * 12000;
  const service = Math.floor(n / 10);
  answer += k * 2000;
  return answer - service * 2000;
}
