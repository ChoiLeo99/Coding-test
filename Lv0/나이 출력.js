// 문제
// 머쓱이는 선생님이 몇 년도에 태어났는지 궁금했습니다.
// 2022년 기준 선생님의 나이 age 가 주어질 때,
// 선생님의 출생 연도를 return 하는 솔루션 함수를 완성해주세요.

function solution(age) {
    var answer = 0;
    return answer;
}

// 내가 쓴 코드
function solution(age) {
    var answer = 2022 - age + 1;
    return answer;
}

// 풀이
// 선생님의 나이 age 받은 값을 현재 2022년 기준으로 계산해야하니
// 2022 - age를 하면 되지만
// + 1 을 하는 이유는 태어난 연도에 1살부터 시작하기 때문에 +1 을 해주면 정답이 나온다.