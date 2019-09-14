import {
  Car as GoodCar,
  ElectricEngine as GoodElectricEngine,
  GasolineEngine as GoodGasolineEngine
} from '../dependency-inversion-good'
import {
  ElectricCar as BadElectricCar,
  ElectricEngine as BadElectricEngine,
  GasolineCar as BadGasolineCar,
  GasolineEngine as BadGasolineEngine
} from '../dependency-inversion-bad'
import { instance, mock, verify } from 'ts-mockito'

describe('ElectricCar', () => {
  xit('should move using the electric engine (bad)', () => {
    const { electricCar, electricEngine } = badSetup()

    electricCar.move()

    verify(electricEngine.accelerate()).once()
  })

  it('should move using the electric engine (good)', () => {
    const { electricCar, electricEngine } = goodSetup()

    electricCar.move()

    verify(electricEngine.accelerate()).once()
  })
})

describe('GasolineCar', () => {
  xit('should move (bad)', () => {
    const { gasolineCar, gasolineEngine } = badSetup()

    gasolineCar.move()

    verify(gasolineEngine.accelerate()).once()
  })

  it('should move (good)', () => {
    const { gasolineCar, gasolineEngine } = goodSetup()

    gasolineCar.move()

    verify(gasolineEngine.accelerate()).once()
  })
})

function badSetup() {
  return {
    gasolineEngine: new BadGasolineEngine(),
    electricEngine: new BadElectricEngine(),
    gasolineCar: new BadGasolineCar(),
    electricCar: new BadElectricCar()
  }
}

function goodSetup() {
  const electricEngine = mock(GoodElectricEngine)
  const gasolineEngine = mock(GoodGasolineEngine)
  return {
    gasolineEngine,
    electricEngine,
    electricCar: new GoodCar(instance(electricEngine)),
    gasolineCar: new GoodCar(instance(gasolineEngine))
  }
}
