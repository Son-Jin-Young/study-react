// ES6 이전
var number = 10;
number = 11;
console.log(number);

// ES6
// 가변 변수
let num = 1;
num = num * 3;

let str = '문자열';
str = '변경 문자열';

let arr = [];
arr = [1, 2, 3];

let obj = {};
obj = {name: '새 객체'};

console.log(num);
console.log(str);
console.log(arr);
console.log(obj);

// 불변 변수
const arr2 = [];
arr2.push(1);
console.log(arr2);
arr2.splice(0, 0, 0);
console.log(arr2);
arr2.pop();
console.log(arr2);

const obj2 = {};
obj2['name'] = '이름';
console.log(obj2);
Object.assign(obj2, {name: '다른 이름'});
console.log(obj2);
delete obj2.name;
console.log(obj2);