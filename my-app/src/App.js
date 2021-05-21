import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    age: 0
  }

  onAgeUp = () => {
    this.setState({
      ...this.state,
      age: ++this.state.age
    })
  }

  onAgeDown = () => {
    this.setState({
      ...this.state,
      age: --this.state.age
    })
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>Age: <span>{this.state.age}</span></div>
          <button onClick={this.onAgeUp}>Age Up</button>
          <button onClick={this.onAgeDown}>Age Down</button>
        </header>
      </div>
    )
  }
}

export default App;
