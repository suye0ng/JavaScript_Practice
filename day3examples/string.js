let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sln = txt.length;

let str = "Please locate where 'locate' occurs!";
let pos1 = str.indexOf("locate");
let pos2 = str.lastIndexOf("locate");
let pos3 = str.indexOf("locate",15);

let fruit = "Apple, Banana, Kiwi";
let res1 = fruit.slice(7,13);
let res2 = fruit.slice(7); //Banana, Kiwi
let res3 = fruit.slice(-12); //Banana, Kiwi

let res4 = fruit.substring(7,13);
let res5 = fruit.substr(7,6);

let city = "Please visit Seoul and Seoul!";
let res6 = city.replace("Seoul","Jeju");
let res7 = city.replace("SEOUL","Jeju");
let res8 = city.replace(/SEOUL/i,"Jeju");
let res9 = city.replace(/SEOUL/g,"Jeju");

let greeting = "Hello World";
let res10 = greeting.toUpperCase();
let res11 = greeting.toLowerCase();

let g1 = "Hello";
let g2 = "World";
let res12 = g1.concat(" ",g2);
let res13 = g1 + " " + g2;

let greeting2 = "         Hello World!        ";
greeting2.trim();

let i = "5";
//0005
i = i.padStart(4,0);
//5000
i = i.padEnd(4,0);

let res14 = greeting.charAt(0);
let res15 = greeting.charCodeAt(0); // 72

let birthday = "1997-06-12";
let res16 = birthday.split("-"); // ["1997" "06" "12"]

let url = "http://naver.com";
if (url.startsWith("http://") || url.startsWith("https://")) {
    //올바른 형식의 웹 사이트 처리
} else {
    //잘못된 형식의 웹 사이트 처리
}

let file = "abc.pdf";
if (file.endsWith(".pdf")) {
    //정상 pdf 파일 처리
} else {
    //잘못된 파일 처리
}