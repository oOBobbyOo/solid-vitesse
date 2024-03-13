import { count, dec, inc } from '@/stores/counter'

const Counter = () => {
  return (
    <div inline-flex m="y-3">
      <button rounded-full p-2 btn onClick={dec}>
        <div i-carbon-subtract />
      </button>
      <div font="mono" w="15" m-auto inline-block>
        {count()}
      </div>
      <button rounded-full p-2 btn onClick={inc}>
        <div i-carbon-add />
      </button>
    </div>
  )
}

export default Counter
