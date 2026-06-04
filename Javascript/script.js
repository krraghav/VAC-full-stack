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
var a=10;
var b="viky";

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//logical operator(&&,||,!)

// true true
// true false
// false true
// false false

var a=true;
var b= false;

console.log(a&&b);
console.log(a||b);
console.log(!a);


//Relational operator(>.>=,<,<=,==,!=)

a=10;
b="10";


console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);
console.log(a==b);
console.log(a!=b);

//Assignment operator(=,+=,-=,*=,/=,%=,**=)
a=10;
b=20;
a+= b; //30

console.log(a);
a-= b;
console.log(a);


var a=10;
console.log(a--);
console.log(--a);
a=1;
b=1;
c=0;
var result= a++ + --b + ++c - ++a + ++b + c++ + b++ +a;
console.log(result)