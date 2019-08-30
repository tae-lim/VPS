import React, { Component } from 'react';
import regeneratorRuntime from 'regenerator-runtime';

import Devices from './Devices';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: []
    }
    this.authorizeUser = this.authorizeUser.bind(this);
    this.fetchDevices = this.fetchDevices.bind(this);
  }

  componentDidMount() {
    this.authorizeUser()
      .then(payload => {
        const { token } = payload;
        this.fetchDevices(token);
      })
      .catch(err => console.log(err)); 
  }

  async authorizeUser() {
    const credentials = {
      username: 'testUser',
      password: 'abc123ABC$$$'
    };
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }
    try {
      const response = await fetch('/api/sessions', config);
      const payload = await response.json();
      return payload;
    } catch(err) {
      console.log(err);
    }
  }

  async fetchDevices(token) {
    const config = {
      method: 'GET',
      headers: {
        'Token': token
      }
    }
    try {
      const response = await fetch('/api/catalog/device', config);
      const devices = await response.json();
      await this.setState({
        devices
      });
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    const { devices } = this.state;
    return (
      <div className="app-container">
        <h1>Devices</h1>
        <Devices devices={devices}/>
      </div>
    )
  }
}

export default App;