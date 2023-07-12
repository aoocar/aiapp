// api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.dify.ai/v1' 
})

export default {
  getParams() {
    return api.get('/parameters') 
  },

  sendMessage(data) {
    return api.post('/chat-messages', data)
  },

  // 其他接口方法
}