import { Command } from "../command/command";

export interface Context {
  command: Command<unknown, unknown>;
  result?: unknown;
  options?: unknown;
}
