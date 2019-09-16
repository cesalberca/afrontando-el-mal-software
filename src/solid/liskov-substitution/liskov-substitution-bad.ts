// "objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program." See also design by contract.

// Bad 👎
export interface Car {
  move(): string
}

export class GasolineCar implements Car {
  move() {
    return 'Gasoline car'
  }
}

export class ElectricCar implements Car {
  move() {
    return 'Electric car'
  }
}

export function race() {
  const gasolineCar = new GasolineCar()
  const electricCar = new ElectricCar()

  const cars = [gasolineCar, electricCar]

  return cars.map(car => car.move())
}
