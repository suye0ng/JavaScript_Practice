let x = 123;
x.toString();
(123).toString();

x = 10.565;
x.toExponential(2);
x.toExponential(4);

x.toFixed(0); //11
x.toFixed(2); //10.56
x.toFixed(4); //10.5650

x.toPrecision();  //10.565
x.toPrecision(2); //11
x.toPrecision(4); //10.56

parseInt("10") //10
parseInt("-12.33") //-12
parseInt("year 10") //NaN

parseFloat("10") //10
parseFloat("12.33") //12.33
parseFloat("10 year 10") //10
parseFloat("year 10") //NaN, Not a Number

Math.round(4.9) //5 반올림
Math.round(4.2) //4
Math.round(4.3) //4

Math.ceil(4.3) //5 올림
Math.ceil(-4.9) //-4

Math.floor(4.2) //4 내림
Math.floor(4.8) //4

Math.trunc(4.2) //4
Math.trunc(4.9) //4
Math.trunc(-4.9) //-4

Math.sign(-4) //-1
Math.sign(0) //0
Math.sign(4) //1

Math.pow(8,2) //64 8 ** 2 8의 2승

Math.sqrt(4,2) //2 4루트2

Math.abs(-8) //8


Math.min(-8 ,150,18,28,4,1818) //-8
Math.max(-8 ,150,18,28,4,1818) //1818

Math.random();
Math.floor(Math.random()*10) //0-9랜덤
Math.floor(Math.random()*101) // 0-100랜덤