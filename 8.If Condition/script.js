
//! if/else condition

// let name = "Seid";

// if (name == "Seid") {
//     console.log("surname : " + "Nuraliyev");
//     console.log("Age : " + 33);
// }else{
//     console.log("Not found");
// }


// let age = (prompt("Age : "));
// let money =(prompt("Money : "));

// if (age >= 15 && money >= 200) {
//     alert("Qebul olundunuz ");
// }else{
//     alert("Qebul olunmadiniz");
// }


// let consoleProject = prompt("Total Console Project : ");
// let endProject  = prompt("Total End Project : ");

// if (consoleProject >= 20 && endProject >= 65) {
//     console.log("Diplom Ala bilersiniz!");
// }else{
//     console.log("Diplom ala bilmersiniz!")
// }

// let consoleProject = Number(prompt("Enter Console Result : "));
// let frontProject = Number(prompt("Enter Front Result : "));    
// let backProject = Number(prompt("Enter Back Result : "));

// let overAge = (consoleProject * 0.3)+ (frontProject*0.4)+ (backProject*0.5);

// if (overAge >=65) {
//     alert("You can enter end project : " + overAge);
// }else{
//     alert("You can't enter end project : " + overAge);
// }


//! else if condition

// let name1 = prompt("Please enter chossen name :")

// if (name1 == "Seid") {
//     alert("Your name is :  " + name1)
// }
// else if (name1 == "Cavid"){
//     alert("Your name is :  " + name1)
// }
// else if (name1 == "Ramil"){
//     alert("Your name is :  " + name1)
// }
// else{
//   alert("Please enter valid name :")
// }

//! if if condition

// let password = prompt("Please enter your password : ");
// let confirmPassword = prompt("Please enter your confirmPassword : ");

// checkPassword1(password, confirmPassword);


// function checkPassword1(password, confirmPassword) {
//     if (password == "") {
//         alert("Password can't be empty : ")
//     }
//     else{
//         if (confirmPassword == "26021989az" ) {
//             alert("Successful entered :")
//         }else{
//             alert("Please enter valid confirmPassword :");
//         }
//     }
// }


// checkPassword2(password, confirmPassword);
// function checkPassword2(password, confirmPassword) {
//     if (password == "") {
//         alert("Please enter password :")
//         return;
//     }
//     if ( confirmPassword == "" ) {
//         alert("Please can't be empty :")
//         return;
//     }
//     if (confirmPassword != "26021989az") {
//         alert("Please enter valid confirm");
//         return;

//     }

//     alert("Succesfull")
// }


//!  practice else if

// let age  = Number(prompt("Pleae enter your age :"));


// if (age <= 10) {
//     alert("BaBy : " + age)
// }else if(age >=10 && age <=20){
//     alert("Youn Boy : " + age)
// }else if(age >=20 && age <=40){
//     alert("Midler Boy : " + age)
// }else if(age >=40 && age <=60){
//     alert("Old man : " + age)
// }else if(age >=60 && age <= 90){
//     alert("better old man : " + age)
// }

// let num  = Number(prompt("Please enter a first number : "));
// let num1 = Number(prompt("Please enter a second number: "));

// let result  = num / num1;

// if ((result) % 2 == 0) {
//     alert("Even numbers  : " + result)
// }else if((result) % 2 == 1){
//     alert("Odd numbers : " + result)
// }

// let money = Number(prompt("Please enter a money : "));
// let mass  = Number(prompt("Please enter a mass : "));

// let fruitPrice = Number(money / mass);

// if (fruitPrice <= 2) {
//     alert("This  is an apple : " + fruitPrice + "Azn")
// }else if(fruitPrice >= 2 && fruitPrice <= 4){
//     alert("This is an orrange : " + fruitPrice + "Azn");
// }else if(fruitPrice >=4 && fruitPrice <= 6){
//     alert("This is a Banana : " + fruitPrice + "Azn");
// }else if(fruitPrice >= 6 && fruitPrice <= 10){
//     alert("This is a Kivi : " + fruitPrice + "Azn")
// }else if(fruitPrice >=10){
//     alert("This Fruit not found : ");
// }


// let dizel = 0.9, benzin = 1, premium = 1.5;

// const newLine = "\r\n";

// const fuelContext = "1-Dizel" + newLine
//     + "2-Benzin" + newLine
//     + "3-Premim" + newLine
//     + "Chosse Fuel type";

// let fuelType = prompt(fuelContext);
// if (fuelType == "1" || fuelType == "2" || fuelType == "3") {
//     let fuelLiter = Number(prompt("Enter fuel liter:"));
//     let yourMoney = Number(prompt("Enter your money:"));


