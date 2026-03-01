// 문제
// 정수 리스트 num_list 가 주어질 때,
// 마지막 원소가 그전 원소보다 크면 마지막 원소에서
// 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지지 않다면 마지막 원소를 두배
// 한 값을 추가하여 return

function solution(num_list) {
   var answer = [];
   return answer;
}

// 내가 쓴 풀이
function solution(num_list) {
   var last = num_list[num_list.length - 1];
   var prev = num_list[num_list.length - 2];

   if (last > prev) {
      num_list.push(last - prev);
   } else {
      num_list.push(last * 2);
   }

   return num_list;
}
