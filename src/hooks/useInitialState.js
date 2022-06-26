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

  const removeToCar = payload => {
    setState({
      ...state,
      car: state.car.filter(items => items.id !== payload.id)
    })
  }

  return {
    state,
    addToCar,
    removeToCar,
  }
}

export default useInitialState