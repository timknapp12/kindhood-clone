import React, { Component } from 'react';
import './App.css';
import router from './router';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        {router}
        <Footer/>
      </div>
    );
  }
}

export default App;
