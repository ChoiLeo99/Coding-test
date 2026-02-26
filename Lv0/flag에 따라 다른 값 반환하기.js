// 문제
// 두 정수 a, b 와 boolean 변수 flag 가 매개변수로 주어질 때,
// flag 가 true면 a + b 를 false 면 a - b 를 return

function solution(a, b, flag) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(a, b, flag) {
   return flag === true ? a + b : a - b;
}

// 풀이
// 삼항 연사자로 true 와 false 를 구분하여 return
