//반복문에선 무한루프를 방지하기 위한 것들이 필요함
/*let brands = ["Apple","Google","FaceBook","Amazon","MicroSoft","Samsung"];
console.log(brands[0]);

for(let index = 0; index < brands.length; index++) {
    console.log(brands[index]);
}

let inputCoin = 21000;
let len = foodList.length;
let buyableList = [];

//가능한 구매 조합 전부 만드는 반복문
let lens = foodList.length;
let buyableLists = [];
let buyableListscombenation = []; */

//for-in
let person = {
    fname: "현우",
    lname: "백",
    age: 23
}

for (const key in person) {
    console.log(key); //객체의 키값 출력
    console.log(person[key]); // 객체의 value값 출력
}

let language = "JavqScript";
for (const char of language) {
    console.log(char);
}
