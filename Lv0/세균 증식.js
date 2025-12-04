// 문제
// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다.
// 처음 세균의 마리수 n 과 경과한 시간 t 가 매개변수로 주어질 때
// t 시간 후 세균의 수를 return

function solution(n, t) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(n, t) {
   return n * Math.pow(2, t);
}

// 풀이
// 매개변수로 n 과 t 가 주어졌을 때
// 처음 세균의 마리수 n 을 Math.pow(2, t) 를 이용해
// 1시간에 두배만큼 증식이라고 했으니 2 (증가량), t (경과한 시간)
// 2를 t 번 제곱한 값을 처음 세균의 마리수와 곱해서 return

// 참고
// Math.pow 는 자바스크립트에서 거듭제곱(제곱)을 계산해주는 함수이다.
