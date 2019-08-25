export interface Command<Result = void, Options = void> {
  execute(options: Options): Promise<Result>
}
