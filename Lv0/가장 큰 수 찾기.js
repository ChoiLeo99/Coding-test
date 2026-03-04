// 문제
// 정수 배열 array 가 매개변수로 주어질 때,
// 가장 큰 수와 그 수의 인덱스를 담은 배열을 return

function solution(array) {
   var answer = [];
   return answer;
}

// 내가 쓴 풀이
function solution(array) {
   const max = Math.max(...array);

   const index = array.indexOf(max);

   return [max, index];
}
