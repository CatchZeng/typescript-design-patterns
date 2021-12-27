// https://en.wikipedia.org/wiki/Proxy_pattern

namespace ProxyPattern {
  // Subject
  interface ICar {
    drive(): void;
  }

  // RealSubject
  class Car implements ICar {
    public drive(): void {
      console.log("Car has been driven!");
    }
  }

  class Driver {
    private _age: number;
    public get age() {
      return this._age;
    }

    constructor(age: number) {
      this._age = age;
    }
  }

  // Proxy Object
  class ProxyCar implements ICar {
    private car: Car;
    private driver: Driver;

    constructor(driver: Driver) {
      this.car = new Car();
      this.driver = driver;
    }

    public drive(): void {
      if (this.driver.age < 16) {
        console.log("Sorry, the driver is too young to drive.");
      } else {
        this.car.drive();
      }
    }
  }

  // Client code

  var proxy1 = new ProxyCar(new Driver(15)),
    proxy2 = new ProxyCar(new Driver(25));

  proxy1.drive();
  proxy2.drive();

  // Output
  /*
    Sorry, the driver is too young to drive.
    Car has been driven!
  */
}
