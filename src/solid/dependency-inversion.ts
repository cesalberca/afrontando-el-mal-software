// one should "depend upon abstractions, [not] concretions."
export interface Car {
  run: () => string
}

export interface Engine {
  accelerate: () => string
}

export class GasolineEngine implements Engine {
  public accelerate() {
    return 'Gasoline engine'
  }
}

export class ElectricEngine implements Engine {
  public accelerate() {
    return 'Electric engine'
  }
}

export class GasolineCar implements Car {
  public constructor(private readonly engine: Engine) {}

  public run() {
    return this.engine.accelerate()
  }
}

export class ElectricCar implements Car {
  public constructor(private readonly engine: Engine) {}

  public run() {
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
