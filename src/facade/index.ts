// https://en.wikipedia.org/wiki/Facade_pattern

namespace FacadePattern {
  class CPU {
    public freeze() {
      console.log("CPU freeze");
    }

    public jump(position: number) {
      console.log("CPU jump to " + position);
    }

    public execute() {
      console.log("CPU execute");
    }
  }

  class HardDrive {
    public read(size: number): BinaryData {
      return new ArrayBuffer(size);
    }
  }

  class Memory {
    public load(position: number, data: BinaryData): void {
      console.log("Memory load");
    }
  }

  const BOOT_ADDRESS = 0,
    SECTOR_SIZE = 10000;

  class ComputerFacade {
    private cpu = new CPU();
    private hardDrive = new HardDrive();
    private memory = new Memory();

    public startComputer(): void {
      console.log("startComputer");
      this.cpu.freeze();
      this.memory.load(BOOT_ADDRESS, this.hardDrive.read(SECTOR_SIZE));
      this.cpu.jump(BOOT_ADDRESS);
      this.cpu.execute();
    }
  }

  // Client code
  var facade = new ComputerFacade();
  facade.startComputer();

  // Output

  /*
  startComputer
  CPU freeze
  Memory load
  CPU jump to 0
  CPU execute
  */
}
