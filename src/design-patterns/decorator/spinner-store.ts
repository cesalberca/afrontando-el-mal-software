import { BehaviorSubject, Observable } from 'rxjs'

interface State {
  isLoading: boolean
}

export class SpinnerStore {
  private readonly state = new BehaviorSubject<State>({ isLoading: false })

  showSpinner() {
    this.state.next({ isLoading: true })
  }

  hideSpinner() {
    this.state.next({ isLoading: false })
  }

  get(): Observable<State> {
    return this.state.asObservable()
  }

  value(): State {
    return this.state.getValue()
  }
}
