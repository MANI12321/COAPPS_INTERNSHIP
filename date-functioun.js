//new Date() : crates a date object
const date = new Date();
console.log(date);

//getDate() : to get date components 
console.log(date.getDate());

//getMonth()
console.log(date.getMonth());

//getFullYear()
console.log(date.getFullYear());

//setDate() : to set date components
date.setDate(2);

//setMonth()
date.setMonth(5);

//setFullYear()
date.setFullYear(2012);
console.log(date);