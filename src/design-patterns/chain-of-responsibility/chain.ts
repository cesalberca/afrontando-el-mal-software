import { ExecutorLink } from './executor-link'
import { EmptyLink } from './empty-link'
import { LoggerLink } from './logger-link'
import { CacheLink } from './cache-link'
import { Link } from './link'
import { Context } from './context'
import { CreateCarCommand } from '../command/create-car-command'
import { SpinnerCommandDecorator } from '../decorator/spinner-command-decorator'

export class Chain {
  link: Link = new EmptyLink()

  build() {
    const cacheLink: Link = new CacheLink()
    const executorLink: Link = new ExecutorLink()
    const loggerLink: Link = new LoggerLink()
    const emptyLink: Link = new EmptyLink()
    cacheLink.setNext(executorLink)
    executorLink.setNext(loggerLink)
    loggerLink.setNext(emptyLink)
    this.link = cacheLink
    return this
  }

  async run() {
    const context: Context = {
      command: new SpinnerCommandDecorator(new CreateCarCommand())
    }
    await this.link.next(context)
    return context.result
  }
}
