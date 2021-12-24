// https://en.wikipedia.org/wiki/Factory_method_pattern

interface AbstractProduct {
  method(param?: any): void;
}

class ConcreteProductA implements AbstractProduct {
  method = (param?: any) => {
    console.log("Method of ConcreteProductA");
  };
}

class ConcreteProductB implements AbstractProduct {
  method = (param?: any) => {
    console.log("Method of ConcreteProductB");
  };
}

// Static Factory Method
enum ProductType {
  A,
  B,
}

namespace StaticProductFactory {
  export function createProduct(type: ProductType): AbstractProduct {
    switch (type) {
      case ProductType.A:
        return new ConcreteProductA();
      case ProductType.B:
        return new ConcreteProductB();
      default:
        throw "Unknown product type.";
    }
  }
}

// Factory Method
interface ProductFactory {
  createProduct(): AbstractProduct;
}

class ProductAFactory implements ProductFactory {
  createProduct(): AbstractProduct {
    return new ConcreteProductA();
  }
}

class ProductBFactory implements ProductFactory {
  createProduct(): AbstractProduct {
    return new ConcreteProductB();
  }
}

// Client code

// Static Factory Method
const product = StaticProductFactory.createProduct(ProductType.A);
product.method();

// Factory Method
const factories = { A: ProductAFactory, B: ProductBFactory };
const pa = new factories.A().createProduct();
const pb = new factories.B().createProduct();
pa.method();
pb.method();

// Output

/* 
Method of ConcreteProductA
Method of ConcreteProductA
Method of ConcreteProductB
*/
