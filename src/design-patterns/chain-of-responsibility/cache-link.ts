import { Link } from './link'
import { EmptyLink } from './empty-link'
import { Context } from './context'

export class CacheLink implements Link {
  nextLink: Link = new EmptyLink()
  cache = new Map<string, unknown>()

  async next(context: Context) {
    const key = context.command.constructor.name
    if (this.cache.has(key)) {
      context.result = this.cache.get(key)
      this.setNext(new EmptyLink())
    } else {
      await this.nextLink.next(context)
      this.cache.set(key, context.result)
    }
    this.nextLink.next(context)
  }

  setNext(link: Link) {
    this.nextLink = link
  }
}
