// 문제
// 정수 n 이 주어질 때, n 이하의 짝수를 모두 더한 값을 return

function solution(n) {
   var answer = 0;
   return answer;
}

// 내가 쓴 코드
function solution(n) {
   let sum = 0;
   for (let i = 2; i <= n; i += 2) {
      sum += i;
   }
   return sum;
}

// 풀이
// 정수 n 이 만약 10이 주어졌다고 가정하고
// sum 이라는 최종 return으로 출력할 변수를 초기값을 0으로 선언하고
// for 문으로 let i = 2 라고 선언한다
// 그 이유는 짝수가 시작되는 숫자는 2 이고 짝수가 반복될 때마다
// sum에 i 의 값을 "먼저" 담고 i 를 2씩 올려줄 것이기 때문이다.

// for문 (반복문 내부 실행 → 증가 → 조건 확인)
// 정해진 횟수만큼 코드(명령)를 반복 실행하는 구조이다.
// 초기값 → 반복 조건 → 증가(변화) 이 세 단계를 이용해 반복을 제어
