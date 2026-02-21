// 문제
// 연산 + 는 두 정수에 대한 연산으로 두 정수를 붙여서
// 쓴 값을 반환합니다
// 양의 정수 a 와 b 가 주어졌을 때, a + b 와
// 2 * a * b 중 더 큰 값을 return

// 예시
// a = 2 b = 91 일때
// 문자열로 a 랑 b 를 붙이면 291, 2 * a * b = 364
// 364 를 return 해야 정답

function solution(a, b) {
   var answer = 0;

   return answer;
}

// 내가 쓴 풀이
function solution(a, b) {
   // 1. a ⊕ b 계산 (두 정수를 문자열로 변환하여 붙인 뒤 다시 숫자로 변환)
   const concatValue = Number(String(a) + String(b));

   // 2. 2 * a * b 계산
   const multiValue = 2 * a * b;

   // 3. 두 값을 비교하여 큰 값을 반환 (같으면 concatValue 반환)
   return concatValue >= multiValue ? concatValue : multiValue;
}
