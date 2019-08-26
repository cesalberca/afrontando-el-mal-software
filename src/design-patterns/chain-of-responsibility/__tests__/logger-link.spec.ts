import { LoggerLink } from '../logger-link'

class MockCommand {
  async execute(): Promise<void> {}
}

describe('LoggerLink', () => {
  it('should log a command', async () => {
    expect.assertions(1)
    const { logger, loggerLink } = setup()

    await loggerLink.next({
      command: new MockCommand()
    })

    expect(logger).toHaveBeenCalledWith('')
  })
})

function setup() {
  const logger = {
    log: jest.fn()
  }
  return {
    logger,
    loggerLink: new LoggerLink(logger)
  }
}
