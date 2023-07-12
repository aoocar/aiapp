<template>
    <div>
      <!-- 聊天消息显示区域 -->
      <div class="chat-messages">
        <div v-for="msg in messages" :key="msg.id">
          {{ msg.text }}
        </div>
      </div>
  
      <!-- 用户输入框和发送按钮 -->
      <div class="user-input">
        <input v-model="inputMsg" type="text" placeholder="输入消息">
        <button @click="send">发送</button>
      </div>
    </div>
  </template>
  
  <script>
  import api from './api'
  
  export default {
    data() {
      return {
        messages: [],
        inputMsg: '',
        conversationId: null,
        user: 'abc-123'
      }
    },
  
    mounted() {
      // 创建新的对话并获取会话标识符
      this.createConversation()
    },
  
    methods: {
      createConversation() {
        api.createConversation(this.user).then(res => {
          this.conversationId = res.data.conversation_id
          this.fetchMessages()
        })
      },
  
      fetchMessages() {
        api.getMessages(this.conversationId).then(res => {
          this.messages = res.data
        })
      },
  
      send() {
        if (!this.conversationId) {
          console.error('会话标识符为空')
          return
        }
  
        const data = {
          query: this.inputMsg,
          conversation_id: this.conversationId,
          user: this.user
        }
  
        api.sendMessage(data).then(res => {
          const msg = {
            id: res.data.id,
            text: res.data.answer
          }
          this.messages.push(msg)
          this.inputMsg = ''
        })
      }
    }
  }
  </script>
  
  <style>
  /* 样式定义 */
  .chat-messages {
    /* 聊天消息显示区域的样式 */
  }
  
  .user-input {
    /* 用户输入框和发送按钮的样式 */
  }
  </style>
  