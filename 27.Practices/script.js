

// let addTextt = document.querySelectorAll(".form-control")[0];
// let addBtn = document.querySelector("#myBtn");
// let textList = document.querySelector(".list-group");
// let form1 = document.querySelector(".form1");
// let form2 = document.querySelector(".form2");
// let deleteAllText = document.querySelector("#myButton");
// let filterInput = document.querySelectorAll(".form-control")[1];

// let textArr = [];

// function Run() {
//     addBtn.addEventListener("click", AddText)
//     document.addEventListener("DOMContentLoaded", pageLoaded);
//     textList.addEventListener("click", removeTextFromUI);
//     deleteAllText.addEventListener("click", RemoveAllTextFromUI);
//     filterInput.addEventListener("keyup", Filter)
// }
// Run();

// function Filter(e) {
//     let inputValue  = e.target.value.toLowerCase().trim();
//     let listLi = document.querySelectorAll(".form-li")

//     if (listLi.length > 0) {

//         listLi.forEach(li => {
//             if (li.textContent.toLowerCase().trim().includes(inputValue)) {
//                 li.setAttribute("style", "display:block !important");
//                 li.setAttribute("style", "display:flex;color:red;justify-content:space-between !important");
//             }else{
//                 li.setAttribute("style", "display:none !important");
//             }
//         });
//     }else{
//         ShowAlert("warning","There is no text for filter !")
//     }
// }

// function RemoveAllTextFromUI() {
//     let textLi = document.querySelectorAll(".form-li");
//     if (textLi.length > 0) {
//         textLi.forEach(li => {
//             li.remove();
//         });
//         textArr = [];
//         localStorage.setItem("arr", JSON.stringify(textArr));
//         ShowAlert("success", "All text deleted !")
//     } else {
//         ShowAlert("warning", "There is no text !");
//     }
// }

// function removeTextFromUI(e) {
//     if (e.target.className === "fa-solid fa-xmark") {
//         let li = e.target.parentElement;
//         li.remove();

//         removeTextFromLocal(li.textContent);
//         filterInput.value = "";

//         ShowAlert("success", "Remove text from UI!");
//     }
// }

// function removeTextFromLocal(removeText) {

//     CheckLocalStorage();
//     textArr.forEach((text,index) => {
//         if (removeText === text) {
//             textArr.splice(index,1);
//         }
//     });
//     localStorage.setItem("arr", JSON.stringify(textArr));

// }

// function pageLoaded() {
//     CheckLocalStorage();
//     textArr.forEach(text => {
//         AdTextUI(text);
//     });
// }

// function AddText(e) {

//     let text = addTextt.value.trim();
//     if (text == null || text == "") {
//         ShowAlert("warning", "Please enter a text !")
//     } else {
//         AdTextUI(text);
//         addTextt.value = "";
//         addDataToLocalStorage(text);
//         ShowAlert("success", "Text added !");
//     }

//     e.preventDefault();
// }

// function AdTextUI(newText) {

//     let li = document.createElement("li");
//     li.className = "form-control form-li";
//     li.style.listStyle = "none";
//     li.style.display = "flex"
//     li.style.justifyContent = "space-between";
//     li.style.fontWeight = "bold";
//     li.style.marginBottom = "5px";
//     li.textContent = newText;

//     let i = document.createElement("i");
//     i.className = "fa-solid fa-xmark";
//     i.style.display = "flex";
//     i.style.alignItems = "center";
//     i.style.color = "blue";
//     i.style.cursor = "pointer";

//     li.appendChild(i);
//     textList.appendChild(li);


// }

// function addDataToLocalStorage(newText) {
//     CheckLocalStorage();
//     textArr.push(newText);
//     localStorage.setItem("arr", JSON.stringify(textArr));
// }

// function CheckLocalStorage() {
//     if (localStorage.getItem("arr") === null) {
//         textArr = [];
//     } else {
//         textArr = JSON.parse(localStorage.getItem("arr"));
//     }
// }

// function ShowAlert(type, message) {
//     var div = document.createElement("div");
//     div.className = `alert alert-${type}`
//     div.textContent = message;
//     form1.appendChild(div);

//     setTimeout(() => {
//         div.remove();
//     }, 2000)
// }
























































