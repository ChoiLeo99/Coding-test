// 문제
// 정수 리스트 num_list 가 주어질 때,
// 첫 번째로 나오는 음수의 인덱스를 return
// 음수가 없다는 -1 을 return

function solution(num_list) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(num_list) {
   return num_list.findIndex(num => num < 0);
}

// 참고
// findIndex() 를 사용해 조건을 만좋가는 첫 번째 요소의 인덱스를 반환하는 함수를 사용한다
// 조건에 맞는 값이 없으면 -1를 내보내기 때문에 예외 조건을 걸지 않아도 된다
// num이 0보다 작은 값을 return 하는 코드를 작성한다.
