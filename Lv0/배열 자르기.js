// 문제
// 정수 배열 numbers 와 정수 num1, num2 가 매개변수로 주어질 때,
// numbers 의 num1 번째 인덱스부터 num2 번째 인덱스까지 자른 정수 배열을 return

function solution(numbers, num1, num2) {
   var answer = [];
   return answer;
}

// 내가 쓴 풀이
function solution(numbers, num1, num2) {
   return numbers.slice(num1, num2 + 1);
}

// 풀이
// 매개변수로 numbers 라는 정수 배열을 받고 num1 부터 num2까지의 자른 정수 배열을 return 해야함으로
// numbers 라는 배열을 slice 함수를 이용하여 자를 것이다
// slice 함수를 사용해 num1 번째부터 num2 + 1 까지 자른 정수 배열을 return

// 참고
// slice 는 배열에서 원하는 범위만 잘라서 새로운 배열로 만들어주는 함수이다
// num2 + 1 을 해야 하는 이유는 slice(a, b) 의 뜻은
// a 인덱스는 포함, b 인덱스는 b 바로 전까지만 포함 그래서 + 1 을 해야한다
