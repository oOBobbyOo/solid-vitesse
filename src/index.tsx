/* @refresh reload */
import { render } from 'solid-js/web'

import '@unocss/reset/tailwind.css'
import '@/styles/main.css'
import 'uno.css'
import App from './App'

const root = document.getElementById('root')

render(() => <App />, root!)
