import { SpinnerCommandDecorator } from '../spinner-command-decorator'
import { SpinnerStore } from '../spinner-store'
import { anything, deepEqual, instance, mock, verify, when } from 'ts-mockito'
import { Command } from '../../command/command'

describe('SpinnerCommandDecorator', () => {
  it("should call store's show spinner", async () => {
    const { spinnerCommandDecorator, spinnerStore } = setup()

    await spinnerCommandDecorator.execute()

    verify(spinnerStore.showSpinner()).once()
  })

  it("should call store's hide spinner after executing the command", async () => {
    const { spinnerCommandDecorator, spinnerStore } = setup()

    await spinnerCommandDecorator.execute()

    verify(spinnerStore.hideSpinner()).once()
  })

  it('should call the decorated command with the given options', async () => {
    const { command, spinnerCommandDecorator } = setup()

    await spinnerCommandDecorator.execute({ foo: 'bar' })

    verify(command.execute(deepEqual({ foo: 'bar' }))).once()
  })

  it('should return what the decorated command returns', async () => {
    const { command, spinnerCommandDecorator } = setup()
    when(command.execute(anything())).thenResolve('baz')

    const actual = await spinnerCommandDecorator.execute()

    expect(actual).toBe('baz')
  })
})

function setup() {
  const spinnerStore = mock(SpinnerStore)
  const command = mock<Command<string, { foo: 'bar' }>>()
  return {
    spinnerCommandDecorator: new SpinnerCommandDecorator(
      instance(command),
      instance(spinnerStore)
    ),
    spinnerStore,
    command
  }
}
