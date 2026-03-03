// 문제
// 정수 num 과 n 이 매개 변수로 주어질 때,
// num 이 n 의 배수이면 1을 return
// n 의 배수가 아니라면 0을 return

function solution(num, n) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(num, n) {
   return num % n === 0 ? 1 : 0;
}
