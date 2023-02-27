
//! Functionlarin 3 novu var;

//todo: 1---Regular function;
//todo: 2---Arrow function;
//todo: 3---Recursive function;



//! Arrow və Regular funksiyası arasında müəyyən fərqlər asagidakilardir;

//todo--1. Sintaksis

// -- Regular: function Sum(){}
//?-----------
// -- Arrow: function let Sum = function()=>{}

//todo--2. Arqumentlər yoxdur (arqumentlər massiv kimi obyektlərdir)

// function findMax() {
//     console.log(Math.max(...arguments))
// }
// findMax(1, 2, 34, 77, 42, 99, 831); 
//?---------
// let findMaxNumber = () => {
//     return Math.max(arguments);
// }
// console.log(findMaxNumber(1, 2, 45, 65, 32, 88))

//todo--3. Arrow funksiyası üçün prototip obyekti yoxdur

// isProtoType2();
// function isProtoType2 (){
//     console.log(isProtoType2.prototype)
// }
//?-------
// let isProtoType1 = () => {
//     console.log(isProtoType1.prototype)
// } 
// isProtoType1();

//todo--4. "New" açar sözlə çağırıla bilməz (Constructor funksiyası deyil);
//todo-- Conustructor olmadigi ucun yeni object yaratmaq olmur,cunki object yaratdiqda ilk ise dusen constructor olur;

// function Sum(name){
//     this.name  = name;
// }
// let user = new Sum("Seid");

// console.log(user);
// console.log(user.name);
//?---------
// let userDetails = (name) => {
//     this.name = name;
// }

// let user  = new userDetails("Seid");
// console.log(user);

//todo--5. "This" keyworduna sahib deyil (zəng et, tətbiq et və bağlama gözlənildiyi kimi işləməyəcək);

// let user = {
//     userName: "Seid",
//     getUserName: function(){
//        return this.userName;
//     }
// }
// let getName = user.getUserName;
// console.log(getName());
// console.log(user.getUserName());
//?--------
// let user1 = {
//     userName: "Ramil",
//     getUserName: ()=>{
//         return this.userName;
//     }
// }
// let getName = user1.getUserName;
// console.log(getName());
// console.log(user1.getUserName());

//todo--6. Generator funksiyası kimi istifadə edilə bilməz;

// function *Sum(name){
//    return name;
// }
// console.log(Sum("Seid"))
//?-----------
// let user = *()=>{

// }

//todo--7. Dublikat adlandırılmış parametrlərə icazə verilmir;

// function Num(a, a, a) {
//     console.log(a);
// }
// Num(5, 7, 8);
//?------------
// let Num = (a,a,a) =>{
//     console.log(a);
// }
// Num(6,4,7);

//!--Regular function;

//todo: Regular functionlar 2 cur yazilir;
//1.Function Declaration;---- Yazildiqdan evvelde cagirila bilir;

// console.log(Sum());

// function Sum(){
//     return "ok";
// }

//2.function expression;---- Yalniz yazildiqdan sonra cagrilir;

// console.log(Sum());

// let Sum = function(){
//     return "ok";
// }

//todo: Functions (no parameters)

// function Write() {
//     console.log("Hello");
// }

// Write();
// Write();

//todo: Functions (with parameters)

// let newLine = "\r\n";
// function Numbers(num1, num2){
//     console.log(num1 + newLine  + num2 )

//     console.log(typeof num1 + newLine + typeof num2);
// }

// Numbers(5,7);

//?
// function fullName(name , surname){
//     console.log(name + " " + surname);
// }

// fullName("Seid", "Nuraliyev");
// fullName("Sadiq", "Nahmetov");


//?
// function Cube(number){
//     console.log(number * number * number);
// }

// Cube(5);

//?
// let age = Number(prompt("Pleasse enter your Age :"));

// checkAge(age);

// function checkAge(ok) {
//     if (age>18) {
//         console.log("You can enter Acadeny :")
//     }else{
//         console.log("You can't enter Academy :")
//     }
// }

//todo: Return functions

// function Square(num) {
//     let square = num * num;
//     return square;
// }

// Square(2);
// let result = Square(2);


// function Cube(number){
//     let  cube =  result * result *result;
//     console.log(cube)
// }

// Cube(result);


//?
// let name = prompt("Please enter a name : ");
// let surname = prompt("Please enter surname :");

// function Name(name, surname ){
//    return (name + " " + surname);
// }

// let result = Name(name, surname);
// console.log(result);

//?
// function Square(num) {
//     debugger
//     let square = num * num;
//     return square;
// }

// function Cube(num) {
//     debugger
//     let cube = num * num * num;
//     let squareResult = Square(cube);
//     console.log(squareResult)
// }

// Cube(2);



//! Arrow Function

//todo Normal Arrow function
// let Sum = (n,m) =>{
//   let sum = n + m;
//   return sum;
// }
// console.log(Sum(3,6))

//?------------------
//todo: Skopka olmadan Arrow function;
// let Sum = (n, m) => n + m ;
// console.log(Sum(9,6));

//?-----------------
//todo: Tek parametr olduqda moterizeye ehtiyac olmur;
// let Sqrt = m =>Math.sqrt(m);
// console.log(Sqrt(9));

//?-----------------
//todo: Parametirsiz Arrow function;
// let sayHello = () => "Hello";
// console.log(sayHello());


// let sayHello = () => {
//     return "Hello";
// }
// console.log(sayHello());

// let Word = (name,surname) => `${surname} ${name}`;
// console.log(Word('Seid',"Nuraliyev"));



//! Recursiv Functions;

//todo: Recursiv Functionslar bir functiounun ozunde cagrilmasidir;
// function Recursive() {
//     console.log("Rcursive");
// }

// Recursive();

//?-------------------------------------

//todo: Recursive functioanlari sonsuz donguden azad etmek ucun parametrden istifade olunur;
// function countDown(n) {
//     for (let i = n; i >= 0; i--) {
//         console.log(i);
//     }
//     console.log("Seid");
// }

//?--------------------------

// let countDownRecursive = (n) => {
//     if (n < 0) {
//         return;
//     }
//     console.log(n)
//     countDownRecursive(n - 1);
// }
// countDownRecursive(8);

//?-------------------------------------
// let sumNumsRecursive = (m, total) => {
//     if (m <= 0) {
//         return total;
//     }
//     console.log(m);
//     return sumNumsRecursive(m - 1,total+m);
// }

// console.log(sumNumsRecursive(4,0))



