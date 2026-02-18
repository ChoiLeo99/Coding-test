// 문제
// 양의 정수 n 이 매개변수로 주어질 때,
// n 이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고
// n 이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return

function solution(n) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(n) {
   var answer = 0;

   if (n % 2 === 1) {
      for (let i = 1; i <= n; i += 2) {
         answer += i;
      }
   } else {
      for (let i = 2; i <= n; i += 2) {
         answer += i * i;
      }
   }

   return answer;
}
