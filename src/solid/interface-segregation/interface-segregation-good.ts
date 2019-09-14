// "many client-specific interfaces are better than one general-purpose interface."

// Good 👍
interface Refiller {
  refuel: () => void
}

interface Charger {
  charge: () => void
}

export class HybridCar implements Refiller, Charger {
  charge() {}

  refuel() {}
}

export class ElectricCar implements Refiller {
  refuel() {}
}
