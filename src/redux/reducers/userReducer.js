import { GET_CURRENT_USER } from '../actions'

const initial = {}

const userReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return action.payload

    default:
      return state
  }
}

export default userReducer
