// one should "depend upon abstractions, [not] concretions."
export interface Car {
  run: () => string
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

export class GasolineCar implements Car {
  constructor(private readonly engine: Engine) {}

  run() {
    return this.engine.accelerate()
  }
}

export class ElectricCar implements Car {
  constructor(private readonly engine: Engine) {}

  run() {
    return this.engine.accelerate()
  }
}

export function race() {
  const gasolineEngine: Engine = new GasolineEngine()
  const electricEngine: Engine = new ElectricEngine()

  const gasolineCar: Car = new GasolineCar(gasolineEngine)
  const electricCar: Car = new ElectricCar(electricEngine)

  const cars = [gasolineCar, electricCar]

  return cars.map(car => car.run())
}
