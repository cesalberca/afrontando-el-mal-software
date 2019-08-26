import { Chain } from './design-patterns/chain-of-responsibility/chain'
import { fromEvent } from 'rxjs'
import { SpinnerStore } from './design-patterns/decorator/spinner-store'
import { tap } from 'rxjs/operators'

document.getElementById('app').innerHTML = `
<div class="spinner">
  <span>Cargando...</span>
</div>
<main class="content">
  <h1>A<strong>front</strong>ando el mal software</h1>
  <button id="run">Ejecutar</button>
</main>
`

const store = new SpinnerStore()
store
  .get()
  .pipe(
    tap(state => {
      document
        .querySelector('.content')
        .classList.toggle('is-loading', state.isLoading)

      document
        .querySelector('.spinner')
        .classList.toggle('show', state.isLoading)
    })
  )
  .subscribe()

const chain = new Chain(store, window.console).build()
fromEvent(document.querySelector('#run'), 'click').subscribe(() =>
  chain.run().then(console.warn)
)
