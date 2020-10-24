import * as React from 'react'
import axios from 'axios'

export const App = (): React.ReactElement => {
  const [imgSrc, setImgSrc] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const getRandomCat = async () => {
    setLoading(true)

    try {
      const res = await axios.get(
        'https://source.unsplash.com/random/800x600?cat'
      )

      const url: string = res.request.responseURL

      setImgSrc(url)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button onClick={getRandomCat} disabled={loading}>
        {loading ? 'Loading...' : 'Random Cat'}
      </button>
      <br />
      {imgSrc && <img src={imgSrc} width="100%" />}
    </div>
  )
}
