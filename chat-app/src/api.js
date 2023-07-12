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

// 获取参数
getParams() {
    return api.get('/parameters')
  }
  
  // 获取历史消息  
  getMessages(params) {
    return api.get('/messages', {params}) 
  }
  
  // 发送反馈
  sendFeedback(id, data) {
    return api.post(`/messages/${id}/feedbacks`, data)
  }