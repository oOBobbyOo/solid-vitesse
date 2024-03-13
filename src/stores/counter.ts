import { createSignal } from 'solid-js'

const [count, setCount] = createSignal(0)

function inc() {
  setCount(count() + 1)
}

function dec() {
  setCount(count() - 1)
}

export { count, inc, dec }
