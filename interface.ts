interface Person {
  readonly id: number;
  name: string;
  age?: number;
}

let boo: Person = {
  id: 1,
  name: "boo",
};

// boo.id = 222;  // error, readonly is not allowed to change

interface Radio {
  switchRadio(trigger: boolean): void;
}
interface Battery {
  checkBatteryStatus(): string;
}
interface RadioWithBattery extends Radio {
  checkBatteryStatus(): string;
}
class Car implements Radio {
  switchRadio(trigger: boolean): void {
    throw new Error("Method not implemented.");
  }
}
class Cellphone implements Radio, Battery {
  checkBatteryStatus(): string {
    throw new Error("Method not implemented.");
  }
  switchRadio() {}
}

class Cellphone2 implements RadioWithBattery {
  checkBatteryStatus(): string {
    throw new Error("Method not implemented.");
  }
  switchRadio() {}
}
