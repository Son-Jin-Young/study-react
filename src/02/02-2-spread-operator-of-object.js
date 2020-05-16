var objectOne = {one: 1, two: 2, other: 0};
var objectTwo = {three: 3, four: 4, other: -1};
var combined1 = {
    one: objectOne.one,
    two: objectOne.two,
    three: objectTwo.three,
    four: objectTwo.four
};

// ES6 이전
var combined2 = Object.assign({}, objectOne, objectTwo);
var combined3 = Object.assign({}, objectTwo, objectOne);
var others = Object.assign({}, combined3);

delete others.other;

console.log(combined1);
console.log(combined2);
console.log(combined3);
console.log(others);

// ES6
var combined4 = {
    ...objectOne,
    ...objectTwo
};

var combined5 = {
    ...objectTwo,
    ...objectOne
};

var {other, ...others} = combined5;
console.log(other);
console.log(others);
