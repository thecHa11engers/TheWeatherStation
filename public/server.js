const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

let latestData = {
  temp: "--",
  hum: "--",
  air: "--",
  wind: "--"
};

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/data', (req, res) => {
  latestData = req.body;
  res.sendStatus(200);
});

app.get('/api/data', (req, res) => {
  res.json(latestData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
