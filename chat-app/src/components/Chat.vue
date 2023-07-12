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
    messages: []
  }
}

methods: {
  send() {
    // 调用 API 获取数据
    const msg = { /* 新消息对象 */ }
    
    // 添加到数组
    this.messages.push(msg) 
  }
}

methods: {
  async send() {
    const res = await api.sendMessage(data)
    
    // 操作数据
    if (res.ok) {
      // 成功则 push 消息  
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