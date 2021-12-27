// https://en.wikipedia.org/wiki/Singleton_pattern

namespace SingletonPattern {
  class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  }

  // client code

  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();
  if (s1 === s2) {
    console.log("Singleton works.");
  } else {
    console.log("Singleton failed.");
  }

  // Output

  // Singleton works.
}
