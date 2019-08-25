import { Command } from '../command/command'

export class SpinnerCommandDecorator implements Command<unknown, unknown> {
  constructor(
    private readonly commandToBeDecorated: Command<unknown, unknown>
  ) {}

  async execute(options: unknown) {
    console.log('showing spinner')
    await this.commandToBeDecorated.execute(options)
    console.log('hiding spinner')
  }
}
