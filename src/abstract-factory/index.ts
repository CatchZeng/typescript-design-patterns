// https://en.wikipedia.org/wiki/Software_design_pattern#Creational_patterns

namespace AbstractFactoryPattern {
  interface AbstractFactory {
    createProductA(param?: any): AbstractProductA;
    createProductB(param?: any): AbstractProductB;
  }

  class ConcreteFactory1 implements AbstractFactory {
    createProductA(param?: any): AbstractProductA {
      return new ProductA1();
    }

    createProductB(param?: any): AbstractProductB {
      return new ProductB1();
    }
  }

  class ConcreteFactory2 implements AbstractFactory {
    createProductA(param?: any): AbstractProductA {
      return new ProductA2();
    }

    createProductB(param?: any): AbstractProductB {
      return new ProductB2();
    }
  }

  interface AbstractProductA {
    methodA(): string;
  }
  interface AbstractProductB {
    methodB(): number;
  }

  class ProductA1 implements AbstractProductA {
    methodA = () => {
      return "This is methodA of ProductA1";
    };
  }

  class ProductB1 implements AbstractProductB {
    methodB = () => {
      return 1;
    };
  }

  class ProductA2 implements AbstractProductA {
    methodA = () => {
      return "This is methodA of ProductA2";
    };
  }

  class ProductB2 implements AbstractProductB {
    methodB = () => {
      return 2;
    };
  }

  // Client Code

  class Tester {
    private abstractProductA: AbstractProductA;
    private abstractProductB: AbstractProductB;

    constructor(factory: AbstractFactory) {
      this.abstractProductA = factory.createProductA();
      this.abstractProductB = factory.createProductB();
    }

    public test() {
      console.log(this.abstractProductA.methodA());
      console.log(this.abstractProductB.methodB());
    }
  }

  // Abstract factory1
  const factory1 = new ConcreteFactory1();
  const tester1 = new Tester(factory1);
  tester1.test();

  // Abstract factory2
  const factory2 = new ConcreteFactory2();
  const tester2 = new Tester(factory2);
  tester2.test();

  // Output

  /*
  This is methodA of ProductA1
  1
  This is methodA of ProductA2
  2
  */
}
