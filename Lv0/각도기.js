// 문제
// 각에서 0도 초과 90도 미만은 예각
// 90도는 지각
// 90도 초과 180도 미만은 둔각
// 180도는 평각으로 분류한다.
// angle 매개변수로 주어질 때
// 예각은 1, 직각은 2, 둔각은 3, 평각은 4를 return

function solution(angle) {
   var answer = 0;
   return answer;
}

// 내가 쓴 코드 1
function solution(angle) {
   return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

// 내가 쓴 코드 2
function solution(angle) {
   if (angle > 0 && angle < 90) return 1;
   if (angle === 90) return 2;
   if (angle > 90 && angle < 180) return 3;
   if (angle === 180) return 4;
}

// 풀이 1
// 매개변수 angle 이 주어질 때, 삼항 연산자를 사용해서
// angle이 90보다 작으면 1 아닐경우 90이랑 비교해 90이면 2 아닐경우
// 180이랑 비교하고 180보다 작으면 3 아닐 경우 4를 return 한다

// 문제 2
// if문을 사용해 문제에서 준 조건대로 if문을 4개 대입해 angle 의 값을 찾아 return 한다

// 참고
// 삼항 연산자
// 조건 ? 참일 때 값 : 거짓일 때 값 형태로, if문을 한 줄로 줄여서 쓰는 연산자
// if문
// 조건이 참인지 거짓인지에 따라 실행할 코드를 선택하는 문법

// 삼항 연산자 vs if문
// 한 줄로 표현할 수 있고 단순 할 떈 삼항 연산자
// 조건이 복잡하거나 여러 단계일 때 if문
