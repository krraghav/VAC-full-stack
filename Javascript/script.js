// var a=10;
// let b =20;
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// var num=10;
// var str="Rash";
// var underfine;
// var Null = null;
// var bool="true";

// console.log(num); 
// console.log(str);
// console.log(underfine);
// console.log(Null);
// console.log(bool);


// var bigInt=123n;
// var symbol=Symbol("hi");

// console.log(bigInt);
// console.log(symbol);

// var arr=[10,20,30,40,50];
// console.log(arr , arr);
// var obj={
//     name:"Rash",
//     dept:"AI&DS ",
//     roll:1234
// }
// console.log(obj,obj);

// arithmetic operator(+,-,*,/,%)
// var a=10;
// var b="viky";

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// //logical operator(&&,||,!)

// // true true
// // true false
// // false true
// // false false

// var a=true;
// var b= false;

// console.log(a&&b);
// console.log(a||b);
// console.log(!a);


// //Relational operator(>.>=,<,<=,==,!=)

// a=10;
// b="10";


// console.log(a<b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a>=b);
// console.log(a==b);
// console.log(a!=b);

// //Assignment operator(=,+=,-=,*=,/=,%=,**=)
// a=10;
// b=20;
// a+= b; //30

// console.log(a);
// a-= b;
// console.log(a);


// var a=10;
// console.log(a--);
// console.log(--a);
// a=1;
// b=1;
// c=0;
// var result= a++ + --b + ++c - ++a + ++b + c++ + b++ +a;
// console.log(result);
// var a=10;
// var b=20;

// if(true){
//     console.log(`${a} + ${b}=${a+b}`)
// }

//var a; //Hoisting
// console.log(a);
// var a=10;

// var a=10;//Global scope
// //let b=20;//Block scope
// const b= 20;//Block scope
// if(true){
//     console.log(a);
//     //let b= 30;//Block scope
//     const b=30;//Block scope
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// var a=10;
// if(a%2==0){
//     console.log(`${a} is Even`);
// }
// else{
//     console.log(`${b}is Odd`)
// }

// 
// var a=10;
// //condition ? true statement:fa;lse statement
// var result = a%2===0 ? "Even":"Odd"
// console.log(result)

// 

// // 
// var val =1024;
// var count= 0;
// while(val>0){
//     count++;
//     val=Math.floor(val/10);
// }
// console.log(count);

// for (let i=1;i<=10;i++){
//     if(i%2===0){
//         continue;
//     }
//     console.log(i);
// }
// 
// Arrow function
// vardemo= (a=5 , b=6) => {
//     console.log(a+b);
// }
// demo (10,20);
// demo ();
// demo (10);

//spread operato(...)
// 
//Destructing operator 
// var[m1,m2,m3,m4,m5] = [90,99,98,97,100]
// console.log(m1,m2,m3,m4,m5);

// var{name,mobile,dept,email,isActive}={
//     name:"Raghav",
//     mobile:6383995592,
//     dept:"AI & DS",
//     email:"raghav.110.JP@gmail.com",
//     isActive: true
// }
// console.log(name,mobile,dept,email,isActive);

// var arr=[10,20,30,40,50];
// for(let index in arr){
//     console.log(index)
// }

// for(let value of arr){
//     console.log(value)
// }

// var obj={
//     name:"raghav",
//     dept:["CT","AI&DS"],
//     mobile:987654321
// }
// for (let key in obj){
//     console.log(key,obj[key])
// }

// var arr=[1,2,3,4,5,6];

// var result = arr.map((val) => (val*2));
// console.log(result);


// var even = arr.filter((val)=>val%2===0);
// console.log(even)

// var sum = arr.reduce((add,val)=>(add+val),0);
// console.log(sum)


var username = {
    name:"Rash"
    dept:["AI%DS"]
    skills:"HTML,PYTHON etc"

    programming:["Java","Javascript","C"]
    database:["SQL"]
}
var user = {
    ...username,
    passsword:123456789
}
console.log(user);