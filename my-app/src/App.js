import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const mapStateToProps = (state) => {
  return { age: state.age }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP' }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN' })
  }
}

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
class App extends Component {

  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <div className="App" >
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>Age: <span>{this.props.age}</span></div>
            <Button onClick={this.props.onAgeUp}>Age Up</Button>
            <Button onClick={this.props.onAgeDown}>Age Down</Button>
            <div style={{ height: 200, width: '50%' }}>
              <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                  <DataGrid columns={[{ field: 'username' }, { field: 'age' }]}
                    rows={[
                      {
                        id: 1,
                        username: '@MaterialUI',
                        age: 20,
                      },
                    ]} />
                </div>
              </div>
            </div>
          </header>
        </div>
      </ThemeProvider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
