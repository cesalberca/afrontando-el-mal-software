import { Chain } from "./design-patterns/chain-of-responsibility/chain";

document.getElementById("app").innerHTML = `
<main>
  <h1>A<strong>front</strong>ando el mal software</h1>
  <button id="run">Run</button>
</main>
`;

const chain = new Chain().build();
document.querySelector("#run").addEventListener("click", () => {
  chain.run().then(console.warn);
});
