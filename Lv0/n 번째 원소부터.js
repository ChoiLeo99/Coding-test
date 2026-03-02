// 문제
// 정수 리스트 num_list 와 정수 n 이 주어질 때,
// n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return

function solution(num_list, n) {
   var answer = [];
   return answer;
}

// 내가 쓴 풀이
function solution(num_list, n) {
   var answer = num_list.slice(n - 1);
   return answer;
}
