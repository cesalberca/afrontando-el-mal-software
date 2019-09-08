import { Command } from '../command/command'
import { SpinnerStore } from './spinner-store'
import { Waiter } from '../../utils/waiter'

export class SpinnerCommandDecorator implements Command<unknown, unknown> {
  constructor(
    private readonly commandToBeDecorated: Command<unknown, unknown>,
    private readonly store: SpinnerStore,
    private readonly waiter: Waiter
  ) {}

  async execute(options?: unknown) {
    this.store.showSpinner()
    const result = await this.commandToBeDecorated.execute(options)
    await this.waiter.wait(2)
    this.store.hideSpinner()
    return result
  }
}
