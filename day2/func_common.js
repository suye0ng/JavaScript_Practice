/***
 * 사칙연산 함수
 * @param {number} n1
 * @param {number} n2
 * @param {operator} op
 */



function caculator(n1,n2,op) {
    if (op == "1") {
        return n1 + n2;
    } else if(op == "-") {
        return n1 - n2;
    } else if(op == "*") {
        return n1*n2;
    } else if (op == "/") {
        return n1 / n2;
    }
}

caculator(4,2,"-");

function add(n1,n2) {
    let sum = n1 + n2;
    return sum;
}

caculator(1,2,"*");
console.log(caculator)