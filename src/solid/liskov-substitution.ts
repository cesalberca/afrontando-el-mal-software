// "objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program." See also design by contract.
export interface Car {
  run: () => string
}

export class GasolineCar implements Car {
  run() {
    return 'Gasoline car'
  }
}

export class ElectricCar implements Car {
  run() {
    return 'Electric car'
  }
}

export function race() {
  const gasolineCar: Car = new GasolineCar()
  const electricCar: Car = new ElectricCar()

  const cars = [gasolineCar, electricCar]

  return cars.map(car => car.run())
}
