import { makeHeader } from "./header.js";
import { makeMain } from "./main.js";

//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
  const header = makeHeader();
  const main = makeMain();

  const body = document.createElement("body");
  body.append(header, main);

  const button = body.querySelector("#increment");
  const counter = body.querySelector("#counter");
  const buttonDecrement = body.querySelector('#decrement');

  buttonDecrement.addEventListener('click', () => {
    decrement(counter);
  })

  button.addEventListener("click", () => {
    increment(counter);
  });

  return body;
}
