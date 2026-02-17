// 문제
// 정수 number 와 n, m 이 주어집니다.
// number 가 n 의 배우시면서 M 의 배수이면 1을 아니라면 0을 return

function solution(number, n, m) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(number, n, m) {
   return number % n === 0 && number % m === 0 ? 1 : 0;
}

// 풀이
// % 는 나머지를 구하는 연산자
// 나머지가 0이면 나누어 떨어지므로 배수
// && 는 AND 조건문 조건이 참이면 1 거짓이면 0을 반환
