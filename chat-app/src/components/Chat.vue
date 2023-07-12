<template>
<h1>我的聊天机器人</h1>
<div class="message-list">
    <!-- 使用 v-for 渲染消息 -->
  </div>
  <input v-model="inputMsg" />
  <button @click="send">发送</button>
</template>
  <script> 
  data() {
  return {
    messages: [],
    inputMsg: '' 
  }
}

methods: {
  send() {
    // 调用 API 发送消息
    // 将新消息对象 push 到 messages 数组
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