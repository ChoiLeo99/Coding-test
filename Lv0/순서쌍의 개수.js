// 문제
// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸
// 쌍으로 (a, b) 로 표기합니다. 자연수 n 이 매개변수로 주어질 때,
// 두 숫자의 곱이 n 인 자연수 순서쌍의 개수를 return

function solution(n) {
   var answer = 0;
   return answer;
}

// 내가 쓴 코드
function solution(n) {
   var answer = 0;

   for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
         answer++;
      }
   }

   return answer;
}

// 풀이
// 매개변수로 n 을 받고 두 숫자의 곱이 n인 자연수가 몇개인지 구해야하기 때문에
// for (반복문) 을 사용하여 두 숫자의 곱이 n 인 자연수의 개수를
// answer 에 담아서 return 한다
