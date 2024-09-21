// =====date========
var d=new Date();
console.log(d);
    
// ==========get methods========
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

//? Set methods
var d= new Date("2020 03 20 12:05:46:759")//"year month date hours minutes seconds miliseconds"
console.log(d);
d.setFullYear(2027);
d.setMonth(10);
d.setDate(10);
d.setHours(11);
d.setMinutes(49);
d.setSeconds(60);
d.setMilliseconds(999);
