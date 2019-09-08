import { Command } from '../command/command'
import { SpinnerStore } from './spinner-store'
import { wait } from '../../utils/wait'

export class SpinnerCommandDecorator implements Command<unknown, unknown> {
  constructor(
    private readonly commandToBeDecorated: Command<unknown, unknown>,
    private readonly store: SpinnerStore
  ) {}

  async execute(options?: unknown) {
    this.store.showSpinner()
    const result = await this.commandToBeDecorated.execute(options)
    await wait(2)
    this.store.hideSpinner()
    return result
  }
}
