// A class (line, test, module, system, etc) should have only a single responsibility (i.e. only changes to one part of the software's specification should be able to affect the specification of itself).
export class Car {
  run() {}

  stop() {}

  tiresNeedToBeChanged() {}

  shouldRefuel() {}
}

export class Tire {
  needsChange() {
    return false
  }
}

export class FuelTank {
  isEmpty() {
    return false
  }
}

export class Engine {
  accelerate() {}
}

export class Brakes {
  brake() {}
}

export class SolidCar {
  private readonly brakes = new Brakes()
  private readonly engine = new Engine()
  private readonly tires: Tire[] = [
    new Tire(),
    new Tire(),
    new Tire(),
    new Tire()
  ]
  private readonly fuelTank = new FuelTank()

  run() {
    this.engine.accelerate()
  }

  stop() {
    this.brakes.brake()
  }

  tiresNeedToBeChanged() {
    return this.tires.every(tire => !tire.needsChange())
  }

  shouldRefuel() {
    if (this.fuelTank.isEmpty()) {
      return 'refuel'
    }
  }
}