//     if (fuelType == "1") {
//         let totalMoney = dizel * fuelLiter;
//         if (totalMoney < yourMoney) {
//             yourMoney = yourMoney - totalMoney;
//             alert("Your money is Ok :" + newLine
//                 + "My money : " + yourMoney + "Azn");
//         } else {
//             alert("Your money is not Ok :" + newLine
//                 + "Total money : " + totalMoney + "Azn" + newLine
//                 + "Your Money : " + yourMoney + "Azn" + newLine
//                 + "Missing money :" + (totalMoney - yourMoney) + "Azn");
//         }
//     } else if (fuelType == "2") {
//         let totalMoney = benzin * fuelLiter;
//         if (totalMoney < yourMoney) {
//             yourMoney = yourMoney - totalMoney;
//             alert("Your money is Ok :" + newLine
//                 + "My money : " + yourMoney + "Azn");
//         } else {
//             alert("Your money is not Ok :" + newLine
//                 + "Total money : " + totalMoney + "Azn" + newLine
//                 + "Your Money : " + yourMoney + "Azn" + newLine
//                 + "Missing money :" + (totalMoney - yourMoney) + "Azn");
//         }
//     } else if (fuelType == "3") {
//         let totalMoney = premium * fuelLiter;
//         if (totalMoney < yourMoney) {
//             yourMoney = yourMoney - totalMoney;
//             alert("Your money is Ok :" + newLine
//                 + "My money : " + yourMoney + "Azn");
//         } else {
//             alert("Your money is not Ok :" + newLine
//                 + "Total money : " + totalMoney + "Azn" + newLine
//                 + "Your Money : " + yourMoney + "Azn" + newLine
//                 + "Missing money :" + (totalMoney - yourMoney) + "Azn");
//         }
//     }


// }
// else {
//     alert("Please enter valid FuelType :")
// };




// let Alma = 2.5, Armud = 3, Heyva = 1.5;

// const newLine = "\r\n";



// const fruitContext = "1-Alma :" + newLine
//     + "2-Armud :" + newLine
//     + "3-Heyva :" + newLine
//     + "Please chosse valid fruit type :";

// let fruitType = prompt(fruitContext);
// if (fruitType == "1" || fruitType == "2" || fruitType == "3") {

//     let fruitMass = Number(prompt("Enter fruit mass :"));
//     let myMoney = Number(prompt("Please enter your money :"));

//     if (fruitType == "1") {
//         let totalMoney = Alma * fruitMass;
//         if (myMoney >= totalMoney) {
//             myMoney = myMoney - totalMoney;
//             alert("Your money is Ok : " + newLine
//                 + "Rest money : " + myMoney);
//         }
//         else {
//             alert("Your money is not Ok :" + newLine
//                 + "Total money : " + totalMoney + newLine
//                 + "Your Money : " + myMoney + newLine
//                 + "Missing Money : " + (totalMoney - myMoney));
//         }
//     } else if (fruitType == "2") {
//         let totalMoney = Armud * fruitMass;
//         if (myMoney >= totalMoney) {
//             restMoney = myMoney - totalMoney;
//             alert("Your money is Ok : " + newLine
//                 + "Rest money : " + restMoney);
//         }
//         else {
//             alert("Your money is not Ok :" + newLine
//                 + "Total money : " + totalMoney + newLine
//                 + "Your Money : " + myMoney + newLine
//                 + "Missing Money : " + (totalMoney - myMoney));
//         }
//     } else if (fruitType == "3") {
//         let totalMoney = Heyva * fruitMass;
//         if (myMoney >= totalMoney) {
//             restMoney = myMoney - totalMoney;
//             alert("Your money is Ok : " + newLine
//                 + "Rest money : " + restMoney);
//         }
//         else {
//             alert("Your money is not Ok :" + newLine
//                 + "Total money : " + totalMoney + newLine
//                 + "Your Money : " + myMoney + newLine
//                 + "Missing Money : " + (totalMoney - myMoney));
//         }
//     }
// }
// else {
//     alert("Please enter valid FruitType :")
// };


// let Computer = 350, Mobile = 200, HeadPhone = 150;

// const newLine = "\r\n";

// const electronicContext = "1-Computer" + newLine
//     + "2-Mobile" + newLine
//     + "3-HeadPhone" + newLine
//     + "Chosse valid electronic type :";

// let electronicType = prompt(electronicContext);

// if (electronicType == "1" || electronicType == "2" || electronicType == "3") {
//     let electronicCount = Number(prompt("Please enter electronic count :"));
//     let yourMoney = Number(prompt("Please enter your money :"));


//     if (electronicType == "1") {
//         let totalMoney = Computer * electronicCount;
//         let restMoney = yourMoney - totalMoney;

//         if (yourMoney >= totalMoney) {
//             alert("You can buy Computer : " + newLine
//                 + "Toyal Money : " + totalMoney + newLine
//                 + "Rest Money : " + restMoney)
//         }
//         else {
//             alert("You can't buy Computer :" + newLine
//                 + "Your Money : " + yourMoney + newLine
//                 + "Total Money : " + totalMoney + newLine
//                 + "Missing Money : " + (totalMoney - yourMoney))
//         }
//     }
//     else if (electronicType == "2") {
//         let totalMoney = Mobile * electronicCount;
//         let restMoney = yourMoney - totalMoney;
//         if (yourMoney >= totalMoney) {
//             alert("You can buy Mobile : " + newLine
//                 + "Rest Money : " + restMoney)
//         }
//         else {
//             alert("You can't buy Mobile : " + newLine
//                 + "Your Money : " + yourMoney + newLine
//                 + "Total Money : " + totalMoney + newLine
//                 + "Missing Money : " + (totalMoney - yourMoney))
//         }
//     } else if (electronicType == "3") {
//         let totalMoney = HeadPhone * electronicCount;
//         let restMoney = yourMoney - totalMoney;
//         if (yourMoney >= totalMoney) {
//             alert("You can buy HeadPhone : " + newLine
//                 + "Rest Money : " + restMoney)
//         }
//         else {
//             alert("You can't buy HeadPhone :" + newLine
//                 + "Your Money : " + yourMoney + newLine
//                 + "Total Money : " + totalMoney + newLine
//                 + "Missing Money : " + (totalMoney - yourMoney))
//         }
//     }
// } else {
//     alert("Please chosse valid electronic Type :")
// }