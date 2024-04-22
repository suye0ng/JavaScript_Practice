//try ...catch 문을 통한 에러 처리
//실행 코드는 try 블록
//에러 처리는 catch 블록
//항상 실행이 필요한 내용은 finally 블록
try {
    // 존재하지 않는 함수 호출

} catch () {
    // ReferenceError: nonExistentFunction is not defined

} finally {
    console.log(
        "try 코드 블록이 정상적으로 수행이 되든, 오류를 발생하든 상관없이 무조건 실행해야 할 코드를 작성합니다."
    );
}

//프로그램 로직이 정상적으로 수행되기 위한 특정 조건을 만족하지 못한 경우,
//의도적으로 예외를 발생시켜 catch 블록을 실행해야 할 경우.
//let x = 5;

try {

    let y = x + 3;
    console.log(y);

} catch (err) {
    console.log(`x is ${err}`);
} finally {
    console.log("try/catch문 제일 마지막에 반드시 실행");
}
