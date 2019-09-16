import { CacheLink } from '../cache-link'
import { anything, capture, instance, mock, verify } from 'ts-mockito'
import { Command } from '../../command/command'
import { EmptyLink } from '../empty-link'
import { Link } from '../link'

describe('CacheLink', () => {
  xit('should not call the command twice', async () => {
    const { cacheLink, command, nextLink } = setup()

    await cacheLink.next({ command })
    await cacheLink.next({ command })

    const [captured] = capture(nextLink.next).last()

    expect(captured).toEqual('')

    verify(nextLink.next(anything())).once()
  })
})

function setup() {
  const mockedCommand = mock<Command>()
  const nextLink = mock<Link>()
  const cacheLink = new CacheLink()
  cacheLink.setNext(nextLink)
  return {
    mockedCommand,
    nextLink,
    command: instance(mockedCommand),
    cacheLink
  }
}
