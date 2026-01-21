// 문제
// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다.
// 아이스 아메리카노는 한잔에 5,500원 입니다.
// 머쓱이는 가지고 있는 돈 money 가 매개변수로 주어질 때,
// 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로
// 담은 배열을 return

function solution(money) {
   var answer = [];
   return answer;
}

// 내가 쓴 풀이
function solution(money) {
   return [Math.floor(money / 5500), money % 5500];
}

// 풀이
// Math.floor() 함수를 사용해
// Math.floor(money / 5500) -> 매개변수로 받은 money 로 커피를
// 몇잔을 살 수 있는지 몫을 구하고 사지 못한 나머지 금액을 % 연산자로
// 구한뒤 배열에 담아 return 한다

// 참고
// Math.floor() 함수 -> 나머지를 버리는 함수
// % -> 나눴을 때 남는 값(나머지) 을 구하는 연산자
