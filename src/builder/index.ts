// https://en.wikipedia.org/wiki/Factory_method_pattern

/*-------------Classic-------------*/

class Product {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
  }
}

interface Builder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;

  createNewProduct(): void;
  get product(): Product;
}

class ConcreteBuilder implements Builder {
  private _product: Product;
  public get product(): Product {
    return this._product;
  }

  constructor() {
    this.newProduct();
  }

  createNewProduct(): void {
    this.newProduct();
  }

  public producePartA(): void {
    this._product.parts.push("PartA");
  }

  public producePartB(): void {
    this._product.parts.push("PartB");
  }

  public producePartC(): void {
    this._product.parts.push("PartC");
  }

  private newProduct() {
    this._product = new Product();
  }
}

class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.createNewProduct();
    this.builder.producePartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.createNewProduct();
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}

// Client code

const director = new Director();
const builder = new ConcreteBuilder();
director.setBuilder(builder);

console.log("Standard basic product:");
director.buildMinimalViableProduct();
builder.product.listParts();

console.log("Standard full featured product:");
director.buildFullFeaturedProduct();
builder.product.listParts();

// Output

/*
Standard basic product:
Product parts: PartA

Standard full featured product:
Product parts: PartA, PartB, PartC
*/

/*-------------New way-------------*/

class User {
  private name: string;
  private age: number;
  private phone: string;
  private address: string;

  constructor(builder: UserBuilder) {
    this.name = builder.Name;
    this.age = builder.Age;
    this.phone = builder.Phone;
    this.address = builder.Address;
  }

  get Name() {
    return this.name;
  }
  get Age() {
    return this.age;
  }
  get Phone() {
    return this.phone;
  }
  get Address() {
    return this.address;
  }
}

class UserBuilder {
  private name: string;
  private age: number;
  private phone: string;
  private address: string;

  constructor(name: string) {
    this.name = name;
  }

  get Name() {
    return this.name;
  }
  setAge(value: number): UserBuilder {
    this.age = value;
    return this;
  }
  get Age() {
    return this.age;
  }
  setPhone(value: string): UserBuilder {
    this.phone = value;
    return this;
  }
  get Phone() {
    return this.phone;
  }
  setAddress(value: string): UserBuilder {
    this.address = value;
    return this;
  }
  get Address() {
    return this.address;
  }

  build(): User {
    return new User(this);
  }
}

// Client code

const u = new UserBuilder("catchzeng")
  .setAge(30)
  .setPhone("0123456789")
  .setAddress("asdf")
  .build();
console.log(u.Name + " " + u.Age + " " + u.Phone + " " + u.Address);

// Output

/*
catchzeng 30 0123456789 asdf
*/
