import { ExecutorLink } from './executor-link'
import { EmptyLink } from './empty-link'
import { LoggerLink } from './logger-link'
import { CacheLink } from './cache-link'
import { Link } from './link'
import { Context } from './context'
import { CreateCarCommand } from '../command/create-car-command'
import { SpinnerCommandDecorator } from '../decorator/spinner-command-decorator'
import { SpinnerStore } from '../decorator/spinner-store'
import { Logger } from './logger'
import { Waiter } from '../../utils/waiter'
import { Vehicle } from '../../solid/dependency-inversion/dependency-inversion-good'

export class Chain {
  private firstLink: Link = new EmptyLink()

  constructor(
    private readonly store: SpinnerStore,
    private readonly logger: Logger,
    private readonly waiter: Waiter
  ) {}

  build(): this {
    const cacheLink: Link = new CacheLink()
    const executorLink: Link = new ExecutorLink()
    const loggerLink: Link = new LoggerLink(this.logger)
    const emptyLink: Link = new EmptyLink()
    cacheLink.setNext(executorLink)
    executorLink.setNext(loggerLink)
    loggerLink.setNext(emptyLink)
    this.firstLink = cacheLink
    return this
  }

  async run(): Promise<Vehicle> {
    const context: Context<CreateCarCommand> = {
      command: new SpinnerCommandDecorator(
        new CreateCarCommand(),
        this.store,
        this.waiter
      )
    }
    await this.firstLink.next(context)
    return context.result
  }
}
