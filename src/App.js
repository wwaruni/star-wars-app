import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import People from './containers/People/People';

class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <Header/>
            <main className="mdl-layout__content">
              <People/>
            </main>
      </div>
    );
  }
}

export default App;
