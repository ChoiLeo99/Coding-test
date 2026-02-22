// 문제
// 연산 + 는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다.
// 예를 들면 다음과 같습니다.
// 12 + 3 = 123, 3 + 12 = 312
// 양의 정수 a 와 b 가 주어졌을 때, a + b 와 b + a 중 더 큰 값을 return

function solution(a, b) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(a, b) {
   const ab = Number(`${a}${b}`);

   const ba = Number(`${b}${a}`);

   return Math.max(ab, ba);
}

// 풀이
// 1. a + b 계산 문자열로 붙인 뒤 숫자로 변환
// 2. b + a 계산 문자열로 붙인 뒤 숫자로 변환
// 3. 더 큰 값을 반환 (같다면 ab가 반환됨)
