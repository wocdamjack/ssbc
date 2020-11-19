import axios from 'axios'

const http = axios.create({
    baseURL: "https://localhost:3001",
    timeout: 100000,
    headers: { 'Content-Type': 'application/json' }
  })

export default http