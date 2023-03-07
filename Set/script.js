"use strict";

//! Set Objecti;

//todo: Set() xüsusi tipli kolleksiyadır - "dəyərlər dəsti" ("key" olmadan) saxlanilir.



let set  = new Set();


//todo; Add() metodu ile set kolleksiyasina data elave edirik;
set.add("Seid");
set.add(true);
set.add(33);
set.add({name: "Ali", username: "Aliyev"});
// console.log(set);

//todo: Set-ile Map arasindaki ferq odur ki, Set()-de tekrar deyerler saxlamaq olmaz;
// set.add("Seid");
// set.add("Seid");
// set.add(true);
// set.add(33);
// set.add(33);
// set.add({name: "Ali", username: "Aliyev"});

// console.log(set);

//todo: "sise"-propertisi  "set" obyektinde deyerlerin sayini gosterir;
// console.log(set.size);

//todo: delete() metodu set kolleksiyasindan deyerleri silir;
// console.log(set.delete("Seid"));
// console.log(set.size);

//todo: Non-primitive type-lari silmek ucun deyere assign etmek lazimdir;

// console.log(delete({name: "Ali", username: "Aliyev"})); //true qaytarsada silmeyecek;
// console.log(set.size);

// let ok = {name: "Ali", username: "Aliyev"};
// set.delete(ok);

// console.log(set.size);

//todo; Set kolleksiyasinda deyerin olub olmadığını yoxlamaq has() metodu isledilir.(true-false qaytarir);
// console.log(set.has("Seid"));
// console.log(set.has("ok"));

// let value1 = {name: "Ali", username: "Aliyev"};
// console.log(set.has(value1))

//todo: For-of la set kolleksiyasinda deyerleri almaq olar;

// for (const value of set) {
//     console.log(value);
// }

//todo: Set() obyektini Arraye cevirmek olur;
// let array = Array.from(set);
// console.log(array);

// array.forEach(item => {
//     console.log(item);
// });

//todo: Arrayden Set() obyektini  yaratmaq olur;

// let array  = [1,"Seid",false,{name:"Seid",surname:"Nuraliyev"}];
// console.log(array);

// let mySet = new Set(array);
// console.log(mySet);


// mySet.forEach(value => {
//     console.log(value);
// });




