const express = require('express');
const bodyParser = require('body-parser');
const gtts = require('gtts');
const url = require('url');

const app = express();
const PORT = process.env.PORT || 5000;



app.use(bodyParser.json());

app.post('/api/text-to-speech', (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).send('Text is required');
  }

  const gttsInstance = new gtts(text, 'en');
  const audioBuffer = gttsInstance.save();

  res.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'Content-Length': audioBuffer.length,
    'Content-Disposition': 'attachment; filename="speech.mp3"'
  });

  res.end(audioBuffer);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
