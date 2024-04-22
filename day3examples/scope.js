//local scope - 
// 함수 내에 선언된 변수는 함수 안에서 참조가 되고, 함수 밖에서는 참조할 수 없다. 
function myFunction() {
    let carName = "볼보";
    console.log(carName);
} //함수 내 변수 선언, 로컬 변수라함

//함수 내에서는 carName에 접근이 가능하기 때문에, carName에 할당된 값을 콘솔에 출력.
myFunction(); 

//함수 내에 선언된 carName에 함수 밖에서는 접근할 수 없으므로 에러 발생.
//console.log(carName); 

//global scope
//함수 밖에 선언된 변수는 함수 밖은 물론 함수 안에서도 참조할 수 있다.
var carName2 = "기아"; //함수 밖 변수 선언, 글로벌 변수

function myFunction2() {
    console.log(carName2);
}

myFunction2(); 