function solution(num_list) {
  var a = 0;
  var b = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      b++;
    } else {
      a++;
    }
  }
  return [b, a];
}
