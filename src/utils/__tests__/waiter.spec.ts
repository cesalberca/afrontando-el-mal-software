import { Waiter } from '../waiter'
import { anything, instance, mock, verify } from 'ts-mockito'

describe('wait', () => {
  it('should wait a given number of seconds', () => {
    const { window, waiter } = setup()
    jest.useFakeTimers()

    waiter.wait(1)
    jest.runAllTimers()

    verify(window.setTimeout(anything(), 1_000))
  })
})

function setup() {
  const window = mock<Window>()
  return {
    waiter: new Waiter(instance(window)),
    window
  }
}
