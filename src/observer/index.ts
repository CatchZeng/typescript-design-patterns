// https://en.wikipedia.org/wiki/Observer_pattern

namespace ObserverPattern {
  class Subject {
    private observers: Observer[] = [];

    public register(observer: Observer): void {
      this.observers.push(observer);
    }

    public unregister(observer: Observer): void {
      var n: number = this.observers.indexOf(observer);
      this.observers.splice(n, 1);
    }

    public notify(): void {
      console.log("notify all the observers");
      var i: number, max: number;

      for (i = 0, max = this.observers.length; i < max; i += 1) {
        this.observers[i].notify();
      }
    }
  }

  interface Observer {
    notify(): void;
    get name(): string;
  }

  class ConcreteObserver implements Observer {
    private _name: string;
    get name(): string {
      return this._name;
    }

    constructor(name: string) {
      this._name = name;
    }

    public notify(): void {
      console.log(this._name + " notified");
    }
  }

  // Client code

  var sub = new Subject();

  var ob1 = new ConcreteObserver("1");
  var ob2 = new ConcreteObserver("2");
  var ob3 = new ConcreteObserver("3");

  sub.register(ob1);
  sub.register(ob2);
  sub.register(ob3);

  sub.notify();

  sub.unregister(ob1);

  sub.notify();

  // Output
  /*
    notify all the observers
    1 notified
    2 notified
    3 notified  
    notify all the observers
    2 notified
    3 notified
  */
}
