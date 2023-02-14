function solution(angle) {
  let answer = 0;
  if (angle < 90) {
    answer = 1;
  } else if (angle < 180 && angle > 90) {
    answer = 3;
  } else if (angle === 180) {
    answer = 4;
  } else {
    answer = 2;
  }

  return answer;
}
