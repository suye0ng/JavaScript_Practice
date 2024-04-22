//함수 선언식
function hello(name) {
    return "Hello" + name;
}

//함수 표현식
const hello2 = function(name) {
return "Hello" + name;
};
//화살표 함수
const hello3 = (name) => {
    return "Hello" + name;
    };

//파라미터가 하나인 경우 괄호 생략
const hello4 = (name) => {
    return "Hello" + name;
};

//함수 본문 문장이 한 줄일 때 중괄호 생략
const hello5 = (name) => "Hello" + name;