// Derived types must be completely substitutable for their base types.

// Good 👍
export class Car {}

interface Movable {
  move(): void
}

class WorkingCar extends Car implements Movable {
  move() {}
}

export class BrokenCar extends Car {}

export class ElectricCar extends WorkingCar {}

export function race() {
  const electricCar: Movable = new ElectricCar()

  const cars: Movable[] = [electricCar]

  return cars.map(car => car.move())
}
