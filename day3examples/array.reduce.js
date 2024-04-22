//arr.reduce(callback(accumulator, currentValue, index, array), initialValue);
//reduce()는 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 callback 함수를 한 번씩 실행
//콜백의 최초 호출 때 accumulator와 currentValue는 다음 두 가지 값 중 하나를 가질 수 있다.
//만약 reduce() 함수 호출에서 initialValue를 제공한 경우, accumulator는 initialValue와 같고 currentValue는 배열의 첫 번째 값과 같다.
//initialValue를 제공하지 않았다면, accumulator는 배열의 첫 번째 값과 같고 currentValue는 두 번째와 같다.

let points = [40, 100, 1, 5, 25, 10];

let sum = points.reduce(function (total, currentValue) {
    return total + currentValue;
}, 0); //sum = 181