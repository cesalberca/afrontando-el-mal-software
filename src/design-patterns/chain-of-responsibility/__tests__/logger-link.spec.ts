import { LoggerLink } from '../logger-link'
import { mockDate, RealDate } from '../../../../test/utils/mock-date'
import { Command } from '../../command/command'

class MockCommand implements Command {
  async execute(): Promise<void> {}
}

describe('LoggerLink', () => {
  beforeAll(() => {
    mockDate('2019-04-15:13:00:00Z')
  })

  afterAll(() => {
    global.Date = RealDate
  })

  it('should log a command', async () => {
    expect.assertions(1)
    const { logger, loggerLink } = setup()

    await loggerLink.next({
      command: new MockCommand(),
      result: 42
    })

    expect(logger.log).toHaveBeenCalledWith(
      '2019-04-15T13:00:00.000Z - MockCommand - 42'
    )
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
