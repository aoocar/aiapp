// 获取 chat-container 元素
const chatContainer = document.getElementById('chat-container');

// 定义调用 API 的函数
async function callAPI() {
  const apiUrl = 'https://api.dify.ai/v1/chat-messages';
  const apiKey = 'app-zWoAxLPaBgKT8djav0EB6Gm9';

  const requestBody = {
    inputs: {},
    query: 'eh',
    response_mode: 'streaming',
    conversation_id: '1c7e55fb-1ba2-4e10-81b5-30addcea2276',
    user: 'abc-123'
  };

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  const responseData = await response.json();

  // 处理 API 响应的逻辑
  // 在 chat-container 中显示回答
  const answer = responseData.answer;
  const answerElement = document.createElement('p');
  answerElement.textContent = answer;
  chatContainer.appendChild(answerElement);
}

// 调用 API
callAPI();
