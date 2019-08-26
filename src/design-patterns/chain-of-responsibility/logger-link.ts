import { Link } from './link'
import { EmptyLink } from './empty-link'
import { Context } from './context'
import { Logger } from './logger'

export class LoggerLink implements Link {
  private nextLink: Link = new EmptyLink()

  constructor(private readonly logger: Logger) {}

  async next(context: Context) {
    this.logger.log(
      `${new Date().toISOString()} - ${
        context.command.constructor.name
      } - ${JSON.stringify(context.result, null, 2)}`
    )
    this.nextLink.next(context)
  }

  setNext(link: Link) {
    this.nextLink = link
  }
}
