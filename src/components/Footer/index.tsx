import { useNavigate } from '@solidjs/router'
import DarkToggle from '@/components/DarkToggle'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div text="xl gray4" m-5 flex="~ gap3" justify-center>
      <button icon-btn onClick={() => navigate('/')}>
        <div i-carbon-campsite />
      </button>
      <DarkToggle />
      <a i-carbon-logo-github href="https://github.com/oOBobbyOo/solid-vitesse" target="_blank" />
    </div>
  )
}

export default Footer
