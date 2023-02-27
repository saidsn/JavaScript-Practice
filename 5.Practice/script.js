
//! Multiplication Table



//?
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + "x" + j + "=" + (i * j) + ":");
//     }
//     console.log("--------------------------");
// }

//?

//! Simple Number


// let num = Number(prompt("Please enter a number :"));
// let result = true;

// for (let i = 2; i <=  Math.floor(num / i); i++) {
//     if(num % i == 0){
//         result = false;
//         break;
//     }
// }
// if (result) {
//     alert(num + "-Simple Number :")
// }else{
//     alert(num + "-Not simple Number :")
// }

//! Sum of SimpleNumber

// let number1 = 5;
// let number2 = 20;

// let sum = 0;


// for (let i = number1; i <= number2; i++) {
//     let result = true;
//     for (let j = 2; j <= Math.floor(i/j); j++) {
//         if(i % j == 0){
//           result = false;
//           break;
//         }
//     }
 

//     if (result) {
//         sum += i;
//     }
// }
// console.log(sum);



//! Fuctorial

//todo: Prompt ile
// let num = Number(prompt("Please enter a number :"))
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//    factorial *= i;
// }
// alert("Factorial = " + factorial);


//todo: Sade qaydada
// let number = 5;
// let factorial = 1;

// for (let i = 1; i <= number; i++) {
//     factorial *= i;
    
// }
// console.log("Factorial = " + factorial);

//! Armstrong numbers 
//? 370, 407 

// let num = prompt("Please enter a number :");

// let Sum = 0;

// for (let i = 0; i < num.length; i++) {
//    let number = num.charAt(i)
//    Sum += number * number * number;
// }

// if (num == Sum) {
//     alert("Armstrong ededidir : " + num )
// }else{
//     alert("Armstrong ededi deyil : " + num)
// }

//?
// let num = prompt("Please enter a number :");
// const newLine = "\r\n";
// let sum = 0;

// for (let i = 0; i < num.length; i++) {
//     let number = num.charAt(i);
//     sum += number * number * number;
// }

// if (num  == sum) {
//     alert("Armstrong ededidir :" + newLine
//      + "Sum = " + sum + " ;" + newLine
//      + "Num = " + num + " ;");
// }else{
//     alert("Armstrong ededi deyil :" + newLine
//     + "Sum = " + sum + " ;" + newLine
//     + "Num = " + num + " ;");
// }
//?

