import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout/>
        </div>
      </Router>
    );
  }
}

export default App;
