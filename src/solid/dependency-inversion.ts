// one should "depend upon abstractions, [not] concretions."
export interface Vehicle {
  move: () => string
}

export interface Engine {
  accelerate: () => string
}

export class GasolineEngine implements Engine {
  accelerate() {
    return 'Gasoline engine'
  }
}

export class ElectricEngine implements Engine {
  accelerate() {
    return 'Electric engine'
  }
}

export class Car implements Vehicle {
  constructor(private readonly engine: Engine) {}

  move() {
    return this.engine.accelerate()
  }
}

export class CarFactory {
  static build(type: 'electric' | 'gasoline') {
    switch (type) {
      case 'electric':
        return new Car(new ElectricEngine())
      case 'gasoline':
        return new Car(new GasolineEngine())
      default:
        return new Car(new ElectricEngine())
    }
  }
}
