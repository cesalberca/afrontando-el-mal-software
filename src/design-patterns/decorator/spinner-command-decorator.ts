import { Command } from '../command/command'
import { SpinnerStore } from './spinner-store'
import { Waiter } from '../../utils/waiter'

export class SpinnerCommandDecorator<Result, Options>
  implements Command<Result, Options> {
  constructor(
    private readonly commandToBeDecorated: Command<Result, Options>,
    private readonly store: SpinnerStore,
    private readonly waiter: Waiter
  ) {}

  async execute(options: Options): Promise<Result> {
    this.store.showSpinner()
    const result = await this.commandToBeDecorated.execute(options)
    await this.waiter.wait(2)
    this.store.hideSpinner()
    return result
  }
}
