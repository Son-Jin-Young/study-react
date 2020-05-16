// ES6 이전
// function add(first, second) {
//     return first + second;
// }

var add = function (first, second) {
    return first + second;
};

console.log(typeof add === 'function');

// ES6
var add = (first, second) => {
    return first + second;
};

var add = (first, second) => first + second;
var addAndMultiple = (first, second) => ({add: first + second, multiple: first * second});

console.log(add(10, 20));
console.log(addAndMultiple(10, 20));