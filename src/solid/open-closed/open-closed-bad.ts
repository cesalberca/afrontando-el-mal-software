// "software entities … should be open for extension, but closed for modification."

// Bad 👎
export class Truck {
  velocity: number

  constructor() {
    this.velocity = 1
  }
}

export class Plane {
  speed: number

  constructor() {
    this.speed = 2
  }
}

export class MovementCalculator {
  calculate(vehicles: (Plane | Truck)[]) {
    return vehicles.reduce((previousValue, currentValue) => {
      if (currentValue instanceof Truck) {
        return previousValue + currentValue.velocity
      } else if (currentValue instanceof Plane) {
        return previousValue + currentValue.speed
      }
    }, 0)
  }
}
