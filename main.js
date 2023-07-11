// 获取表单元素和对话输出元素
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatOutput = document.getElementById('chat-output');

// 定义 API 请求的基本信息
const apiUrl = 'https://api.dify.ai/v1/chat-messages';
const secretKey = 'app-zWoAxLPaBgKT8djav0EB6Gm9';
let conversationId = null;

// 处理表单提交事件
chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const userMessage = userInput.value.trim();
  if (userMessage !== '') {
    sendMessage(userMessage);
    userInput.value = '';
  }
});

// 发送消息到 API
function sendMessage(message) {
  const data = {
    inputs: {},
    query: message,
    response_mode: 'streaming',
    conversation_id: conversationId,
    user: 'abc-123'
  };

  fetch('/api/chat-messages', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${secretKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  
    .then(response => response.json())
    .then(data => handleApiResponse(data))
    .catch(error => console.error(error));
}

// 处理 API 响应
function handleApiResponse(responseData) {
  if (responseData.conversation_id) {
    conversationId = responseData.conversation_id;
  }

  const message = responseData.message || '';

  // 将对话结果添加到输出元素中
  chatOutput.innerHTML += `<p>${message}</p>`;
}
