// 문제
// 정수 배열 numbers 가 매개변수로 주어집니다.
// numbers 의 원소의 평균값을 return

function solution(numbers) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(numbers) {
   return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}

// 풀이
// 정수 배열 numbers가 매개변수로 주어질 때,
// numbers를 reduce 를 사용해 하나의 값으로 줄인다
// numbers에 [5, 10, 15] 가 들어왔을 때
// acc = 5 -> cur = 5 , acc = 10 -> cur = 15, acc 15 -> cur = 30 이 된다
// 그리고 다 더한 30 에서 numbers 의 length(길이) 만큼 나누면
// numbers 의 평균값이 나온다

// 참고
// reduce(배열의 모든 요소를 하나의 값으로 줄여주는 메서드다)
// 누적값(acc), 현재값(cur)
// numbers.length = numbers 의 길이를 뜻함 배열안에 몇개가 들어있는지 알 수 있는 프로퍼티
