// 문제
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
// 문자열 my_string 이 매개변수로 주어질 때
// 모음을 제거한 문자열을 return

function solution(my_string) {
   var answer = '';
   return answer;
}

// 내가 쓴 풀이
function solution(my_string) {
   return my_string.replace(/[aeiou]/g, '');
}

// 풀이
// replace(..., "") -> 찾은 모음들을 빈 문자열로 바꿔서 제거
// /[aeiou]/g -> a, e, i, o, u 중 하나에 해당하는 모든(g) 문자를 찾음
// 그리고제거한 문자열만 my_string 으로 return
