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


send() {
  const data = {
    query: this.inputMsg,
    // 其他必要的参数
  };

  api.sendMessage(data).then(res => {
    // 处理结果  
    const msg = { ... };
    this.messages.push(msg);
  });
}
mounted() {
  api.getParams().then(res => {
    this.params = res.data;
  });
}

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
      // 调用发送消息接口
      api.sendMessage(data).then(res => {
        // 处理结果  
        const msg = {...}
        this.messages.push(msg)
      })
    },

    loadMore() {
      this.page++
      
      // 调用加载更多接口
      api.getMessages().then(res => {
        // 处理结果
        this.messages.push(...res.data)  
      })
    },
    
    sendFeedback(id) {
      // 调用发送反馈接口
      api.sendFeedback(id).then(() => {
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