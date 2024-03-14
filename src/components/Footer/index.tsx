import DarkToggle from '@/components/DarkToggle'

const Footer = () => {
  return (
    <div text="xl gray4" m-5 flex="~ gap3" justify-center>
      <DarkToggle />
      <a i-carbon-logo-github href="https://github.com/oOBobbyOo/solid-vitesse" target="_blank" />
    </div>
  )
}

export default Footer
