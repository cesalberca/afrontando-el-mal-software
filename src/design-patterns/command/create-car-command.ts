import { Command } from './command'
import { CarFactory, Vehicle } from '../../solid/dependency-inversion'

export class CreateCarCommand implements Command<Vehicle> {
  async execute(): Promise<Vehicle> {
    return CarFactory.build('electric')
  }
}
