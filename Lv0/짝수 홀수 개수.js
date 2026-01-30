// 문제
// 정수가 담긴 리스트 num_list 가 주어질 때,
// num_list 의 원소 중 짝수와 홀수의 개수를 담은 배열을 return

function solution(num_list) {
   var answer = [];
   return answer;
}

// 내가 쓴 풀이
function solution(num_list) {
   return [num_list.filter(n => n % 2 === 0).length, num_list.filter(n => n % 2 === 1).length];
}

// 풀이
// filter -> 조건을 만족하는 요소만 골라서 새로운 배열을 만들어주는 함수
// num_list.filter(n => n % 2 === 0).length -> 짝수만 모아서 배열로 반환
// num_list.filter(n => n % 2 === 1).length -> 홀수만 모아서 배열로 반환
//  .length 는 짝수, 홀수 개수
