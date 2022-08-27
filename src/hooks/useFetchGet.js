import { useEffect, useState } from 'react'

export const useFetchGet = (BASE_URL, id = null) => {
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${BASE_URL}/${id !== null ? id : ''}`)
      .then((resp) => resp.json())
      .then(({ data }) => {
        setProductos(data)
        setIsLoading(false)
      })
      .catch((e) => console.log(e))
  }, [])

  return { productos, isLoading }
}
