// A class (line, test, module, system, etc) should have only a single responsibility (i.e. only changes to one part of the software's specification should be able to affect the specification of itself).
export class Car {
  public run() {}

  public stop() {}

  public tiresNeedToBeChanged() {}

  public shouldRefuel() {}
}

export class Tire {
  public needsChange() {
    return false
  }
}

export class FuelTank {
  public isEmpty() {
    return false
  }
}

export class Engine {
  public accelerate() {}
}

export class Brakes {
  public brake() {}
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

  public run() {
    this.engine.accelerate()
  }

  public stop() {
    this.brakes.brake()
  }

  public tiresNeedToBeChanged() {
    return this.tires.every(tire => !tire.needsChange())
  }

  public shouldRefuel() {
    if (this.fuelTank.isEmpty()) {
      return 'refuel'
    }
  }
}
