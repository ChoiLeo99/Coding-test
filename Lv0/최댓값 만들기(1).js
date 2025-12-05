// 문제
// 정수 배열 numbers 가 매개변수로 주어집니다.
// numbers 의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return

function solution(numbers) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(numbers) {
   numbers.sort((a, b) => b - a);
   return numbers[0] * numbers[1];
}

// 풀이
// numbers.sort((a,b)=> b-a) -> 배열을 내림차순 정렬해서 큰 숫자가 앞으로 오게 만든다.
// 정렬 후 numbers[0] 은 가장 큰 수, numbers[1] 은 두 번째로 큰 수가 된다.
// numbers[0] * numbers[1] -> 이 두 수를 곱한 값을 반환한다.
