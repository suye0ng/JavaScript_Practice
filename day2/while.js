let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let inputPrice = 7000;
let coinUnit = 500;
let coinCount = 0;


//사용자가 넣은 금액이 0이 될 때까지 500원 코인 갯수를 계산해서 출력하는
while (inputPrice > 0) {
    inputPrice -= coinUnit;
    coinCount++;
    console.log(coinCount);
}

//50원, 500원, 100원 동전으로 총 개수 구하기
//100원은 2개 7000원 이하로 가장 가까운 값
/*let input = 7000;
let input2 = input - (coin2 *2)
let coin1 = 50;
let coin2 = 100;
let coin3 = 500;
let coin1Count = 0;
let coin3Count = 0;

while ( input2> 0) {
    input2 -= 0
    coinCount++;
    if (input2 >= coin3) {
        input2 -= coin3;
        coin3Count++;
    } else {
        input2 -= coin1;
        coin1Count++;
    }
}

let totalCoins = coin1Count + coin3Count + 2; 

console.log(totalCoins) */

let input = 7000;
let coin1 = 50;
let coin2 = 100;
let coin3 = 500;

let coin1Count = 0;
let coin3Count = 0;

let remainingInput = input - (coin2 * 2); // 100원짜리 동전 2개를 사용하여 input에서 빼기

while (remainingInput > 0) {
    if (remainingInput >= coin3) {
        coin3Count++;
        remainingInput -= coin3;
    } else {
        coin1Count++;
        remainingInput -= coin1;
    }
}

let totalCoins = coin1Count + coin3Count + 2; // 100원짜리 동전 2개를 더함

console.log("100원짜리 동전 2개와");
console.log("500원짜리 동전", coin3Count, "개와");
console.log("50원짜리 동전", coin1Count, "개를 사용하여,");
console.log("총", totalCoins, "개의 동전을 사용했습니다.");
