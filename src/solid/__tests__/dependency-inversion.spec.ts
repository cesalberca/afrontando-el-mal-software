import {
  Car,
  CarFactory,
  ElectricEngine,
  Engine,
  GasolineEngine
} from '../dependency-inversion'
import { instance, mock, verify } from 'ts-mockito'

describe('Car', () => {
  it('should move', () => {
    const { car, engine } = setup()

    car.move()

    verify(engine.accelerate()).once()
  })
})

describe('GasolineEngine', () => {
  it('should run', () => {
    const { gasolineEngine } = setup()

    const actual = gasolineEngine.accelerate()

    expect(actual).toBe('Gasoline engine')
  })
})

describe('ElectricEngine', () => {
  it('should run', () => {
    const { electricEngine } = setup()

    const actual = electricEngine.accelerate()

    expect(actual).toBe('Electric engine')
  })
})

function setup() {
  const engine = mock<Engine>()
  return {
    gasolineEngine: new GasolineEngine(),
    electricEngine: new ElectricEngine(),
    car: new Car(instance(engine)),
    engine,
    carFactory: CarFactory
  }
}
