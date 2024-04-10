//push() : add one or more elements to the end of an array
const aa = [14,5,3,2];
aa.push(1);
console.log(aa);

//pop() : removes the last element of an array
console.log(aa.pop());

//shift() : removes first element fron an array 
console.log(aa.shift());

//unshift() : add one or more elements to the beginning of an array
aa.unshift(0);
console.log(aa);

//concat() :join two or more arrays
const bb = [0,1];
const combinedAA = aa.concat(bb);
console.log(combinedAA);

//join() : joins all elements of an array  into a string
console.log(aa.join("_ "));

//splice() : add or remove elements from an array 
const spliced = aa.splice(1,1);
console.log(spliced);
console.log(aa);