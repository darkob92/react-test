import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './toggle/Toggle';
import UserInput from './input/UserInput';

class App extends Component {



  state = {
    text: 'Toggle',
    color: '',
    toggleOn: true
  }

  inputChangeHandler = (event) => {
    this.setState({ text: event.target.value })
  }

  toggleHandler = () => {
    let newColor = this.state.color === '' ? 'yellow' : '';
    this.setState({toggleOn: false, color: newColor});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"
          style={{ backgroundColor: `${this.state.color}` }}>
          <img src={logo} className="App-logo" alt="logo" />
          <UserInput 
            changed={this.inputChangeHandler} 
            currentText={this.state.text}
          />
          <Toggle text={this.state.text} onClick={this.toggleHandler} changed={this.toggleHandler}/>
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
