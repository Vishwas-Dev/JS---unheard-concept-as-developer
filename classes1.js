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

// setter and getter


class Product {
  name;
  price;
  description;

  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
 get price(){
    return this.price;
 }
     
 set price(p) {
   this.price=p;
  }


}
const phone = new Product( "vishal", 999, "this is New");

console.log(phone);
phone.price = 700;
console.log("this is Price : ",phone.price);
console.log(phone);

