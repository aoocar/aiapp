<template>
<h1>我的聊天机器人</h1>
<div class="message-list">
    <!-- 使用 v-for 渲染消息 -->
  </div>
  <input v-model="inputMsg" />
  <button @click="send">发送</button>

  <div v-for="msg in messages">
  <div :class="msg.from">
    {{ msg.text }}
  </div>
</div>

<!-- 显示参数 -->
<div>{{params}}</div>

<!-- 点击加载更多 -->
<button @click="loadMore">更多</button>


<!-- 判断不为空才显示 -->
<div v-if="params">
  {{ params }}
</div>

<!-- 使用 data 中定义的变量 -->
<span @click="sendFeedback">
  赞{{ feedbackCount }} 
</span>

</template>
  <script> 
// 引入api
import api from './api'

export default {

  data() {
    return {
      messages: [],
      inputMsg: '',
      params: null, 
      page: 1,
      feedbackCount: 0
    }
  },

  mounted() {
    // 调用接口获取参数
    api.getParams().then(res => {
      this.params = res.data
    })
  },

  methods: {

    send() {
      // ...发送消息逻辑
      
    },

    loadMore() {
      this.page++ 
      
      // 请求接口
      
    },
    
    sendFeedback(id) {
      // 定义id变量
      const id = 'xxx'
      
      api.sendFeedback(id).then(() => {
        // 更新数量
        this.feedbackCount++  
      })
    }

  }

}

  </script> 

<style> 
/* 在 <style> 中添加 */ 

.message-mine {
  /* 自己发的消息样式 */
}

.message-bot {
  /* 机器人的回复样式 */  
}
</style> 