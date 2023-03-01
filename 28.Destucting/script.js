"use strict";



//! Destructing;

//todo:  Destrukturizasiya tapşırığı ES6 ilə birlikdə gələn əla xüsusiyyətdir. 
//todo:  Destrukturizasiya massivlərdən dəyərləri və ya obyektlərdən xassələri fərqli dəyişənlərə ayırmağa imkan verən JavaScript ifadəsidir.
//todo:  Yəni biz massivlərdən və obyektlərdən verilənləri çıxarıb onları dəyişənlərə təyin edə bilərik.


//? Obyektlərdən;

// let Student = {
//     name: "Seid",
//     surname: "Nuraliyev",
//     age: "33",
//     academy:"Code Academy"
// }


//todo: Kohne yazilis;

// let Name = Student.name;
// let Surname = Student.surname;
// let age = Student.age;
// let academy = Student.academy;

// console.log(Name, Surname, age,academy);  


// let newLine = "\r\n";
// console.log(
//     "Name = " + Student.name + "," + newLine,
//     "Surname = " + Student.surname + "," + newLine,
//     "Age = " + Student.age + ","+ newLine,
//     "Academy = " + Student.academy + ","
// );


//todo; Yeni Yazilis; ES6-ile;

// let Student = {
//     name: "Seid",
//     surname: "Nuraliyev",
//     age: "33",
//     academy:"Code Academy"
// }

// let {name,surname,age,academy:course}  = Student;

// console.log(name,surname,age,course);

//todo: Object icinde yazilmis native objectden datalarin alinmasi;

// let Student = {
//     name: "Seid",
//     surname: "Nuraliyev",
//     age: "33",
//     academy:"Code Academy",
//     subject: {
//         back: "C",
//         front: "JS",
//         SQL : "Mssql"
//     },
// };

// let {name,
//     surname,
//     age,
//     academy,
//     subject:{back,front,SQL},
// } = Student;

// console.log(back,front,SQL);
// console.log(subject);  //!: error

//todo: Qeyd edək ki, sol tərəfdəki obyektdəki dəyişənlər "person" obyektdəki xassə açarı ilə eyni ada malik olmalıdır .
//todo: Adlar fərqlidirsə, alacağıq undefined:

// let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

// let {name, friends, job} = person;

// console.log(name);//"Sarah"
// console.log(friends);//undefined

//todo; Əgər obyektin propertilerinin adından istifadə etmək əvəzinə yeni yeni properti istifade etmək istəyiriksə, bunu edə bilərik:

// let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

// let {name, country:region, job} = person;

// console.log(region);


//todo; Həmçinin dəyişənin məlumat çıxarmaq istədiyi obyektdə olduğu halda "Destructingde" defolt dəyərlərden istifadə edilə bilərik :

// let person  = {name:"Sarah",country:"Nigeria", job:"Developer"};

// let {name,friend = "Seid"} = person;
// console.log(friend);


//todo: "..." Rest sintaksisi ile biz secmediyimiz propertileri de objectden goture bilerik

// let person = {name:"Seid",surname:"Nuraliyev",age:"44",city:"Baku",job:"Developer"};

// let {name,city:region,...others} = person;
// console.log(name,region,others);
// console.log(others);

//todo: Destructing funksiyalara parametrlər təyin etmək üçün istifadə edilə bilər:

// let human = {name:"Seid",surname:"Nuraliyev"};

// function person({name,surname} = human) {
//     console.log(name+ " " + surname);
// }


// person();


// function person({name: x, job: y} = {}) {
//     console.log(x);
// }

// person({name: "Michelle"});//"Michelle"
// person();//undefined
// person(friend);//Error : friend is not defined;


//? Arraylerde;

//todo: Kohne yazilis;
// let person = ["Seid","Nuraliyev","33","Bilesuvar"];

// let name = person[0];
// let city = person[3];

// console.log(name,city);


//todo: Destructing ile yazilis;
// let person = ["Seid","Nuraliyev","33","Bilesuvar"];

// let [name,surname,age,city] = person;

// console.log(name,city);

//todo: Dəyişənlər bu şəkildə təyin edilməzdən əvvəl elan edilə bilər:
// let person = ["Seid","Nuraliyev","33","Bilesuvar"];

// let Name,Surname;

// [Name,Surname] = person;
// console.log(Name,Surname);

//todo: Massivimizdə itenilen elementi "," isarelerinden istifade ederek sece bilerik;
//todo: Her bir vergul isaresi onun durdugu yere uygun elementi atlayir;
//todo: Name ve city secmek istesek; Vergullere diqqet!

// let person = ["Seid","Nuraliyev","33","Bilesuvar"];
// let Name,City;
// [Name,,,City] = person;
// console.log(Name,City);

//todo: Masivvdeki bütün elementləri keçmək istəyiriksə, sadəcə bunu edirik:
// let person = ["Seid","Nnunraliyev","33","Bilesuvar"];
// let[,,,,] = person;

//todo: "..." rest sintaksisi ile biz Massivin qalan hissəsinini goture bilerik;
//todo: "..." rest sintaksisi "destructing" modeldə sonuncu olmalıdır.
// let product = ["Ayaqqabi","Sport","43","22"];

// let[Name,...others] = product;

// console.log(Name);
// console.log(others);

//todo: Biz həmçinin funksiyadan qaytarılmış Arreyden məlumatları çıxara bilərik.
// let product = ["Ayaqqabi","Sport","43","20"];

// let getArray = (x)=>{
//     return x;
// } 
// let [Name,Category,Size,Count] = getArray(product);
// console.log(Name);

// function SumAndMultiply(a,b){
//      return [a+b, a*b];
// }
// let [Sum,Multiply] = SumAndMultiply(2,3);
// console.log(Sum,Multiply);

//todo: Arreyden çıxarılan dəyər qeyri-müəyyən olduğu halda, defolt dəyərlər dəyişənlərə təyin edilə bilər;

// let product = ["Ayaqqabi","Sport","43","20"];

// let [Name,Category,Size,Count,Price = "50Azn"] = product;
// console.log(Price);


//todo: Objectlerin birlesdirilmesi; eyni propertileri override edir;
// let personOne = {
//     name: "Seid",
//     surname: "Nuraliyev",
//     address: {
//         counrty:"Azerbaijan",
//         city:"Baku"
//     }
// };

// let personTwo = {
//     name: "Orxan",
//     age: "32",
//     hobbi:{
//         game: "Football",
//         art: "Gitar"
//     }
// }

// let personThree = {...personOne, ...personTwo};

// console.log(personThree);