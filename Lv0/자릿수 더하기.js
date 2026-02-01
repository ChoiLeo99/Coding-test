// 문제
// 정수 n 이 매개변수로 주어질 때
// n 의 각 자리 숫자의 합을 return

function solution(n) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(n) {
   return n
      .toString()
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
}

// 풀이
// n.toString() -> 숫자를 문자열로 변환
// .split('') -> 문자열을 문자 배열을 하나씩 쪼갬
// .reduce((sum, digit) => sum + Number(digit),0) -> 배열의 값을 하나로 합치기
// reduce((누적값, 현재값) => {계산}, 초기값)
// sum 지금까지 더한 합, digit 현재 자리 숫자, 0 합의 시작값
