import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: {},
        };
    }

    componentDidMount() {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        };

        fetch('http://103.16.73.242:5000/api/ping', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({message: data}));

    };

    render() {

        const {message} = this.state;

        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple POST Request</h5>
                <div className="card-body">
                    Response Message: {message}
                </div>
            </div>
        )
    }

    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
    );*/
}

export default App;
