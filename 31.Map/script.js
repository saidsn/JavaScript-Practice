

//! Map Objecti;

//todo: Map() açar və dəyər cütünü saxlayan və dəyərlərin əlavə olunma ardıcıllığını yadda saxlayan JavaScript obyektidir.
//todo: Normal obyektdən fərqli olaraq "key" üçün istənilən datatype istifadə edilə bilər. "String"-ilə məhdudlaşmır;

let map  = new Map();

//todo: Map obyektinə yeni dəyər əlavə etmək üçün set() metodu istifadə olunur. Birinci parametr "key" ikinci parametrdir "value".
// map.set( "name","Seid")
// map.set("surname","Nuraliyev")
// map.set("age","33")
// map.set("city","Baku")

// console.log(map)

//todo: "key"-in dəyərini almaq üçün istifadə olunur get() metodu istifade olunur.
// console.log(map.get("name"));
// console.log(map.get("surname"));

//todo; "key"-in Map obyektində olub olmadığını yoxlamaq has() metodu isledilir.(true-false qaytarir);
// console.log(map.has("age"));
// console.log(map.has("Country"));

//todo: Map obyektinin neçə "key" olduğunu öyrənmək üçün "size" propertisi isledilir.
// console.log(map.size);

//todo: delete() metodu "key"-i silmək üçün istifadə olunur."key" silindikdə "true" qaytarır.
//todo: Mövcud olmayan "key"-i silmək istedikde "false" qaytarır.
// console.log(map.delete("age"));
// console.log(map.delete("country"));

//todo: Istenilen bir obyekden Map() obyekti yaratmaq ucun Object.entries() metodundan istifade olunur.
// let car = {
//    name:"C-200",
//    model:"Mersedes",
// }

// let carMap = new Map(Object.entries(car));
// console.log(carMap);

//todo: For of ile map den datalari ala bilerik; Array qaytaracaq lakin Destructing istifade ederek datalari ala bilerik; 
// for (const item of map) {
//     let [key,value] = item;

//     console.log(key,"-",value);
// }

//todo: "key"-in deyerini almaq ucun keys() metodundan istifade olunur;

// let keys = map.keys();
// console.log(keys);

// let keyArray = Array.from(keys);
// console.log(keyArray);

// keyArray.forEach(key => {
//     console.log(key,map.get(key));
// });

//todo: "Value"-lari almaq ucun values() metodundan istifade olunur;

// let value = map.values();
// console.log(value);

// for (const val of value) {
//     console.log(val);
// }

//todo: Map-dan Arraya cevirmek;

// console.log(map);

// let array = Array.from(map);

// console.log(array);

// array.forEach(items => {
//     console.log(items);
//     let [key, value] = items;
//     console.log(key, value);
// });

//todo: Arrayden Map-e cevirmek;

// let array = [
//     ["name","Seid"],
//     ["surname","Nuraliyev"],
//     ["age",22],
//     ["city","Baku"]
// ]

// let myMap = new Map(array);
// console.log(myMap);


//todo: Map objectinin "key"-ne non-primitiv types vrmek olmaz;



map.set( "name","Seid")
map.set("surname","Nuraliyev")
map.set("age","33")
map.set("city","Baku")   // key is primitiv type;
map.set([1,2,3],"Baku")   // key is non-primitiv type;

// //todo: For excample;

// console.log(map.get("city"));  // Baku;
// console.log(map.get([1,2,3])); // undefined;

// //todo: non-primitiv typelara deyer elan edib gostermek olar;
let key = [1,2,3];

map.set(key,"Baku") 
console.log(map.get(key)); 







 
//?--Object ve Map Karşılaştırması
//todo: 1.Map nesneleri sadece ona eklenen anahtarları içerir, anahtarlarınızla çakışacak prototip’in den gelen varsayılan anahtarları bulunmaz.
//todo: 2.Objeler sadece String ve Symbol veri tiplerinde anahtarlar içerebilirken, Map nesneleri herhangi bir veri tipinde anahtar içerebilir.
//todo: 3.Map nesnelerinde anahtarlar eklenme sıralarını korurlar. Objeler için bu hep böyle değildi ve bu sıraya güvenmemek daha iyidir.
//todo: 4.Map nesnesinin sahip olduğu anahtar sayısı size özelliği ile kolaylıkla öğrenilebilir. Objeler için bunu manuel yapmak gerekir. Örneğin Object.keys(scores).length
//todo: 5.Bir Map nesnesi iterable bir değerdir. Objeler üzerinde bunu yapmak için Object.keys, Object.entries gibi metotlar kullanılır ya da objenin numaralandırılmış özellikleri for...in ile yinelenebilir.
//todo: 6.Performans konusunda anahtar değer çiflerinin eklenme sıklığına göre Map nesnesi daha performanslıdır. Bir obje bunun için bir optimizasyon içermez.