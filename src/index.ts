import { Chain } from './design-patterns/chain-of-responsibility/chain'
import { fromEvent } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Waiter } from './utils/waiter'
import { PageLogger } from './design-patterns/page-logger'
import { ServiceLocator } from './design-patterns/decorator/service-locator'

document.getElementById('app').innerHTML = `
<div class="spinner">
  <span>Cargando...</span>
</div>
<main class="content">
  <h1>A<strong>front</strong>ando el mal software</h1>
  <button id="run">Ejecutar</button>
  <h2>Logs de comandos</h2>
  <div id="command-logs"></div>
  
  <h2>Logs de resultado de ejecución</h2>
  <div id="result-logs"></div>
</main>
`

const store = ServiceLocator.spinnerStore
store
  .get()
  .pipe(
    tap(state => {
      const addClassTo = (cssClass: string, selector: string) =>
        document
          .querySelector(selector)
          .classList.toggle(cssClass, state.isLoading)
      addClassTo('is-loading', '.content')
      addClassTo('show', '.spinner')
    })
  )
  .subscribe()

const commandPageLogger = new PageLogger(window, '#result-logs')
const chain = new Chain(
  store,
  new PageLogger(window, '#command-logs'),
  new Waiter(window)
).build()

fromEvent(document.querySelector('#run'), 'click').subscribe(() =>
  chain
    .run()
    .then(result => commandPageLogger.log(JSON.stringify(result, null, 2)))
)
