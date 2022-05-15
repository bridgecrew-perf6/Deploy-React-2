import axios from 'axios'

export const GET_CURRENT_USER = 'GET_CURRENT_USER'

export const getCurrentUser = (uid) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API}/api/v1/user/${uid}`)
      .then((res) => dispatch({ action: GET_CURRENT_USER, payload: res.data }))
      .catch((e) => {
        console.log(e)
      })
  }
}
