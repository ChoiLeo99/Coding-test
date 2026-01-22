// 문제
// 문자열 str1, str2 가 매개변수로 주어집니다.
// str1 안에 str2 가 있다면 1을 없다면 2를 return

function solution(str1, str2) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(str1, str2) {
   return str1.includes(str2) ? 1 : 2;
}

// 풀이
// str1.includes(str2) -> str2가 str1 안에 포함되어 있으면 true 없으면 false
// 조건 연산자로(? :)로 있으면 1 없으면 2 반환

// 참고
// includes -> 문자열 안에 특정 문자열이 포함되어 있는지 확인하는 메서드
