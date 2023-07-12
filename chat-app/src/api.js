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

  getMessages(params) {
    return api.get('/messages', { params })
  },

  sendFeedback(id, data) {
    return api.post(`/messages/${id}/feedbacks`, data)
  }
}
