

//todo: Array-methods


let  cars = ["Bmv","Toyota","Renault","Mersedes","Porshe"];
// console.log(cars)


//! Push - Arrayin sonuna data elve edir ve yeni Length qaytarir;
// let data = cars.push("Opel");
// console.log(data);

//! Unshift - Arrayin evveline data elave edir ve yeni Length qaytarir;
// let data = cars.unshift("Hundai");
// console.log(data);

//! Pop - Arrayin sonundan data silir ve silinen datani qaytarir; Eger Array boshdursa "Undefined" aytarir.
// let data = cars.pop()
// console.log(data);

//! Shift - Arrayin evvelinden data silir ve silinen datani qaytarir; Eger Array boshdursa "Undefined" aytarir.
// let data = cars.shift();
// console.log(data);

//! Splice - Arrayden elementləri silir və lazım olduqda onların yerinə yeni elementlər daxil edərək silinmiş elementləri qaytarır.
//! 2 ve ya 3 parametr qebul edir.
// console.log(cars);

// let data = cars.splice(0,2,"Hundai");
// console.log(cars);

// let data1 = cars.splice(2,2,"Hunadi");
// console.log(cars);

// let data3 = cars.splice(3,0,"Hundai");
// console.log(cars);

//! ToString - Arrayin tipni stringe cevirir

// console .log(typeof cars);
// let data = cars.toString();
// console.log(typeof data);
// console.log(data);

//! Join - Arrayi mueyyen bir smvola gore bolur ve stringe cevirir;
// console.log(typeof cars);
// let data = cars.join("-");
// console.log(data);
// console.log(typeof data);

//! Concat - iki Arrayi birleshdirir
// let fruit = ["nar","Heyva","Alma","Banana"];
// let animal = ["Sir","Meymun","Tulku","Ilan"];
// let data = fruit.concat(animal);
// console.log(data);

//! Slice - Arrayi istenilen yerden kesib yeni Array yaradir.Hemcinin menfi parametrlerle de isleyir.
// console.log(cars);
// let data1  = cars.slice(2,4);
// console.log(data1)
// let data2 = cars.slice(-3,-2);
// console.log(data2);

//! Length - Arrayyin uzunlugunu qatarir
// let data = cars.length;
// console.log(cars);
// console.log(data);

//! Reverse - Arrayi tersine cevirir
// console.log(cars);
// let data = cars.reverse();
// console.log(cars);

//! Split - Stringi her hansi bir karaktere gore Arraye cevirir ve bize yeni Array qaytarir
// let names = "Seid,Sadiq,Ali,Orxan";
// console.log(typeof names);
// let data = names.split(",");
// console.log(data);
// console.log(typeof data);

//! IndexOf - Arraydaki datalarin indeksini verir
// console.log(cars);
// let data = cars.indexOf("Toyota");
// console.log(data);

//! Includes - Arrayda datanin olub olmadigini verir,mueyyen bir indexden sonrada datani yoxlayir (true ve ya false qaytrir).
// console.log(cars);
// let data1 = cars.includes("Toyota");
// console.log(data1);
// let data = cars.includes("Renault",3);
// console.log(data);

//! Map() - Arrayin hər bir elementində müəyyən edilmiş Callback funksiyasını çağırır və nəticələri ehtiva edən yeni array qaytarır.
// let map = cars.map(getWords);
// console.log(map);

// function getWords(string) {
//     return string + "ok";
// }

// let getWords = (string)=>{
//     return string.length;
// }

// let map = cars.map(getWords);
// console.log(map);

// function getWords(string) {
//     return string.length;
// }

