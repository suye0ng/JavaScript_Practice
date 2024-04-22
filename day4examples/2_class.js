//클래스 정의
//반드시 constructor 함수 필수. 객체를 생성하고 초기화하는 함수
class Car {
    constructor(modelName, modelYear, type, price) {

    }

    getModelName() {
      return this.modelName;
    }

    getModelYear() {
      return this.modelYear;
    }

    //가격 조회

    setModelName(modelName) {
      this.modelName = modelName;
    }

    setModelYear(modelYear) {
      this.modelYear = modelYear;
    }

    setType(type) {
      this.type = type;
    }

    //가격 설정
}

//아이오닉 차량 생성: "ionic", "2021", "e", 4000
 //아이오닉 차량 생성

//차량 모델명 가져오기


//차량 가격 변경: 4300


//모델,연식,가격 조회 및 출력


//제네시스 차량 생성: "genesis", "2021", "g", 6500

//모델명, 연식, 가격 조회


//클래스 상속: 전기차, 충전시간 특성 추가


//전기차 생성: "tesla", "2021", 4000, 60
