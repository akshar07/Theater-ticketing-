import React, { Component } from 'react';
import {Home} from './home/Home';
import './App.css';
import Main from './main/Main';
import Header from './header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
