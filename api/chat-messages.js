const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const apiUrl = 'https://api.dify.ai/v1/chat-messages';
  const secretKey = 'app-zWoAxLPaBgKT8djav0EB6Gm9';
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
