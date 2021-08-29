import React, { Component } from 'react';
import { getRemoteConfig, fetchAndActivate, getValue } from "firebase/remote-config";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: null
    }
  }

  async componentDidMount() {
    const remoteConfig = getRemoteConfig();
    try {
      await fetchAndActivate(remoteConfig);
      const val = getValue(remoteConfig, "test_config");
      console.log(val.asBoolean());
    } catch (e) {
      console.error(e)
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
