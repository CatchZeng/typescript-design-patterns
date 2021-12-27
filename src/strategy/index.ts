// https://en.wikipedia.org/wiki/Strategy_pattern

namespace StrategyPattern {
  interface Strategy {
    execute(): void;
  }

  class ConcreteStrategy1 implements Strategy {
    public execute(): void {
      console.log("`execute` method of ConcreteStrategy1 is being called");
    }
  }

  class ConcreteStrategy2 implements Strategy {
    public execute(): void {
      console.log("`execute` method of ConcreteStrategy2 is being called");
    }
  }

  class ConcreteStrategy3 implements Strategy {
    public execute(): void {
      console.log("`execute` method of ConcreteStrategy3 is being called");
    }
  }

  class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
      this.strategy = strategy;
    }

    public execute(): void {
      this.strategy.execute();
    }
  }

  // Client code

  var context = new Context(new ConcreteStrategy1());
  context.execute();

  context = new Context(new ConcreteStrategy2());
  context.execute();

  context = new Context(new ConcreteStrategy3());
  context.execute();

  // Output
  /*
    `execute` method of ConcreteStrategy1 is being called
    src/strategy/index.ts:10
    `execute` method of ConcreteStrategy2 is being called
    src/strategy/index.ts:16
    `execute` method of ConcreteStrategy3 is being called
    src/strategy/index.ts:22
  */
}
