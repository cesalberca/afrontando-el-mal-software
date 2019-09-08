import { SpinnerStore } from '../spinner-store'

describe('SpinnerStore', () => {
  it('should set isLoading to true when calling showSpinner', () => {
    const { spinnerStore } = setup()

    spinnerStore.showSpinner()

    expect(spinnerStore.value().isLoading).toBe(true)
  })

  it('should set isLoading to false when calling hideSpinner', () => {
    const { spinnerStore } = setup()

    spinnerStore.showSpinner()
    spinnerStore.hideSpinner()

    expect(spinnerStore.value().isLoading).toBe(false)
  })
})

function setup() {
  return {
    spinnerStore: new SpinnerStore()
  }
}
