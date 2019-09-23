// one should "depend upon abstractions, [not] concretions."

// Good 👍
export interface Vehicle {
  move(): void
}

export interface Engine {
  accelerate(): void
}

export class GasolineEngine implements Engine {
  accelerate() {}
}

export class ElectricEngine implements Engine {
  accelerate() {}
}

export class Car implements Vehicle {
  constructor(private readonly engine: Engine) {}

  move() {
    return this.engine.accelerate()
  }
}

export class CarFactory {
  static build(type: 'electric' | 'gasoline'): Car {
    switch (type) {
      case 'electric':
        return new Car(new ElectricEngine())
      case 'gasoline':
        return new Car(new GasolineEngine())
      default:
        throw new Error(`Can't convert type ${type} to car`)
    }
  }
}
