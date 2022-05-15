import axios from 'axios'

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://44.204.147.127/api/v1/',
  headers: {
    'Content-type': 'application/json'
  }
})
