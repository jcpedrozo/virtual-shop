import { useState } from 'react'

const initialState = {
  car: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCar = payload => {
    setState({
      ...state,
      car: [...state.car, payload]
    })
  }

  return {
    state,
    addToCar,
  }
}

export default useInitialState