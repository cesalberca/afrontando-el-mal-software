import { CreateCarCommand } from '../create-car-command'
import {
  Car,
  Engine,
  GasolineCar,
  GasolineEngine
} from '../../../solid/dependency-inversion'

describe('CreateCarCommand', () => {
  it('should create a car', async () => {
    expect.assertions(1)
    const command = new CreateCarCommand()
    const gasolineEngine: Engine = new GasolineEngine()
    const expected: Car = new GasolineCar(gasolineEngine)

    const actual = await command.execute()
    console.log(actual)

    expect(actual).toEqual(expected)
  })
})
