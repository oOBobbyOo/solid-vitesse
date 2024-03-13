import { useNavigate } from '@solidjs/router'

const InputEntry = () => {
  const navigate = useNavigate()
  let inputRef: any

  const go = () => {
    if (inputRef.value) navigate(`/hi/${encodeURIComponent(inputRef.value)}`)
  }

  return (
    <div>
      <input
        id="input"
        ref={inputRef}
        placeholder="What's your name?"
        type="text"
        autocomplete="off"
        p="x-4 y-2"
        m="t-5"
        w="250px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        onKeyDown={(e) => {
          if (e.key === 'Enter') go()
        }}
      />
      <div>
        <button m-3 text-sm btn onClick={go}>
          GO
        </button>
      </div>
    </div>
  )
}

export default InputEntry
