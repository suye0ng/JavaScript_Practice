//배열에서 sort()는 요소가 문자열이든 숫자든 기본 오름차순으로 정렬
//숫자 오름차순 정렬은 별도의 정렬 함수 필요.
let points = [40, 100, 1, 5, 25, 10];

//숫자 오름차순->정렬의 개념
points.sort(function(a,b) {
  return a-b;
  });

//숫자 내림차순->정렬의 개념
points.sort(function(a,b) {
  return a+b;
  });

//문자열 요소를 갖는 배열 정렬, 역배열
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); //정렬
fruits.reverse(); //역 정렬

//객체의 특정 키를 기준으로 정렬할 경우
let persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울",
  },
  {
    name: "김종국",
    point: 92,
    city: "서울",
  },
  {
    name: "양세찬",
    point: 76,
    city: "제주",
  },
  {
    name: "하하",
    point: 81,
    city: "서울",
  },
];

//
persons.sort(function(a,b) {
  return a.point > b.point ? -1 : a.point < b.point ? 1 : 0;
  });
