import { CreateCarCommand } from '../create-car-command'
import {
  CarFactory,
  Vehicle
} from '../../../solid/dependency-inversion/dependency-inversion-good'

describe('CreateCarCommand', () => {
  it('should create a car', async () => {
    const command = new CreateCarCommand()
    const expected: Vehicle = CarFactory.build('electric')

    const actual = await command.execute()

    expect(actual).toEqual(expected)
  })
})
