// 문제
// 자연수 n 이 입력으로 주어졌을 때,
// 만약 n 이 짝수이면 "(n) is even" 을
// 홀수이면 "(n) is odd" 를 return

const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
   input = line.split(' ');
}).on('close', function () {
   n = Number(input[0]);
});

// 내가 쓴 풀이
const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
   input = line.split(' ');
}).on('close', function () {
   const n = Number(input[0]);

   if (n % 2 === 0) {
      console.log(`${n} is even`);
   } else {
      console.log(`${n} is odd`);
   }
});

// 풀이
// if 문을 활용해 n 이 2로 나누었을 때 0이 된다면 짝수이므로 is even
// 2 로 나누어지지 않으면 is odd 를 return
