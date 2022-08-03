// you are given a array of fruit basket
// remove banana and replace it by mango
// remove orange and add watermelon
var fruits = ['Apple', 'Banana', 'Orange'];
// var indexBan = fruits.indexOf('Banana');
// fruits.splice(indexBan, 1);
// console.log(fruits);
// fruits.insert(indexBan, 'Mango');
// console.log(fruits);
fruits[1] = 'Mango'
console.log(fruits);
fruits.pop();
fruits.push('Watermelon')
console.log(fruits);
