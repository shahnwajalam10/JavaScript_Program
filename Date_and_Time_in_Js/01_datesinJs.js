// Dates

let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatDate=new Date(2023,0,23);
console.log(myCreatDate.toDateString());



let myCreatedDate=new Date(2023,0,23,5,3);
console.log(myCreatedDate.toLocaleString());




let CreatedDate=new Date("01-14-2023");
console.log(CreatedDate.toLocaleString());





let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(CreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));






let newDate=new Date();
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    
})