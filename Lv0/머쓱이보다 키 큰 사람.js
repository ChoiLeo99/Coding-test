// 문제
// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로서야 하는지 궁금했다.
// 머쓱이네 반 친구들의 키가 담긴 정수 배열 array 와 머쓱이의 키 height 가
// 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return

function solution(array, height) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(array, height) {
   return array.filter(v => v > height).length;
}

// 풀이
// array 배열에서 filter 를 사용해 머쓱이보다 큰 v 사람을 골라
// 새로운 배열로 만들어주고 .length -> 골라진 사람들의 수(길이) 를 반환한다

// 참고
// .filter() -> 배열에서 조건에 맞는 요소들만 골라서 새로운 배열을 만든다
// .length -> 배열의 요소 개수(길이)를 알려준다
