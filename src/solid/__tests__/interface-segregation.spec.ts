import { HybridCar } from '../interface-segregation'

describe('HybridCar', () => {
  it('should be a Refiller', () => {
    expect(HybridCar.prototype.charge).toBeDefined()
  })

  itShouldBeACharger()
})

describe('ElectricCar', () => {
  itShouldBeACharger()
})

function itShouldBeACharger() {
  it('should be a Charger', () => {
    expect(HybridCar.prototype.refuel).toBeDefined()
  })
}
