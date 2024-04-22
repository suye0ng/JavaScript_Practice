//함수 호출시 인수를 전달하지 않으면 함수 내의 파라미터는 undefined
//파라미터 전달 여부 확인 코드 필요
function say(message) {
    
  }

//파라미터에 대한 값이 전달되지 않을 때도 동작을 보장하도록 개선하는 방법
function say() {
    console.log(message);
}

say("안녕하세요");
say();

//여러 파라미터에 대해 선택적 기본 값 부여하기
