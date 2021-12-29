// https://en.wikipedia.org/wiki/Mediator_pattern

namespace MediatorPattern {
  interface Mediator {
    send(msg: string, colleague: Colleague): void;
  }

  abstract class Colleague {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
      this.mediator = mediator;
    }

    abstract send(msg: string): void;
    abstract receive(msg: string): void;
  }

  class ConcreteColleagueA extends Colleague {
    public send(msg: string): void {
      this.mediator.send(msg, this);
    }

    public receive(msg: string): void {
      console.log(msg, "`receive` of ConcreteColleagueA is being called!");
    }
  }

  class ConcreteColleagueB extends Colleague {
    public send(msg: string): void {
      this.mediator.send(msg, this);
    }

    public receive(msg: string): void {
      console.log(msg, "`receive` of ConcreteColleagueB is being called!");
    }
  }

  class ConcreteMediator implements Mediator {
    public concreteColleagueA: ConcreteColleagueA;
    public concreteColleagueB: ConcreteColleagueB;

    public send(msg: string, colleague: Colleague): void {
      if (this.concreteColleagueA === colleague) {
        this.concreteColleagueB.receive(msg);
      } else {
        this.concreteColleagueA.receive(msg);
      }
    }
  }

  // Client code
  var cm = new ConcreteMediator(),
    c1 = new ConcreteColleagueA(cm),
    c2 = new ConcreteColleagueB(cm);

  cm.concreteColleagueA = c1;
  cm.concreteColleagueB = c2;

  c1.send("`send` of ConcreteColleagueA is being called!");
  c2.send("`send` of ConcreteColleagueB is being called!");

  // Output
  /*
    `send` of ConcreteColleagueA is being called! `receive` of ConcreteColleagueB is being called!
src/mediator/index.ts:35
    `send` of ConcreteColleagueB is being called! `receive` of ConcreteColleagueA is being called!
src/mediator/index.ts:25
  */
}
