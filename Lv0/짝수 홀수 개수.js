// 문제
// 정수가 담긴 리스트 num_list 가 주어질 때,
// num_list 의 원소 중 짝수와 홀수의 개수를 담은 배열을 return

function solution(num_list) {
   var answer = [];
   return answer;
}

// 내가 쓴 풀이
function solution(num_list) {
   let even = 0;
   let odd = 0;

   for (let num of num_list) {
      if (num % 2 === 0) {
         even++;
      } else {
         odd++;
      }
   }

   return [even, odd];
}
