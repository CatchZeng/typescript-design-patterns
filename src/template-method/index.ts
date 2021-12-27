// https://en.wikipedia.org/wiki/Template_method_pattern

namespace TemplateMethodPattern {
  abstract class AbstractClass {
    abstract method1(): void;

    abstract method2(): void;

    abstract method3(): void;

    public templateMethod(): void {
      console.log("templateMethod is being called");
      this.method1();
      this.method2();
      this.method3();
    }
  }

  class ConcreteClass1 extends AbstractClass {
    public method1(): void {
      console.log("method1 of ConcreteClass1");
    }

    public method2(): void {
      console.log("method2 of ConcreteClass1");
    }

    public method3(): void {
      console.log("method3 of ConcreteClass1");
    }
  }

  class ConcreteClass2 extends AbstractClass {
    public method1(): void {
      console.log("method1 of ConcreteClass2");
    }

    public method2(): void {
      console.log("method2 of ConcreteClass2");
    }

    public method3(): void {
      console.log("method3 of ConcreteClass2");
    }
  }

  // Client code
  var c1 = new ConcreteClass1(),
    c2 = new ConcreteClass2();

  c1.templateMethod();
  c2.templateMethod();

  // Output
  /*
    templateMethod is being called
    method1 of ConcreteClass1
    method2 of ConcreteClass1
    method3 of ConcreteClass1
    templateMethod is being called
    method1 of ConcreteClass2
    method2 of ConcreteClass2
    method3 of ConcreteClass2
  */
}
