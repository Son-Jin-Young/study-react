var array1 = [1, 2];
var array2 = [3, 4];

// ES6 이전
var combined1 = [array1[0], array1[1], array2[0], array2[1]];
var combined2 = array1.concat(array2);
var combined3 = [].concat(array1, array2);
var first = array1[0];
var second = array1[1];
var third = array1[2] || 'empty';

function func1() {
    var args = Array.prototype.slice.call(this, arguments);
    var first = args[0];
    var others = args.slice(1, args.length);

    return {
        first,
        others
    };
}

console.log('ES6 이전');
console.log(combined1);
console.log(combined2);
console.log(combined3);
console.log(first);
console.log(second);
console.log(third);
console.log(func1(combined1));

// ES6
const combined = [...array1, ...array2];
const [one, two, three = 'empty', ...others] = array1;

console.log();
console.log('ES6');
console.log(combined);
console.log(one);
console.log(two);
console.log(three);
console.log(others);
console.log(func2(combined));

function func2(...args) {
    var [first, ...others] = args;

    return {
        first,
        others
    };
}

