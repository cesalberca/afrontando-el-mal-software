import { Command } from "../command/command";

export class SpinnerDecorator implements Command<unknown, unknown> {
  async execute() {
    console.log("showing spinner");

    console.log("hiding spinner");
  }
}
