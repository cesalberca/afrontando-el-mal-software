// one should "depend upon abstractions, [not] concretions."

// Bad 👎
interface Vehicle {
  move(): void
}

interface Engine {
  accelerate(): void
}

export class GasolineEngine implements Engine {
  accelerate() {}
}

export class ElectricEngine implements Engine {
  accelerate() {}
}

export class GasolineCar implements Vehicle {
  private readonly engine: Engine = new GasolineEngine()

  move() {
    return this.engine.accelerate()
  }
}

export class ElectricCar implements Vehicle {
  private readonly engine: Engine = new ElectricEngine()

  move() {
    return this.engine.accelerate()
  }
}
