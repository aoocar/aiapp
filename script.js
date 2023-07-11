const chatContainer = document.getElementById('chatContainer');

// 发送API请求的函数
async function sendMessage(query, conversationId, user) {
  const url = 'https://api.dify.ai/v1/chat-messages';
  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer app-zWoAxLPaBgKT8djav0EB6Gm9',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      inputs: {},
      query: query,
      response_mode: 'streaming',
      conversation_id: conversationId,
      user: user
    })
  };

  const response = await fetch(url, requestOptions);
  const reader = response.body.getReader();

  let chunks = '';
  let decoder = new TextDecoder('utf-8');

  // 处理流式数据
  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    const chunk = decoder.decode(value);
    chunks += chunk;

    // 将每条数据作为JSON解析并处理
    chunks.split('\n').filter(line => !!line.trim()).forEach((line) => {
      const data = JSON.parse(line);
      renderMessage(data.answer);
    });
  }
}

// 显示对话消息的函数
function renderMessage(message) {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  chatContainer.appendChild(messageElement);
}

// 示例对话请求
sendMessage('Hello', '', 'abc-123');
