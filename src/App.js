import React, { Component } from 'react';
import Users from './components/Users';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import './App.css';
import './index.css';
class App extends Component {


  render() {
    return (
      <div className="">
        <Navbar />
        <AddUser/>
        <hr />
        <Users />
      </div>
    )
  }
}

export default App;
