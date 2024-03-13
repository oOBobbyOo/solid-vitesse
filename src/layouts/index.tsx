import type { JSX } from 'solid-js'
import Footer from '@/components/Footer'

const Layout = (props: { children?: JSX.Element }) => {
  return (
    <div px-10 py-20 text-center>
      {props.children}

      <Footer />

      <div mx-auto mt-4 text-center text-sm opacity-50>
        [Default Layout]
      </div>
    </div>
  )
}

export default Layout
