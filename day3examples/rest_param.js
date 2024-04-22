//파라미터를 2개 정의한 함수는
function sum1(x1, x2) {
    let y = x1 + x2;
    console.log(y);
    return y;
}

//2개의 인자로 호출
sum1(5, 7);

//파라미터를 4개 정의한 함수는
function sum2(x1, x2, x3, x4) {
    let y = x1 + x2 + x3 + x4;
    console.log(y);
    return y;
}
//4개의 인자로 호출
sum2(5, 7, 3, 9);

//함수 호출에서 전달될 인자가 몇개인지 모르는 경우라면...
//파라미터를 값을 배열로 처리할 수 있다면...
function sum() {
    let total = 0;
    for (let x of args) {
        total += x;
    }
    console.log(total);
    return total;
}

sum(3, 2, 5, 7, 4, 23);