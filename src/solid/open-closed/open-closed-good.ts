// "software entities should be open for extension, but closed for modification."

// Good 👍
interface Vehicle {
  // Tell, Don't Ask Principle
  move(): number
}

class Truck implements Vehicle {
  move() {
    return 1
  }
}

class Plane implements Vehicle {
  move() {
    return 2
  }
}

export class MovementCalculator {
  calculate(vehicles: Vehicle[]) {
    return vehicles.reduce(
      (previousValue, currentValue) => previousValue + currentValue.move(),
      0
    )
  }
}
