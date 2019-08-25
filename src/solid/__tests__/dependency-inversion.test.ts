import { Car, Engine, GasolineCar } from '../dependency-inversion'

describe('GasolineCar', () => {
  it('should race cars', () => {
    const accelerateMock = jest.fn()
    const fakeEngine: Engine = {
      accelerate: accelerateMock
    }
    const gasolineCar: Car = new GasolineCar(fakeEngine)

    gasolineCar.run()

    expect(fakeEngine.accelerate).toHaveBeenCalled()
  })
})
