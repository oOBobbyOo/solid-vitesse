import { createPrefersDark } from '@solid-primitives/media'
import { makePersisted } from '@solid-primitives/storage'
import { createEffect, createSignal } from 'solid-js'

const DarkToggle = () => {
  const prefersDark = createPrefersDark()
  const [store, setStore] = makePersisted(createSignal(), { name: 'theme' })

  createEffect(() => {
    if (store() === 'dark' || (prefersDark() && store() !== 'light')) {
      document.documentElement.classList.toggle('dark', true)
    }
  })

  const toggleDark = () => {
    const docEl = document.documentElement
    docEl.classList.toggle('dark')
    const isDark = docEl.classList.contains('dark')
    setStore(isDark ? 'dark' : 'light')
  }

  return (
    <button class="!outline-none" onClick={toggleDark}>
      <div class="i-carbon-sun dark:i-carbon-moon" />
    </button>
  )
}

export default DarkToggle
