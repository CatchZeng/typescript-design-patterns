// https://en.wikipedia.org/wiki/Iterator_pattern

namespace IteratorPattern {
  interface Iterator {
    next(): any;
    hasNext(): boolean;
  }

  interface Aggregator {
    createIterator(): Iterator;
  }

  class ConcreteIterator implements Iterator {
    private collection: any[] = [];
    private position: number = 0;

    constructor(collection: any[]) {
      this.collection = collection;
    }

    public next(): any {
      // Error handling is left out
      var result = this.collection[this.position];
      this.position += 1;
      return result;
    }

    public hasNext(): boolean {
      return this.position < this.collection.length;
    }
  }

  class Numbers implements Aggregator {
    private collection: number[] = [];

    constructor(collection: number[]) {
      this.collection = collection;
    }
    public createIterator(): Iterator {
      return new ConcreteIterator(this.collection);
    }
  }

  // Client code

  var nArray = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    numbers = new Numbers(nArray),
    it: ConcreteIterator = <ConcreteIterator>numbers.createIterator();

  while (it.hasNext()) {
    console.log(it.next());
  }

  // Output
  /*
  1
  2
  3
  4
  5
  6
  7
  8
  9
  */
}
