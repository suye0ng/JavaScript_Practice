let fruits = ["Cherry","Banana","Lemon","Mango"];
fruits.toString();//

//Cherry*Banana*Lemon....
fruits.join("*");

fruits.pop();
fruits.push("Kiwi"); //['Cherry', 'Banana', 'Lemon', 'Kiwi']

fruits.shift();
fruits.unshift("Mango");

fruits[0] = "WaterMelon";

fruits.splice(2,0,"Apple","Tomato"); //

let arr1 = ["Kia", "Hyndai"];
let arr2 = ["Volvo","BMW"];
let newArr = arr1.concat(arr2);

let myfruit1 = fruits.slice(2); //
let myfruit2 = fruits.slice(1,2); //