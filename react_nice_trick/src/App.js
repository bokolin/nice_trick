import React, { Component } from 'react';
import GlobalStyle from './style.js'
import Route from './router/router'

class App extends Component{
  render() {
    return  (
          <div className="App">
            <GlobalStyle></GlobalStyle>
            <Route></Route>
          </div>
        );
  }
}

export default App;
