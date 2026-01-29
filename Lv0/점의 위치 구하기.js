// 문제가 길고 그림이 필요해 링크 첨부
// https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(dot) {
   const [x, y] = dot;

   if (x > 0 && y > 0) return 1;
   if (x < 0 && y > 0) return 2;
   if (x < 0 && y < 0) return 3;
   if (x > 0 && y < 0) return 4;
}

// 풀이
// 매개변수로 받은 dot 을 cost [x, y] 안에
// dot 의 인덱스 0번째는 x 에 인덱스 1번째는 y에 넣고
// if 문을 사용해 문제에서 준 조건의 값대로
// 1, 2, 3, 4 중에 return 한다
