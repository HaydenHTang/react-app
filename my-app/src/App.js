import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';

const mapStateToProps = (state) => {
  return {
    noOfUser: state.noOfUser,
    users: state.users,
    userInput: state.userInput
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateUser: async () => dispatch(await createUser()),
    handleTextField: (field, value) => dispatch(handleTextField(field, value))
  }
}

const createUser = async () => {
  var userObj = {
    firstName: "from FE",
    lastName: "from FE",
    jobTitle: "from FE"
  }
  await axios.post(`http://localhost:3000/users/createUser`, userObj)
    .then(res => {
      userObj.id = res.data.data.userId
      userObj.userId = res.data.data.userId
    })
  return {
    type: 'CREATE_USER',
    payload: userObj
  }
}

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const handleTextField = (e) => {
  const { name, value } = e.target;
  return {
    type: 'CHANGE_INPUT',
    payload: {
      name: name,
      value: value,
    }
  }
};

const column = [{ field: 'userId', width: 120 }, { field: 'firstName', width: 140 }, { field: 'lastName', width: 140 }, { field: 'jobTitle', width: 140 }]
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <div className="App" >
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>Number Of User Created: <span>{this.props.noOfUser}</span></div>
            <form noValidate autoComplete="off">
              <TextField id="outlined-basic" label="First Name" name="firstName" variant="outlined" onChange={this.props.handleTextField} />
              <TextField id="outlined-basic" label="Last Name" name="lastName" variant="outlined" onChange={this.props.handleTextField} />
              <TextField id="outlined-basic" label="Job Title" name="jobTitle" variant="outlined" onChange={this.props.handleTextField} />
            </form>
            <Button onClick={this.props.onCreateUser}>Create User</Button>
            <div style={{ height: 200, width: '70%' }}>
              <DataGrid columns={column}
                rows={this.props.users} />
            </div>
          </header>
        </div>
      </ThemeProvider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
