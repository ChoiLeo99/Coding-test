// 문제
// 두 배열이 얼마나 유사한지 확인해보려고 합니다.
// 문자열 배열 s1 과 s2 가 주어질 때 같은 원소의 개수를 return

function solution(s1, s2) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(s1, s2) {
   return s1.filter(v => s2.includes(v)).length;
}

// 풀이
// 문자열 배열 s1 과 s2 배열안에 있는 같은 원소를 걸러내야하니까
// s1 배열에 filter 로 필요한 조건만 골라내고 s2.includes(v) 를 사용해
// s1 의 각 원소 하나하나 s2 랑 비교하여 s2(v) 가 s1(v) 에 있으면 true, 없으면 false
// true 인 값만 filter에 의해 남게 된다
// 그리고 .length 를 사용해 필터링된 배열의 원소 개수를 return 한다
// 즉, s1 과 s2 에 공통으로 있는 문자열 개수를 return 하는 것이다.

// 참고
// filter -> 배열에서 조건을 만족하는 값만 골라서 새 배열로 만든다.
// includes -> 배열 안에 특정 값이 있으면 true, 없으면 false 를 반환한다.
