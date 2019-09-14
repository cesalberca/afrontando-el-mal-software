import { race as badRace } from '../liskov-substitution-bad'
import { race as goodRace } from '../liskov-substitution-good'

describe('LiskovSubstitution', () => {
  it('should race cars (bad)', () => {
    const actual = badRace()

    expect(actual).toEqual(['Gasoline car', 'Electric car'])
  })

  it('should race cars (good)', () => {
    const actual = goodRace()

    expect(actual).toEqual(['Gasoline car', 'Electric car'])
  })
})
