// 문제
// 문자열 배열 strlist 가 매개변수로 주어집니다.
// strlist 각 원소의 길이를 담은 배열을 return

function solution(strlist) {
   var answer = [];
   return answer;
}

// 내가 쓴 코드
function solution(strlist) {
   return strlist.map(str => str.length);
}

// 풀이
// 매개변수로 받은 문자열 배열 strlist 를 map() 함수를 사용해
// str : 배열에서 하나씩 꺼낸 문자열
// str.length : 그 문자열의 길이
// 를 map() 이 만든 배열을 바로 return

// 참고
// map() 함수는 배열의 각 요소를 하나씩 꺼내서
// 가공한 결과를 모아 새로운 배열을 만들어주는 함수다.
