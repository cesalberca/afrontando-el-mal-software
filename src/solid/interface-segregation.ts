// "many client-specific interfaces are better than one general-purpose interface."
interface Car {
  refuel: () => void;
  charge: () => void;
}

interface Refiller {
  refuel: () => void;
}

interface Charger {
  charge: () => void;
}

class HybridCar implements Refiller, Charger {
  public charge() {}

  public refuel() {}
}
