// 문제
// 정수 num1, num2 가 매개변수로 주어질 때,
// num1 을 num2 로 나눈 몫을 return

function solution(num1, num2) {
    var answer = 0;
    return answer;
}

// 내가 쓴 코드
function solution(num1, num2) {
    var answer = Math.trunc(num1 / num2)
    return answer;
}

// 풀이
// 정수 num1 을 num2 로 나누고 Math.trunc 를 사용해
// 소수점을 버리고 몫만 answer 에 담고 return 한다.

// 참고
// 소수점 버리기 Math.trunc()
// 소수점 내리기 Math.floor()