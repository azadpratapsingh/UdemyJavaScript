let arr1 = new Array();
let arr2 = [];

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] );
console.log(fruits)

// replace an element:
fruits[2] = 'Pear';
console.log(fruits)


//add a new one to the array:
fruits[3] = 'Lemon';
console.log(fruits)

//total count of the elements in the array is its length
console.log(fruits.length)

//n array can store elements of any type
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
console.log([3]);

console.log(( fruits[fruits.length-1] ))

// can be written as 
console.log(( fruits.at(-1) ))

// push-shift, pop unshift
