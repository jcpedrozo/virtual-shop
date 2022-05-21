import { useEffect, useState } from "react"
import axios from 'axios'

const useFetch = (api) => {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const response = await axios(api)
    setProducts(response.data)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  return products
}

export default useFetch
