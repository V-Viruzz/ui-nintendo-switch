import { useRouteError } from 'react-router-dom'

function Error () {
  const { message, statusText } = useRouteError() as { message: string, statusText: string }
  return (
    <div>
      <h1>Error</h1>
      <p>{message ?? statusText}</p>
    </div>
  )
}

export default Error
