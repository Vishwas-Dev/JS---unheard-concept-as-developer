class Product {
  name;
  price;
  description;

  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

}
const phone = new Product( "vishal", 999, "this is New");

console.log(phone);

// ---------------------------------------------------------

// setter and getter

class Product {
  name;
  #price;
  description;

  constructor(name, price, description) {
    this.name = name;
    this.#price = price;
    this.description = description;
  }
 get price(){
    return this.#price;
 }
     
//  set price(p) {
//    this.#price=p;
//   }

//  in getter and setter setter → setter → setter → setter → ...
// 👉 Infinite loop → crashes / doesn’t work so use -> this.#price = p;

set price(p) {
    if (p > 0) {
        this.#price = p;
    } else {
        console.log("invalid value");
    }
  }

}
const phone = new Product( "vishal", 0, "this is New");

console.log(phone);
phone.price = -200; // condition fails p>0
console.log("this is Price : ",phone.price);
console.log(phone);


// ---------------------------------------------------------

class Product {
  
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

}
const phone = new Product( "vishal", 999, "this is New");

console.log(phone);
