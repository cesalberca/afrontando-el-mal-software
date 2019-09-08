export class Waiter {
  constructor(private readonly window: Window) {}

  wait(seconds: number) {
    return new Promise(resolve => {
      this.window.setTimeout(() => {
        resolve()
      }, seconds * 1_000)
    })
  }
}
