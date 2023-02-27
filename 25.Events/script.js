"use strict";

//! Events;

//todo: Js-de 3 nov Events var;
//? 1--- Mouse events
//? 1--- Klavye events
//? 1--- Input events

//! ---- Mouse events;

let Test = () =>{
   console.log("Test olundu");
}

//todo 1.DOMContentLoaded ve Load ------- Sehife yuklendiyinde calisan bir eventdir;
// document.addEventListener("DOMContentLoaded", Test)
// window.addEventListener("load", Test)

//todo:2.click ------ İstifadəçi elementə klik edir
// let clickBtn = document.querySelector(".btn-success");
// clickBtn.addEventListener("click",Test);

//todo:3.contextmenu ------ İstifadəçi elementə sag klik edir
// let clickBtn = document.querySelector(".btn-success");
// clickBtn.addEventListener("contextmenu",Test);

//todo:4.dblclick ------	İstifadəçi elementə iki dəfə klik edir
// let clickBtn = document.querySelector(".btn-success");
// clickBtn.addEventListener("dblclick",Test);

//todo:5.mousedown ------ Elementin üzərində siçan düyməsi sıxılır
// let clickBtn = document.querySelector(".btn-success");
// clickBtn.addEventListener("mousedown",Test);

//todo:6.mouseenter ------ Göstərici elementin üzərinə köçürülür
// let clickBtn = document.querySelector(".btn-success");
// clickBtn.addEventListener("mouseenter",Test);

//todo:7.mouseleave ------ Göstərici elementdən kənara köçürülür
// let clickBtn = document.querySelector(".btn-success");
// clickBtn.addEventListener("mouseleave",Test);

//todo:8.mousemove ------  Göstərici element üzərində hərəkət edir
// let clickBtn = document.querySelector(".btn-success");
// clickBtn.addEventListener("mousemove",Test);

//todo:9.mouseout	-------  Siçan göstəricisi elementdən kənara çıxır
// let clickBtn = document.querySelector(".btn-success");
// clickBtn.addEventListener("mouseout",Test);

//todo:10.mouseover ------ Siçan göstəricisi elementin üzərinə köçürülür
// let clickBtn = document.querySelector(".btn-success");
// clickBtn.addEventListener("mouseover",Test);

//todo:11.mouseup ------- Siçan düyməsi element üzərində buraxılır
// let clickBtn = document.querySelector(".btn-success");
// clickBtn.addEventListener("mouseup",Test);


//! Klavye Events

// let Test = (e)=>{
//   console.log(e.type) // eventin tipini verir
//   console.log(e.key); // kliklenene keyin adini verir
//   console.log(e.keyCode); // kliklenen keyin kodunu verir
// }

//todo: 1.keypress ----- İstifadəçi bir düyməni basır; Yalniz herf ve reqemlerle isleyen eventdir;
// document.addEventListener("keypress",Test);

//todo: 2.keydown ----- İstifadəçi bir düyməni basır; Butun keylerle isleyir;
// document.addEventListener("keydown",Test);

//todo: 3.keyup ----- İstifadəçi keyi buraxdiqda calisir;
// document.addEventListener("keyup",Test);

//! Practice

// let input = document.querySelector(".my-input");
// let label = document.querySelectorAll(".form-label")[1];
// console.log(label)

// let Test = ()=>{
//      label.textContent = input.value;
// }
// input.addEventListener("keyup", Test);


//! Input Events

 let input = document.querySelector(".my-input");

//todo 1.   focus --- Istifadeci giris sahesine daxil olduqda;
// input.addEventListener("focus", Test);

//todo 2.   blur --- Istifadeci giris sahesini terk etdikde;
// input.addEventListener("blur", Test);

//todo 3.   copy --- Istifadeci inputun textini kopyaladiqda;
// input.addEventListener("copy", Test);

//todo 4.   paste --- Istifadeci inputun textini deyisib paste etdikde;
// input.addEventListener("paste", Test);

//todo 5.   select --- Istifadeci inputun textini secdikde;
// input.addEventListener("select", Test);

//todo 6.   cut --- Istifadeci inputun textini kesdikde;
// input.addEventListener("cut", Test);

//todo 7.   change --- Istifadeci inputun textini deyisdikde;
// input.addEventListener("change", Test);

//todo 8.   submit --- Istifadeci inputun textini submit etdikde;
// input.addEventListener("submit", Test);

//todo 9.  reset  --- Istifadeci inputun textini yreset etdikde;
// input.addEventListener("reset", Test);

//todo 10.  keydown --- Istifadeci inputun textini daxil etdikde;
// input.addEventListener("keydown", Test);

//todo 11.  keypress --- Istifadeci inputun textini daxil etdikde;
// input.addEventListener("keypress", Test);

//todo 12.  keyup --- Istifadeci inputun textini daxil edib buraxdiqda;
// input.addEventListener("keyup", Test);


//! Event objecti--(e) her hansi bir objectdir;

// let checkE = (e)=>{
//     console.log(e);  //--- Event objectini verir;
//     console.log(e.type); //--- Event tipni verir(yeni click,onmouseover falan)
//     console.log(e.target);//---Event olunan html elementi qaytarir;
//     console.log(e.target.className);//---html elementin classini qaytarir;
//     console.log(e.target.textContent);//---- html elementin textini qaytarir;
// }

// let btn = document.querySelector(".btn-success");
// btn.addEventListener("click", checkE)






