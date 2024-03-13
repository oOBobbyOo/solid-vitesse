import { useNavigate, useParams } from '@solidjs/router'

const Hi = () => {
  const params = useParams()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div>
      <div i-carbon-pedestrian inline-block animate-shake-x animate-duration-5000 text-4xl />
      <h3 text-2xl font-500>
        Hi,
      </h3>
      <div text-xl>{params.id}!</div>
      <div>
        <button m-3 text-sm btn onClick={goBack}>
          Back
        </button>
      </div>
    </div>
  )
}

export default Hi
