// 문제
// 문자열 my_string 과 정수 n 이 매개변수로 주어질 때,
// my_string 에 들어있는 각 문자를 n 만큼 반복한 문자열을 return

function solution(my_string, n) {
   var answer = '';
   return answer;
}

// 내가 쓴 문제 풀이
function solution(my_string, n) {
   return my_string
      .split('')
      .map(char => char.repeat(n))
      .join('');
}

// 풀이 및 참고
// split() -> 문자열을 문자 배열로 쪼갬
// map(char => char.repeact(n)) -> 각 문자를 n 번 반복
// join('') -> 다시 하나의 문자열로 합침
