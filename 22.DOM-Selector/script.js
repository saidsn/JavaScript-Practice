
//! DOM Selector

//? getElementById, getElementByClassName, getElementBytagName;

//todo: getElementById; Id-ye gore elementi goturur
// let button = document.getElementById("my-button");
// console.log(button);

//todo: getElementByClassname; Class-a gore elementi goturur
// let buttons  = Array.from(document.getElementsByClassName("my-btn"));
// console.log(buttons);
// buttons.forEach(button => {
//     console.log(button.textContent);
// });

//todo: getElementByTagName; Tagin adina gore elementi goturur;
// let tagName = document.getElementsByTagName("button");
// console.log(tagName);

//todo: getAttribute; Atribute gore elementin elementin atributunun deyerini qaytarir;
// let buttonId = button.getAttribute("id");
// console.log(buttonId);
// let buttonClass = button.getAttribute("class");
// console.log(buttonClass);
// let buttonType = button.getAttribute("type");
// console.log(buttonType);

//todo: classList - goturulen elementin classlarini list seklinde qaytarir;
// let buttonClassList = button.classList;
// console.log(classList);

// classList.forEach(clas => {
//     console.log(clas);
// });

//todo: textContent ve innerHTML - goturulen elementin icindeki texti qaytarir;
// let button1 = document.getElementById("my-button");
// let button2 = document.getElementById("my-button1");
// let text1 = button1.textContent;
// let text2 = button2.innerHTML;
// console.log(text1);
// console.log(text2);

//todo: textContent ve innerHTML arasinda ferq odurki,
//todo: textContent - texti bir tag kimi yazsaq, texti string kimi oxuyur ve string qaytarir;
//todo: innerHTML - texti bir tag kimi yazsaq, texti bir html tagi kimi oxuyur ve normal text qaytarir;
// let button1 = document.getElementById("my-button");
// let button2 = document.getElementById("my-button1");
// button1.textContent ="<p>Hello</p>";
// button2.innerHTML = "<p>GoodBy</p>";




//? querySelector, querySelectorAll;

//todo: querySelector - Her bir elementi Id-sine,Classina ve Tagine gore goturmek olur;

//todo: Id -ye gore;
// let button = document.querySelector("#my-button");
// console.log(button);

//todo: Class-a gore;
// let button = document.querySelectorAll(".my-btn");
// console.log(button);
//todo: Tagine gore;
// let tagName  = document.querySelector("input");
// console.log(tagName);














// let name1 = document.querySelector(".my-btn")
// console.log(name1);
// let name2 = button.getElementsByClassName("my-btn")
// console.log(name2);