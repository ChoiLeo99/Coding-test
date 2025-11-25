// 문제
// 문자열 my_string 이 매개변수로 주어집니다.
// my_string 을 거꾸로 뒤집은 문자열을 return

function solution(my_string) {
   var answer = '';
   return answer;
}

// 내가 쓴 풀이
function solution(my_string) {
   return my_string.split('').reverse().join('');
}

// 풀이
// 매개변수로 my_string 이 주어졌을 때
// split('') 을 사용해 문자열을 한 글자씩 나눠서 배열로 만든다
// reverse() 한 글자씩 나눈 배열을 거꾸로 뒤집어준다
// join('') 뒤집은 배열을 다시 문자열로 합치고 return 한다

// 참고
// split('') -> 배열로 변환
// reverse() -> 뒤집기
// join('') -> 문자열로 변환
