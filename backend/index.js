const express = require('express');
const app = express();
const PORT = 3000;

// Basic Hello World route
app.get('/', (req, res) => {
  res.send('Hello World from Node.js!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
