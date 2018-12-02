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

  getColor = async (e) => {

    const apiCall = await fetch('http://www.colr.org/json/color/random');
    const data = await apiCall.json();
    console.log(data.new_color);

    this.setState({
      color: `#${data.new_color}`
    })
  }

  /* input change handler handler */
  inputChangeHandler = (event) => {
    this.setState({ text: event.target.value })
  }

  /* toggle comment handler */
  toggleHandler = () => {
    this.setState({toggleOn: false, color: this.state.color});
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
          <Toggle 
            text={this.state.text} 
            onClick={this.toggleHandler} 
            changed={this.toggleHandler}
            getColor={this.getColor}
          />
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
