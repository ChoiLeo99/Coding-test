// 문제
// 문자열 my_string 이 매개변수로 주어질 때,
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return

function solution(my_string) {
   var answer = '';
   return answer;
}

// 내가 쓴 풀이
function solution(my_string) {
   let answer = '';

   for (let ch of my_string) {
      if (ch === ch.toUpperCase()) {
         answer += ch.toLowerCase();
      } else {
         answer += ch.toUpperCase();
      }
   }

   return answer;
}

// 풀이
// for 문을 사용해 매개변수로 주어진 값을
// toUpperCase -> 대문자를 answer += ch.toLowerCase -> 소문자로 변환
// toLowCase -> 소문자를 answer += ch.toUpperCase -> 대문자로 변환 후
// answer 에 모두 담아 return
