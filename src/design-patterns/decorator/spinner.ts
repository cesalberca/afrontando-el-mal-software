import { ServiceLocator } from './service-locator'

export function Spinner() {
  return (
    target: any,
    _propertyKey: string,
    propertyDescriptor: TypedPropertyDescriptor<
      (...params: any[]) => Promise<any>
    >
  ) => {
    const originalMethod = propertyDescriptor.value
    propertyDescriptor.value = async function(...args: any[]) {
      if (originalMethod === undefined) {
        return
      }

      try {
        ServiceLocator.spinnerStore.showSpinner()
        await ServiceLocator.waiter.wait(2)
        return originalMethod.apply(this, args)
      } finally {
        ServiceLocator.spinnerStore.hideSpinner()
      }
    }

    return propertyDescriptor
  }
}
