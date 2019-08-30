const https = require('https');
const fetch = require("node-fetch");

const agent = new https.Agent({
  rejectUnauthorized: false
});

const authenticate = async credentials => {
  const url = 'https://34.200.240.237:9002/v4/sessions';
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    agent: agent,
    body: JSON.stringify(credentials),
  }
  try {
    const response = await fetch(url, config);
    const payload = await response.json();
    return payload;
  } catch(err) {
    console.log(err);
  }
}

const fetchDevices = async token => {
  const url = 'https://34.200.240.237:9002/v4/catalog/device';
  const config = {
    method: 'GET',
    headers: {
      'Token': token
    },
    agent: agent
  }
  try {
    const response = await fetch(url, config);
    const payload = await response.json();
    return payload;
  } catch(err) {
    console.log(err);
  }
}

module.exports.authenticate = authenticate;
module.exports.fetchDevices = fetchDevices;