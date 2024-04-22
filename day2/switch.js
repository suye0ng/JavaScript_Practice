let dt = new Date();
let day = dt.getDate();
let dayName = "";
switch (day) {
    case 0 :
        dayName = "일요일";
        break;
    case 1 :
        dayName = "월요일";
        break;
    case 2 :
        dayName = "화요일";
        break;
    case 3 :
        dayName = "수요일";
        break;
    case 4 :
        dayName = "목요일";
        break;
    case 5 :
        dayName = "금요일";
        break;
    case 6 :
        dayName = "토요일";
        break;
    default:
        break;
}

//배열
let days = ["일","월","화","수","목","금","토"];
let dayArray = days[day];
console.log(day)