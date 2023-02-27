

//todo - Bir functionu diger functionda istifade etmek.

// function sumNums(num1, num2) {
//     let result  = num1 + num2;
//     return result;
// }
// let subCost = subNums(23,12);
// let sumCost = sumNums(subCost,7);

// console.log(sumCost);



// function subNums(number1,number2){
//     let result = number1- number2;
//     return result;
// }

// todo - her hansi Metinde herf axtarmaq

// let text = "Men sabah derse getmeyecem"

// let letter = prompt("Please enter a letter :")

// let result = checkLetter(letter);
// console.log(result);

// function checkLetter(word){
//     let sum = 0;
//    for (let i = 0; i <= text.length; i++) {
//       if (text.charAt(i).toLowerCase() === word.toLowerCase()) {
//         sum ++;
//       }

//    }
//    return sum;
// }

// todo - Excellent number => her hansi bir ededin bolenlerinin cemi ozunun 2 misline beraberdirse bu edede "Excellent Number" deyilir.

// let number = Number(prompt("Please enter a number :"));

// isExcellentNumber(number);

// function isExcellentNumber(num) {
//    let sum = 0;
//    for (let i = 2; i <= number/2; i++) {
//        if (number%i == 0) {
//          sum+=i;
//        }

//    }
//    sum+=1+number;
//    if (sum == number*2) {
//       console.log("Excellent number -" + number)
//    }
//    else{
//       console.log("Not Excellent number -" + number)
//    }
// }

// todo - Sum of Simple Number

// let endResult = sumSimpleNumbers(10,23);
// console.log(endResult);

// function sumSimpleNumbers(num1,num2) {

//    let sum = 0;

//    for (let i = num1; i <= num2; i++) {

//      let result = true;

//      for (let j = 2; j <= Math.floor(i/j); j++) {

//         if (i % j == 0) {
//          result = false;
//          break;
//         }
//      }

//      if (result) {
//       sum += i;
//      }

//    }
//    return sum;
// }

// todo - Sum of Complex Number

// let endResult = sumComplexNumber(2, 10);
// console.log(endResult);

// function sumComplexNumber(num1, num2) {

//    let sum = 0;

//    for (let i = num1; i <= num2; i++) {

//       let result = true;

//       for (let j = 2; j <= Math.floor(i / j); j++) {

//          if (i % j == 0) {
//             result = false;
//             break;
//          }
//       }
//       if (!result) {
//          sum += i;
//       }
//    }
//    return sum;
// }

// todo - Convert Decimal to Binary Number

// convertDecimalToBinary(8)

// function convertDecimalToBinary(number) {

//     let binary = "";
//     while (true) {
//         binary += (number%2).toString();
//         number = Math.floor(number/2)
//         if (number == 1) {
//             binary += 1
//             break;
//         }
//     }
//     let result = Reverse(binary);
//     console.log(result);
// }

// function Reverse(binary) {

//     let reverseBinary = "";
//     for (let i = binary.length-1; i >= 0; i--) {
//        reverseBinary+= binary.charAt(i)
//     }
//     return reverseBinary;
// }


// todo convert Binary to Decimal number

// let binary = prompt("Please enter a number :");

// function convertBinaryTDecimal(bin){

//     let sum = 0;
//     let sup = 0;
//     for( let i = bin.length-1; i >= 0; i--){
//         if (Number(bin.charAt(i)) != 0) {
//             sum += Number(bin.charAt(i)) * Math.pow(2,sup);
//         }
//         sup ++;
//     }

//     console.log("Sum - "+sum +";");
// }

// convertBinaryTDecimal(binary)