// https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern

namespace ChainOfResponsibilityPattern {
  abstract class Handler {
    private nextHandler: Handler;

    public setNext(handler: Handler): Handler {
      this.nextHandler = handler;
      return handler;
    }

    public handleRequest(request: string): string {
      if (this.checkHandle(request)) {
        return this.handle(request);
      } else if (this.nextHandler) {
        return this.nextHandler.handleRequest(request);
      }

      return null;
    }

    protected abstract checkHandle(request: string): boolean;
    protected abstract handle(request: string): string;
  }

  class MonkeyHandler extends Handler {
    checkHandle(request: string): boolean {
      return request === "Banana";
    }

    handle(request: string): string {
      return `Monkey: I'll eat the ${request}.`;
    }
  }

  class CatHandler extends Handler {
    checkHandle(request: string): boolean {
      return request === "Fish";
    }

    handle(request: string): string {
      return `Cat: I'll eat the ${request}.`;
    }
  }

  class DogHandler extends Handler {
    checkHandle(request: string): boolean {
      return request === "Bone";
    }

    handle(request: string): string {
      return `Dog: I'll eat the ${request}.`;
    }
  }

  // Client code

  function clientCode(handler: Handler) {
    const foods = ["Bone", "Banana", "Cup of coffee"];

    for (const food of foods) {
      console.log(`Client: Who wants a ${food}?`);

      const result = handler.handleRequest(food);
      if (result) {
        console.log(`  ${result}`);
      } else {
        console.log(`  ${food} was left untouched.`);
      }
    }
  }

  const monkey = new MonkeyHandler();
  const cat = new CatHandler();
  const dog = new DogHandler();
  monkey.setNext(cat).setNext(dog);

  console.log("Chain: Monkey > Cat > Dog\n");
  clientCode(monkey);

  console.log("");

  console.log("SubChain: Cat > Dog\n");
  clientCode(cat);

  // Output
  /*
    Chain: Monkey > Cat > Dog

    Client: Who wants a Bone?
    Dog: I'll eat the Bone.
    Client: Who wants a Banana?
    Monkey: I'll eat the Banana.
    Client: Who wants a Cup of coffee?
    Cup of coffee was left untouched.

    SubChain: Cat > Dog

    Client: Who wants a Bone?
    Dog: I'll eat the Bone.
    Client: Who wants a Banana?
    Banana was left untouched.
    Client: Who wants a Cup of coffee?
  */
}
