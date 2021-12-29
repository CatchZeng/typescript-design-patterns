// https://en.wikipedia.org/wiki/Bridge_pattern

namespace BridgePattern {
  abstract class Abstraction {
    implementor: Implementor;
    constructor(imp: Implementor) {
      this.implementor = imp;
    }

    abstract callIt(s: String): void;
  }

  class RefinedAbstractionA extends Abstraction {
    constructor(imp: Implementor) {
      super(imp);
    }

    public callIt(s: String): void {
      console.log("This is RefinedAbstractionA");
      this.implementor.callee(s);
    }
  }

  class RefinedAbstractionB extends Abstraction {
    constructor(imp: Implementor) {
      super(imp);
    }

    public callIt(s: String): void {
      console.log("This is RefinedAbstractionB");
      this.implementor.callee(s);
    }
  }

  interface Implementor {
    callee(s: any): void;
  }

  class ConcreteImplementorA implements Implementor {
    public callee(s: any): void {
      console.log("`callee` of ConcreteImplementorA is being called.");
      console.log(s);
    }
  }

  class ConcreteImplementorB implements Implementor {
    public callee(s: any): void {
      console.log("`callee` of ConcreteImplementorB is being called.");
      console.log(s);
    }
  }

  // Client code
  var abstractionA = new RefinedAbstractionA(new ConcreteImplementorA());
  var abstractionB = new RefinedAbstractionB(new ConcreteImplementorB());

  abstractionA.callIt("abstractionA");
  abstractionB.callIt("abstractionB");

  // Output
  /*
    This is RefinedAbstractionA
    `callee` of ConcreteImplementorA is being called.
    abstractionA
    This is RefinedAbstractionB
    `callee` of ConcreteImplementorB is being called.
    abstractionB
  */
}
