// https://en.wikipedia.org/wiki/Visitor_pattern

namespace VisitorPattern {
  interface Visitor {
    visitElementA(element: ElementA): void;
    visitElementB(element: ElementB): void;
  }

  class ConcreteVisitor implements Visitor {
    public visitElementA(element: ElementA): void {
      console.log("`visitElementA` of ConcreteVisitor is being called!");
    }

    public visitElementB(element: ElementB): void {
      console.log("`visitElementB` of ConcreteVisitor is being called!");
    }
  }

  interface Element {
    accept(visitor: Visitor): void;
  }

  class ElementA implements Element {
    public accept(visitor: Visitor): void {
      console.log("`accept` of ElementA is being called!");
      visitor.visitElementA(this);
    }
  }

  class ElementB implements Element {
    public accept(visitor: Visitor): void {
      console.log("`accept` of ElementB is being called!");
      visitor.visitElementB(this);
    }
  }

  // Client code
  var elements = [new ElementA(), new ElementB()];
  var visitor = new ConcreteVisitor();
  elements.forEach((e) => {
    e.accept(visitor);
  });

  // Output
  /*
    `accept` of ElementA is being called!
    `visitElementA` of ConcreteVisitor is being called!
    `accept` of ElementB is being called!
    `visitElementB` of ConcreteVisitor is being called!
  */
}
