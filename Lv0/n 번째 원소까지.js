// 문제
// 정수 리스트 num_list 와 정수 n 이 주어질 때,
// num_list 의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은
// 리스트를 return

function solution(num_list, n) {
   var answer = [];
   return answer;
}

// 내가 쓴 풀이
function solution(num_list, n) {
   return num_list.slice(0, n);
}

// 풀이
// slice -> 0 번 째 인덱스부터 n 번째까지 자르는 함수 사용
