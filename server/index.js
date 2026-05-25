const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  // Demo: log contact form submissions. Replace with real mail sending logic.
  console.log('Contact form submission:', req.body);
  res.json({ status: 'ok', message: 'Message received (demo server).' });
});

app.use(express.static('..'));

app.listen(port, ()=> console.log(`Server running on http://localhost:${port}`));
