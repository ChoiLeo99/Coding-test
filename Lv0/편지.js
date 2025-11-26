// 문제
// 머쓱이는 할머니께 생신 축하 편지를 쓰려고 한다.
// 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로
// 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message 를
// 적기 위해 필요한 편지지의 최소 가로 길이를 return

function solution(message) {
   var answer = 0;
   return answer;
}

// 내가 쓴 풀이
function solution(message) {
   return message.length * 2;
}

// 풀이
// 매개변수로 message 가 주어졌을 때 한자당 2cm만큼 필요한 가로 길이니까
// message.length -> message 의 길이 * 2 곱하기를 return 한다.
