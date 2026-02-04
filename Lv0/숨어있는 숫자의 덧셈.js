// 문제 (어려움)
// 문자열 my_string 이 매개변수로 주어질 때
// my_string 안의 모든 자연수들의 합을 return

function solution(my_string) {
   var answer = 0;
   return answer;
}

// 내가 쓴 코드
function solution(my_string) {
   return my_string
      .split('')
      .filter(ch => !isNaN(ch))
      .reduce((sum, num) => sum + Number(num), 0);
}
