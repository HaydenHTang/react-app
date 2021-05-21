import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { age: state.age }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP' }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN' })
  }
}
class App extends Component {

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>Age: <span>{this.props.age}</span></div>
          <button onClick={this.props.onAgeUp}>Age Up</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>
        </header>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
