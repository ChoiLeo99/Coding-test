// 문제
// 문자열 my_string 과 정수 n 이 매개변수로 주어질 때,
// my_string 의 앞의 n 글자로 이루어진 문자열을 return

function solution(my_string, n) {
   var answer = '';
   return answer;
}

// 내가 쓴 풀이
function solution(my_string, n) {
   return my_string.slice(0, n);
}

// 문제
// 매개변수로 주어진 문자열에 n번째까지만 자르고 return 하면 되므로
// slice() 를 활용해 인덱스 0번째 부터 n 번째까지 자르고 return
