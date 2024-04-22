function getScores() {
    return [70, 80, 90, 100];
}

let scores = getScores();

//배열의 인덱스 번호로 데이터에 접근
let a = scores[0], 
    b = scores[1],
    c = scores[2];

//선언 변수가 배열 문법 처럼 보이지만, 배열이 아님. 배열 리턴값을 순서대로 받기 위한 용도임.
let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90

//반환 데이터 많은 경우 일부는 변수에, 일부는 배열에 할당하는 분해
let [i, j, ...args] = getScores();

//중첩 배열인 경우
function getProfile() {
    return ["John", "Doe", ["Red", "Green", "Blue"]];
}

//중첩 배열 분해
let [firstName, lastName, [color1, color2, color3]] = getProfile();

console.log(color1, color2, color3); // Red Green Blue