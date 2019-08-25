import { Link } from './link'
import { EmptyLink } from './empty-link'
import { Context } from './context'

export class LoggerLink implements Link {
  nextLink: Link = new EmptyLink()

  async next(context: Context) {
    console.log(
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
