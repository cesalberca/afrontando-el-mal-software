import { Command } from "./command";
import {
  GasolineCar,
  GasolineEngine,
  Engine,
  Car
} from "./../../solid/dependency-inversion";

export class CreateCarCommand implements Command<Car> {
  async execute(): Promise<Car> {
    const gasolineEngine: Engine = new GasolineEngine();
    const gasolineCar: Car = new GasolineCar(gasolineEngine);
    return gasolineCar;
  }
}
