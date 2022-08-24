import axios from "axios"

const api = axios.create({
    baseURL: 'http://172.20.6.120:8080',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json'
      }
  })
  
  export default api