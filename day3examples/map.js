//객체와 비슷하게 키와 값을 매핑해 저장하고 저장된 순서대로 각 요소에 접근 가능
//Map 객체 생성
let userMap = new Map();

//키와 값으로 데이터를 저장해보자.
userMap.set("name", "홍길동");
userMap.set("email", "abc@email.com");
userMap.set("phone", "000-0000-0000");

//Map 객체 크기를 알아보자
// 3
userMap.size;
//데이터를 읽어보자.
// 홍길동
userMap.get("name");
//특정 키에 값이 있는지 확인해보자
//true
userMap.has("name");
//특정 키와 값을 제거해보자.
//파라미터로 키 전달
userMap.delete("name");
//저장된 데이터를 모두 읽어보자.
userMap.forEach(function(item) {
    console.log(item);
});

//모든 데이터를 한 번에 삭제해보자.
//저장되어 있는 모든 데이터가 삭제 됨.
userMap.clear();