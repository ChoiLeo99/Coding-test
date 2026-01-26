// 문제
// 문자열 my_string 과 문자 letter 이 매개변수로 주어질 때
// my_string 에서 letter 를 제거한 문자열을 return

function solution(my_string, letter) {
   var answer = '';
   return answer;
}

// 내가 쓴 풀이
function solution(my_string, letter) {
   return my_string.replaceAll(letter, '');
}

// 풀이
// replaceAll(찾을문자, 바꿀문자)
// letter 를 ''(빈 문자열) 로 바꿔서 제거
// 문자열 전체에서 모든 letter를 제거
