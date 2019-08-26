import { ExecutorLink } from '../executor-link'
import { Command } from '../../command/command'
import { Context } from '../context'

describe('ExecutorLink', () => {
  it('should execute a given command', async () => {
    expect.assertions(1)
    const { executorLink } = setup()
    const mock: Command = {
      execute: jest.fn()
    }

    await executorLink.next({ command: mock })

    expect(mock.execute).toHaveBeenCalled()
  })

  it('should execute a given command with parameters', async () => {
    expect.assertions(1)
    const { executorLink } = setup()
    const mock: Command = {
      execute: jest.fn()
    }

    await executorLink.next({ command: mock, options: 42 })

    expect(mock.execute).toHaveBeenCalledWith(42)
  })

  it('should set the result', async () => {
    expect.assertions(1)
    const { executorLink } = setup()
    const mock: Command<number> = {
      execute: () => Promise.resolve(42)
    }
    const context: Context = { command: mock, options: 42 }

    await executorLink.next(context)

    expect(context.result).toBe(42)
  })
})

function setup() {
  return {
    executorLink: new ExecutorLink()
  }
}
