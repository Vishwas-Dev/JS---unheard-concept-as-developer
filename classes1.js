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
