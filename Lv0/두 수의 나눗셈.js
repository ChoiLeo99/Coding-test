// 문제
// 정수 num1 과 num2 가 매개변수로 주어질 때,
// num1 을 num2 로 나눈 값에 1,000을 곱한 후 정수 부분만 return

function solution(num1, num2) {
    var answer = 0;
    return answer;
}

// 내가 쓴 코드
function solution(num1, num2) {
    var answer = Math.floor((num1 / num2) * 1000);
    return answer;
}

// 풀이
// 정수 num1 을 num2 로 나눈 값에 1000을 곱해주고
// Math.floor 를 사용해 뒤에 소수점을 내린다.

// 참고
// 소수점 버리기 Math.trunc()
// 소수점 내리기 Math.floor()