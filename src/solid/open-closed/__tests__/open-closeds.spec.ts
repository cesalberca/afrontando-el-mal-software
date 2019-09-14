import {
  MovementCalculator as BadMovementCalculator,
  Truck as BadTruck,
  Plane as BadPlane
} from '../open-closed-bad'
import {
  MovementCalculator as GoodMovementCalculator,
  Truck as GoodTruck,
  Plane as GoodPlane
} from '../open-closed-bad'

describe('MovementCalculator', () => {
  it('should calculate the movement (bad)', () => {
    const badMovementCalculator = new BadMovementCalculator()
    const badTruck = new BadTruck()
    const badPlane = new BadPlane()

    const actual = badMovementCalculator.calculate([badTruck, badPlane])

    expect(actual).toBe(3)
  })

  it('should calculate the movement (good)', () => {
    const goodMovementCalculator = new GoodMovementCalculator()
    const goodTruck = new GoodTruck()
    const goodPlane = new GoodPlane()

    const actual = goodMovementCalculator.calculate([goodTruck, goodPlane])

    expect(actual).toBe(3)
  })
})
