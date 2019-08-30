const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;

const iceConsole = require('./iceConsole');

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());

//Authentication
app.post('/api/sessions', async function(req, res, next) {
  const { body } = req;
  try {
    const payload = await iceConsole.authenticate(body);
    res.send(payload);
  } catch(err) {
    next(err);
  }
});

//Devices
app.get('/api/catalog/device', async function(req, res, next) {
  const { token } = req.headers;
  try {
    const payload = await iceConsole.fetchDevices(token);
    res.send(payload);
  } catch(err) {
    next(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
}); 