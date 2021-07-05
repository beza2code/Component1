import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

<BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
class App extends Component {
  
 
  render() {
    return (
      <div>
        <Main />
      </div>
    );
}

}

export default App;
