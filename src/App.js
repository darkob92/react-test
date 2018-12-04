import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './toggle/Toggle';
import UserInput from './input/UserInput';

class App extends Component {

  state = {
    text: 'Toggle',
    color: ['#000'],
    toggleOn: false
  }

  getColor() {
    fetch('http://www.colr.org/json/colors/random/2')
      .then(response => response.json())
      .then((res) => {
        const colors = [];
        colors.push(res.matching_colors[0], res.matching_colors[1])
        this.setState({
          color: colors
        })
        console.log(colors);
      })
  }

  componentDidMount() {
    this.getColor();
    console.log(this.state.color[0]);
  }


  /* input change handler handler */
  inputChangeHandler = (event) => {
    this.setState({ text: event.target.value })
  }

  /* toggle comment handler */
  toggleHandler = (e) => {
    this.setState({toggleOn: true, color: this.state.color});
    console.log(this.state.color[0]);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"
          style={{backgroundColor: `#${this.state.color[0]}`}}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <UserInput 
            changed={this.inputChangeHandler} 
            currentText={this.state.text}
          />
          <Toggle 
            text={this.state.text} 
            changeColor={this.toggleHandler} 
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
