"use strict";

//! Storage 

//? 1.Local Storage
//? 2.Session Storage

//todo Not: sessionStorage ile localStorage arasinda ferq yalniz datalarin saxlanma muddetine goredir;
//todo sessionStoragede datalar proqramdan cixdiqda silinir;
//todo localStoragede datalar proqramdan cixdiqda silinmir;


//!  Session Storage 

// console.log(window); // Session ve Local Storage Window objectnin icinde olur.


//todo: Session Storage-e data elave edir;
// window.sessionStorage.setItem("Name","Seid")
// window.sessionStorage.setItem("Surname", "Nuraliyev");
// window.sessionStorage.setItem("Age", "33");

//todo: Session Storageden data goturur; Parametr olaraq "key qebul edir"; Butun datalar string seklinde saxlanilir;
//todo: Eger data olmadiqda "Null" qaytarir;
// let age = window.sessionStorage.getItem("Age");
// console.log(age);
// console.log(typeof age);
// if (age === null) {
//     console.log("data bulunmadi :")
// }else{
//     console.log("data bulundu :",age)
// }

//todo: Session Storageden data silir :Parametr olaraq "key" qebul edir;
// sessionStorage.removeItem("Surname");

//todo: Session Storageden butun datalari silir;
// sessionStorage.clear();

// let Names = ["Seid","Orxan","Emil","Sadiq"];

//todo: Arrayi Storagede string kimi saxlamamasi ucun "JSON" obyektinin "stringfy" metodundan istifade olunur; 
// sessionStorage.setItem("Names",JSON.stringify(Names));

//todo: Arrayi Storageden goturdukde string kimi gelmemesi ucun "JSON" obyektinin "parse" metodundan istifade olunur; 
// let values = JSON.parse( sessionStorage.getItem("Names"));

// values.forEach(item => {
//     if (item.length > 4) {
//         console.log(item)
//     }
// });

//! Locaal Storage

//todo: Local Storage-e data elave edir;
// localStorage.setItem("Seid","33");
// localStorage.setItem("Sadiq","23")
// localStorage.setItem("Oraxan","26");


//todo: Local Storageden data goturur; Parametr olaraq "key qebul edir"; Butun datalar string seklinde saxlanilir;
//todo: Eger data olmadiqda "Null" qaytarir;
// let value = localStorage.getItem("Sadiq");
// console.log(value);
// console.log(typeof  value);

//todo: Local Storageden data silir :Parametr olaraq "key" qebul edir;
// localStorage.removeItem("Seid");

//todo: Local Storageden butun datalari silir;
// localStorage.clear();

// let Nums = [1, 2, 3, 4, 5];

//todo: Arrayi Storagede string kimi saxlamamasi ucun "JSON" obyektinin "stringfy" metodundan istifade olunur; 
// localStorage.setItem("Numbers",JSON.stringify(Nums));

//todo: Arrayi Storageden goturdukde string kimi gelmemesi ucun "JSON" obyektinin "parse" metodundan istifade olunur; 
// let values =JSON.parse(localStorage.getItem("Numbers"));
// values.forEach(item => {
//     if (item > 3) {
//         console.log(item);
//     }
// });
    
