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
class Client {
  s1 = Singleton.getInstance();
  s2 = Singleton.getInstance();

  call() {
    if (this.s1 === this.s2) {
      console.log("Singleton works.");
    } else {
      console.log("Singleton failed.");
    }
  }
}

const client = new Client();
client.call();
