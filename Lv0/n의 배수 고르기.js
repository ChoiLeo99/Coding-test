// 문제
// 정수 n 과 정수 배열 numlist 가 매개변수로 주어질 때,
// numlist 에서 n 의 배수가 아닌 수들을 제거한 배열을 return

function solution(n, numlist) {
   var answer = [];
   return answer;
}

// 내가 쓴 코드
function solution(n, numlist) {
   return numlist.filter(v => v % n === 0);
}

// 풀이
// 매개변수로 정수 n과 배열 numlist를 받는다
// numlist.filter를 사용해 배열의 각 요소를 n으로 나눈다
// 나머지가 0인 값(= n의 배수)만 골라
// filter가 만든 새로운 배열을 return 한다
