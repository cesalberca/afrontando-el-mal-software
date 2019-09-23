// "many client-specific interfaces are better than one general-purpose interface."

// Good 👍
export interface Refiller {
  refuel: () => void
}

export interface Charger {
  charge: () => void
}

export class HybridCar implements Refiller, Charger {
  charge() {}

  refuel() {}
}

export class ElectricCar implements Refiller {
  refuel() {}
}
