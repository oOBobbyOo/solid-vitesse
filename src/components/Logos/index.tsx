import logo from '@/assets/solid.svg'

const Logos = () => {
  return (
    <div inline-flex cursor-default text-2xl font-300>
      <div flex flex-col children:mx-auto>
        <img inline-block h-18 w-18 src={logo} />
      </div>
      <div
        text="3xl gray4"
        m="x-4 y-auto"
        i-carbon-add
        transform
        transition-all-500
        hover:rotate-135
      />
      <div flex flex-col children:mx-auto>
        <div i-carbon-campsite inline-block h-18 w-18 />
      </div>
    </div>
  )
}

export default Logos
