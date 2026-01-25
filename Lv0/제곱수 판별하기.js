// 문제
// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다.
// 정수 n 이 매개변수로 주어질 때, n 이 제곱수라면 1을 아니라면 2를 return

function solution(n) {
   var answer = 0;
   return answer;
}

// 내가 쓴 문제 풀이
function solution(n) {
   const sqrt = Math.sqrt(n);
   return Number.isInteger(sqrt) ? 1 : 2;
}

// 풀이
// Math.sqrt -> 제곱근 구해주는 함수 / Math.sqrt(n) -> n 의 제곱근 구하기
// Number.isInteger(값) -> 값이 정수인지 확인
// 정수면 1을 return 아니라면 2를 return
