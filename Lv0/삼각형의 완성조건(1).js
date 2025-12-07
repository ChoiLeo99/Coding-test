// 문제
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 한다
// 조건 : 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다
// 삼각형의 세 변의 길이가 담긴 배열 sides 이 매개변수로 주어집니다.
// 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다는 2 를 return

function solution(sides) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(sides) {
   sides.sort((a, b) => a - b);
   return sides[2] < sides[0] + sides[1] ? 1 : 2;
}

// 풀이
// 매개변수로 주어진 sides 배열을 sort 를 활용해 오름차순으로 정렬한 후
// 정렬한 sides의 배열안에서 sides[2](가장 긴 변의 길이) 보다
// sides[0] + sides[1] 를 더한 값이 더 크다면
// 1(만들 수 있다) 작다면 2(만들 수 없다) 를 return 한다

// 참고
// sides.sort((a,b)=> a-b); sides 의 배열안에 있는 것을 오름차순으로 정렬
