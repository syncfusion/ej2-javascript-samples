/* jshint ignore:start */
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/stream', async (req, res) => {
  const { message } = req.body;
  const promptQuery = [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: message }
  ];

  // IMPORTANT: Replace 'OPEN_AI_KEY' with your actual OpenAI API key.
  // It's highly recommended to use environment variables for sensitive information like API keys.
  const client = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY || 'OPEN_AI_KEY' 
  });

  try {
    const stream = await client.chat.completions.create({
      // IMPORTANT: Replace 'MODEL_NAME' with the desired OpenAI model.
      model: process.env.MODEL_NAME || 'MODEL_NAME', 
      stream: true,
      stream_options: {
        include_usage: true
      },
      messages: promptQuery
    });

    for await (const chunk of stream) {
      const delta = chunk.choices?.[0]?.delta?.content || '';
      if (delta) {
        res.write(delta);
      }
    }
    res.end();
  } catch (error) {
    console.error('Error during streaming:', error);
    // It's good practice to send an error response back to the client
    if (!res.headersSent) {
      res.status(500).send('An error occurred while processing your request.');
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
/* jshint ignore:end */