// https://en.wikipedia.org/wiki/Prototype_pattern

namespace PrototypePattern {
  interface Prototype {
    clone(): Prototype;

    toString(): string;

    get name(): string;
    set name(name: string);
  }

  class BaseConcrete implements Prototype {
    private _name: string;

    get name(): string {
      return this._name;
    }
    set name(name: string) {
      this._name = name;
    }

    clone(): Prototype {
      return Object.create(this);
    }

    toString(): string {
      return "";
    }
  }

  class Concrete1 extends BaseConcrete {
    toString(): string {
      return "This is Concrete1";
    }
  }

  class Concrete2 extends BaseConcrete {
    toString(): string {
      return "This is Concrete2";
    }
  }

  class Concrete3 extends BaseConcrete {
    toString(): string {
      return "This is Concrete3";
    }
  }

  // Client code
  class Builder {
    private prototypeMap: { [s: string]: Prototype } = {};

    constructor() {
      this.prototypeMap["c1"] = new Concrete1();
      this.prototypeMap["c2"] = new Concrete2();
      this.prototypeMap["c3"] = new Concrete3();
    }

    createOne(s: string): Prototype {
      console.log(s);
      return this.prototypeMap[s].clone();
    }
  }

  const builder = new Builder();
  for (let i = 1; i <= 3; i += 1) {
    console.log(builder.createOne("c" + i).toString());
  }

  const c1 = builder.createOne("c1");
  const c12 = builder.createOne("c1");
  c1.name = "test1";
  c12.name = "test2";

  console.log("c1 name:" + c1.name);
  console.log("c12 name:" + c12.name);

  // Output
  /*
    c1
    This is Concrete1
    c2
    This is Concrete2
    c3
    This is Concrete3
    c1
    c1
    c1 name:test1
    c12 name:test2
  */
}
