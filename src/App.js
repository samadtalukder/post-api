import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ObjectResponse: {},
        };
    }

    componentDidMount() {

        var data = {Email: "", password: ""};

        const requestOptions = {
            method: 'POST',
            headers: {
                'x-api-key': '2020'
            },
            body: {
                Email: 'kxtsp@mail.xyz',
                Password: '12345678',
            },
        };

        console.log(requestOptions);
        /*fetch('http://103.16.73.242:5000/api/ping', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({printMessage: data}));*/

        fetch('http://103.16.73.242:5000/api/registration', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));

    };

    render() {

        const {printMessage} = this.state;

        return (
            <div className="card text-center m-3">

                <div className="card-body">

                    {printMessage && true ? printMessage.response ? printMessage.response.message : "Success" : "No Data"}

                    {/*Response Message: {printMessage && true ? printMessage.response ? printMessage.response.message: 'jj' : 'no data' }*/}
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
