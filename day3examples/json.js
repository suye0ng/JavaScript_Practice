let data = {
    employees: [
      { firstName: "John", lastName: "Doe" },
      { firstName: "Anna", lastName: "Smith" },
      { firstName: "Peter", lastName: "Jones" },
    ],
};

//서버로 데이터를 전송하기 위해 객체를 문자열로 전환
let stringValue = JSON.stringify(data);

let text =
'{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//서버에서 응답받은 문자열 형태의 JSON을 Object 객체로 변환 
let object = JSON.parse(text);