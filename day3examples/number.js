let x = 123;
x.toString(); //문자 123
(123).toString();

x = 10.565;
x.toExponential(2) //10.57e+0
x.toExponential(4) //10.5650e+0

x.toFixed(0) //11
x.toFixed(2) //10.56
x.toFixed(4) //10.5650

x.toPrecision() //10.565
x.toPrecision(2) //11
x.toPrecision(4) //10.56

parseInt("-10") //-10
parseInt("-12.33") //-12
parseInt("year 10") //NaN

parseFloat("10") //10
parseFloat("12.33") //12.33
parseFloat("year 10") //NaN
parseFloat("10 year") // 10