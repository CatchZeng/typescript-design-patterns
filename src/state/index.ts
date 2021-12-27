// https://en.wikipedia.org/wiki/State_pattern

namespace StatePattern {
  class Context {
    private state: State;

    constructor(state: State) {
      this.state = state;
    }

    get State(): State {
      return this.state;
    }

    set State(state: State) {
      this.state = state;
    }

    public request(): void {
      this.state.handle(this);
    }
  }

  interface State {
    handle(context: Context): void;
  }

  class ConcreteStateA implements State {
    public handle(context: Context): void {
      console.log("`handle` method of ConcreteStateA is being called!");
      context.State = new ConcreteStateB();
    }
  }

  class ConcreteStateB implements State {
    public handle(context: Context): void {
      console.log("`handle` method of ConcreteStateB is being called!");
      context.State = new ConcreteStateA();
    }
  }

  // Client code

  var context = new Context(new ConcreteStateA());
  context.request();
  context.request();
  context.request();
  context.request();
  context.request();
  context.request();
  context.request();
  context.request();

  // Output

  /*
    `handle` method of ConcreteStateA is being called!
    `handle` method of ConcreteStateB is being called!
    `handle` method of ConcreteStateA is being called!
    `handle` method of ConcreteStateB is being called!
    `handle` method of ConcreteStateA is being called!
    `handle` method of ConcreteStateB is being called!
    `handle` method of ConcreteStateA is being called!
    `handle` method of ConcreteStateB is being called!
  */
}
