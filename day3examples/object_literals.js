let firstName = "John";
let lastName = "Doe";

//객체에서는 일반적으로 변수에 할당된 값을 키로 치환해서 사용하지 못한다. 
let person = {
    firstName: firstName,
    lastName: lastName,
};

let type = "student";
//객체 리터럴 구문 확장을 사용하면 키에 [변수] 형식을 사용해 변수에 할당된 값을 키로 사용
let score = {
    [type] : "Jone",
    score : 95
};

//변수에 저장된 값으로 키 및 값 추가
let type2 = "grade";
score[type2] = 1;