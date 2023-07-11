const apiUrl = 'https://api.dify.ai/v1/chat-messages';
const conversationDiv = document.getElementById('conversation');
const inputText = document.getElementById('inputText');

async function sendMessage() {
  const query = inputText.value.trim();
  if (query === '') {
    return;
  }

  const requestBody = {
    inputs: {},
    query: query,
    response_mode: 'blocking',
    conversation_id: '', // 如果要继续对话，请传入上下文返回的 conversation_id
    user: 'abc-123' // 您的用户标识
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer app-zWoAxLPaBgKT8djav0EB6Gm9',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error('请求失败');
    }

    const responseData = await response.json();
    const answer = responseData.answer;
    addMessageToConversation(query, answer);
  } catch (error) {
    console.error('发生错误:', error);
  }
}

function addMessageToConversation(query, answer) {
  const message = document.createElement('p');
  message.innerHTML = `<strong>你:</strong> ${query}<br><strong>AI:</strong> ${answer}`;
  conversationDiv.appendChild(message);
  inputText.value = '';
}
