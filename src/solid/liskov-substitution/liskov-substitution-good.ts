// "objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program." See also design by contract.

// Good 👍
export interface Car {
  move(): string
}

class GasolineCar implements Car {
  move() {
    return 'Gasoline car'
  }
}

class ElectricCar implements Car {
  move() {
    return 'Electric car'
  }
}

export function race() {
  const gasolineCar: Car = new GasolineCar()
  const electricCar: Car = new ElectricCar()

  const cars = [gasolineCar, electricCar]

  return cars.map(car => car.move())
}
