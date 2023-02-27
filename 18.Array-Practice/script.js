
//! Product search

let product1 = {
    name: "Alma",
    category: "Fruit",
    price: 12.50,
    weight: 50
}

let product2 = {
    name: "Armud",
    category: "Fruit",
    price: 15.00,
    weight: 30
}

let product3 = {
    name: "Nar",
    category: "Fruit",
    price: 25.00,
    weight: 18
}

let product4 = {
    name: "Sogan",
    category: "Vegetable",
    price: 1.5,
    weight: 4
}

let product5 = {
    name: "Kartof",
    category: "Vegetable",
    price: 3.50,
    weight: 46
}

let products = [product1, product2, product3, product4, product5];
let newline = "\n\r";
let productName = prompt("Please enter a product name :");
let chossenProducts = [];

debugger
chossenProductsPush(products)
chossenProductsWrite(chossenProducts)


function chossenProductsPush(products) {
    debugger
    products.forEach(product => {
        if (product.name.toUpperCase().includes(productName.toUpperCase(), 0)) {
            chossenProducts.push(product);
        }
   });
  
}

function chossenProductsWrite(chossenProducts) {
    debugger
    chossenProducts.forEach(product => {
        console.log("---------------------------");
        console.log("Product name - " + product.name + newline
            + "Product Category - " + product.category + newline
            + "Product Price - " + product.price + newline
            + "Product weight - " + product.weight);
        console.log("---------------------------");
    });
}