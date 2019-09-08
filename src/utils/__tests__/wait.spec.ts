import { wait } from '../wait'
import { anything, mock, verify } from 'ts-mockito'

describe('wait', () => {
  it('should wait a given number of seconds', () => {
    const { window } = setup()
    jest.useFakeTimers()

    wait(1)
    jest.runAllTimers()

    verify(window.setTimeout(anything(), 1_000))
  })
})

function setup() {
  return {
    window: mock<Window>()
  }
}
