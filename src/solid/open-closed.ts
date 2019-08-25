// "software entities … should be open for extension, but closed for modification."
interface Car {
  run: () => string
}

export class GasolineCar implements Car {
  public run() {
    return 'Gasoline car'
  }
}

export class ElectricCar implements Car {
  public run() {
    return 'Electric car'
  }
}

export function race() {
  const gasolineCar = new GasolineCar()
  const electricCar = new ElectricCar()

  const cars = [gasolineCar, electricCar]

  return cars.map(car => car.run())
}
