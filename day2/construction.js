//1. 생성자 함수 정의와 객체 생성
function BookInfo(title,price) {
    this.name = title;
    this.publister = "한빛미디어";
    this.realprice = price *0.9;
}

let book = new BookInfo("처음 배우는 애저", '37000');
let book11 = new BookInfo('정처기 이기적 말고 다른거 뭐였더라',40000)

//객체 리터럴
let book10 = {
    name : '실무에서 바로쓰는 뭐시기 3.0',
    publisher : '한빛미디어',
    realprice : 28000
}

let book20 = {
    name : '정보처리기사 실기 책 사야하는데',
    publisher : '이기적 아님 다른하나',
    realprice : 50000
}

//생성자 익명 함수 사용
function NewBookInfo(title,price) {
    this.name = title;
    this.publister = "한빛미디어";
    this.price = price;
    this.realprice = function() {
        return '할인가격은' + this.price * 0.9 + '원 입니다.';
    }
}


let book12 = new NewBookInfo('정처기 실기',40000);

console.log(book12.realprice());

//생성자 함수 내에 return문 사용하기
function MemberBookInfo(title,price) {
    this.name = title;
    this.publister = "한빛미디어";
    this.price = price;
    this.realprice = function() {
        return '판매가 : ' + this.price * 0.9 + '원 입니다.';
    } 
    return {
        userType : 'member',
        
    }
}