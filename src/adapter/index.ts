// https://en.wikipedia.org/wiki/Adapter_pattern

namespace AdapterPattern {
  export class Adaptee {
    public methodB(): void {
      console.log("`methodB` of Adaptee is being called");
    }
  }

  export class Adapter {
    private adaptee = new Adaptee();

    public methodA(): void {
      console.log("`methodA` of Adapter is being called");
      this.adaptee.methodB();
    }
  }

  // Client code
  var adapter = new Adapter();
  adapter.methodA();

  // Output

  /*
    `methodA` of Adapter is being called
    `methodB` of Adaptee is being called
   */
}
