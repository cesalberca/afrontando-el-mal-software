import { SpinnerStore } from './spinner-store'
import { Waiter } from "../../utils/waiter";

export class ServiceLocator {
  static spinnerStore = new SpinnerStore()
  static waiter = new Waiter(window)
}
