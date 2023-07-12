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

<!-- 发送反馈 -->
<span @click="sendFeedback('xxx', 'like')">
  赞 {{feedbackCount}}
</span>

</template>
  <script> 
  // 获取参数的方法 getParams 没有定义,需要先导入 api.js 并调用:

import api from './api.js'

// ...

mounted() {
  api.getParams().then(...)
}

  data() {
  return {
    messages: [],
    inputMsg: ''
  }
}
// mounted 中调用获取参数
mounted() {
  this.getParams()
}

// 发送消息时
send() {
  const data = {
    query: this.inputMsg,
    // ...其他参数
  }
  
  api.sendMessage(data).then(res => {
    // 显示返回的消息
    const msg = { 
     text: res.answer
    }
    this.messages.push(msg)
  })
}

// 加载更多消息 
loadMore() {
  this.page++

  api.getMessages({
    page: this.page 
  }).then(res => {
    // 追加更多消息
    this.messages.push(...res.data)
  })
}

// 发送反馈
sendFeedback(id, type) {
  api.sendFeedback(id, {
    rating: type
  }) 
}
data() {
  return {
    feedbackCount: 0 
  }
}
// 获取参数:
// mounted 中调用 getParams 获取参数,但没有定义变量存储结果
// 模板直接渲染 {{params}} 但 params 未定义
data() {
  return {
    params: null 
  }
}

mounted() {
  this.getParams().then(res => {
    this.params = res.data
  }) 
}
// 获取历史消息:
// 没有定义 page 变量,直接传了 this.page 可能为 undefined
data() {
  return {
    page: 1
  }
}

loadMore() {
  this.page++ 
  // 请求接口
}

//发送反馈:
//没有定义 feedbackCount 变量,模板直接渲染
//没有处理发送反馈的响应
data() {
  return {
    feedbackCount: 0
  }
}

sendFeedback(id) {
  api.sendFeedback(id).then(res => {
    // 成功后更新数量
    this.feedbackCount++
  })
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