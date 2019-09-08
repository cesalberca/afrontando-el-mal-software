import { Engine, GasolineCar } from '../dependency-inversion'
import { instance, mock, verify } from 'ts-mockito'

describe('GasolineCar', () => {
  it('should race cars', () => {
    const { gasolineCar, mockedEngine } = setup()

    gasolineCar.run()

    verify(mockedEngine.accelerate()).once()
  })
})

function setup() {
  const mockedEngine = mock<Engine>()
  return {
    gasolineCar: new GasolineCar(instance(mockedEngine)),
    mockedEngine
  }
}
