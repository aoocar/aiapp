import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.dify.ai/v1',
  headers: {
    'Authorization': 'Bearer app-zWoAxLPaBgKT8djav0EB6Gm9',
    'Content-Type': 'application/json'
  }
})

export default {
  createConversation(user) {
    return api.post('/chat-messages', {
      user: user,
      response_mode: 'streaming'
    })
  },

  getMessages(conversationId) {
    return api.get('/messages', {
      params: {
        conversation_id: conversationId
      }
    })
  },

  sendMessage(data) {
    return api.post('/chat-messages', data)
  }
}
