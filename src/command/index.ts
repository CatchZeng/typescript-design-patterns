// https://en.wikipedia.org/wiki/Command_pattern

namespace CommandPattern {
  class Command {
    public execute(): void {
      throw new Error("Abstract method!");
    }
  }

  class Receiver {
    public action(): void {
      console.log("action is being called!");
    }
  }

  class ConcreteCommand1 extends Command {
    private receiver: Receiver;

    constructor(receiver: Receiver) {
      super();
      this.receiver = receiver;
    }

    public execute(): void {
      console.log("`execute` method of ConcreteCommand1 is being called!");
      this.receiver.action();
    }
  }

  class ConcreteCommand2 extends Command {
    private receiver: Receiver;

    constructor(receiver: Receiver) {
      super();
      this.receiver = receiver;
    }

    public execute(): void {
      console.log("`execute` method of ConcreteCommand2 is being called!");
      this.receiver.action();
    }
  }

  class Invoker {
    private commands: Command[];

    constructor() {
      this.commands = [];
    }

    public storeAndExecute(cmd: Command) {
      this.commands.push(cmd);
      cmd.execute();
    }

    public get commandLength() {
      return this.commands.length;
    }
  }

  // Client code
  var receiver = new Receiver(),
    command1 = new ConcreteCommand1(receiver),
    command2 = new ConcreteCommand2(receiver),
    invoker = new Invoker();

  invoker.storeAndExecute(command1);
  invoker.storeAndExecute(command2);
  console.log(invoker.commandLength);

  // Output
  /*
  `execute` method of ConcreteCommand1 is being called!
  action is being called!
  `execute` method of ConcreteCommand2 is being called!
  action is being called!
  2
  */
}
