// https://en.wikipedia.org/wiki/Memento_pattern

namespace MementoPattern {
  class State {
    private str: string;

    constructor(str: string) {
      this.str = str;
    }

    get Str(): string {
      return this.str;
    }

    set Str(str: string) {
      this.str = str;
    }
  }

  class Memento {
    private state: State;

    constructor(state: State) {
      this.state = state;
    }

    get State(): State {
      console.log("get memento's state");
      return this.state;
    }
  }

  class Originator {
    private state: State;

    constructor(state: State) {
      this.state = state;
    }

    get State(): State {
      return this.state;
    }

    set State(state: State) {
      console.log("State :: ", state.Str);
      this.state = state;
    }

    public createMemento(): Memento {
      console.log("creates a memento with a given state!");
      return new Memento(this.state);
    }

    public setMemento(memento: Memento) {
      console.log("sets the state back");
      this.State = memento.State;
    }
  }

  class CareTaker {
    private memento: Memento;

    get Memento(): Memento {
      return this.memento;
    }

    set Memento(memento: Memento) {
      this.memento = memento;
    }
  }

  // Client code
  var state = new State("... State "),
    originator = new Originator(state),
    careTaker = new CareTaker();

  careTaker.Memento = originator.createMemento();
  originator.State = new State("something else...");

  originator.setMemento(careTaker.Memento);

  // Output
  /*
    creates a memento with a given state!
    State ::  something else...
    sets the state back
    get memento's state
    State ::  ... State 
  */
}
