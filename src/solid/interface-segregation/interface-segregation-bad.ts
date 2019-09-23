// "many client-specific interfaces are better than one general-purpose interface."

// Bad 👎
interface Car {
  refuel(): void
  charge(): void
}

export class HybridCar implements Car {
  charge() {}

  refuel() {}
}

export class ElectricCar implements Car {
  charge() {}

  refuel() {
    throw new Error('Electric cars cant be refueled')
  }
}
