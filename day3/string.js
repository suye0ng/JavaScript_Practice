let text = "asdfghfggjhgjrjgbnrj";
let sin = text.length;

let str = "Please locate where 'locate' occurs!";
let pos1 = str.indexOf("locate");
let pos2 = str.lastIndexOf("locate");

let fruit = "apple,banana,kiwi";
let res1 = str.slice(7,13);
let res2 = str.slice(7);
let res3 = str.slice(-12);

let res4 = str.substring(-12);

let city = "Plase visit Seoul and 'Seoul'";
let res5 = city.replace("Seoul","Jeju");
let res6 = city.replace("SEOUL","Jeju");
let res7 = city.replace(/SEOUL/i,"Jeju");
let res8 = city.replace(/Seoul/g,"Jeju");

let greeting = "Hello World"
let res10 =greeting.toUpperCase();
let res11 = greeting.toLowerCase();

let g1 = "Hello";
let g2 = "World";
let res12 = g1.concat(" ",g2);

let greeting2 = "       Hello World        ";
greeting2.trim();

let i = "5";
i = i.padStart(4, 9);
i = i.padEnd(4,0);

let res14 = greeting.charAt(0);
let res15 = greeting.charCodeAt(0);

let birthday = "1999-08-30";
let res16 = birthday.split("-");

let url = "https://naver.com"
if (url.startsWith("https://") || url.startsWith("http://")) {
    //올바른 형식의 웹사이트 처리
} else {
    //올바르지 않은 형식의 웹 사이트 처리
}

let file = "abc.pdf";
if (file.endsWith(".pdf")) {
    //올바른 .pdf 파일 입니다.
} else {
    //.pdf 파일이 아닙니다.
}
