"use strict";


//todo:  Eyer "..." Funksiyanin sonunda yer alirsa bu "Rest" parametridir ve geriye qalanlari bir arrye yigir.
//todo:  Eyer ... Funksiya cagrilanda ve ya benzer bir sekilde isledilirse buna "Spread" operatoru deyilir ve arreyi liste çevirir.
//todo: "Rest" parameetri isteye göre arqument girmek ucun istifade olunur.
//todo: "Spread" Operatoru arreyi normalda arqument listi qebul eden funksiyaya parametr olaraq istifade olunur.


//! Spread Operator;

//todo: "..." spread sintaksisi hərfi mənada “qalan parametrləri massivdə toplamaq” deməkdir.


//todo: "..." spread sintaksisi ile Arreyi parametir olaraq gondere bilerik;
// let Num = [1, 2, 3, 4];

// let Sum = (a, b,c,d) => {
//    let sum = a + b + c + d;
//    console.log(sum);
// }
// Sum(...Num);

//todo: "..." spread sintaksisi ile iki arrayi birlesdire bilerik;

// let backEndLang = ["C#","Python","Java"];
// let frontEndLang = ["JavaScript","React","Angular"];

// let fullStaklang = ["C#","Python","Java",...frontEndLang];
// let fullStaklang = [...backEndLang ,...frontEndLang];
// console.log(fullStaklang);

//todo: "..." spread sintaksisi ile bir arrayin deyerini diger arraye cevirmek olar;
// let Numbers = [1, 2, 3, 4, 10,];
// let Num = [];

// Num = [...Numbers];
// console.log(Num);


//! Rest parametri;

// let Num = (a, b, ...others) => {
//     let sum = a + b;
//     console.log(sum);
//     console.log(others);
// }

// Num(1, 2, 3, 4, 5);






