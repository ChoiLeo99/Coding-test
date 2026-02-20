// 문제
// 정수 start_num 와 end_num 가 주어질 때,
// start_num 부터 end_num 까지의 숫자를 차례로 담은 리스트를 return

function solution(start_num, end_num) {
   var answer = [];
   return answer;
}

// 내가 쓴 풀이
function solution(start_num, end_num) {
   var answer = [];

   // start_num부터 end_num까지 반복 (시작값, 끝값 포함)
   for (let i = start_num; i <= end_num; i++) {
      answer.push(i); // 배열의 끝에 현재 숫자 추가
   }

   return answer;
}

// 풀이
// answer 라는 빈 배열을 만들고 for문을 이용해서
// i = start_num 부터 시작 i <= end_num 까지 반복
// 반복할 때마다 answer.push(i) 로 숫자를 하나씩 배열에 추가
