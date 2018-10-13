import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Myname from './Myname';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Myname name='박은ㅂㅣ'/>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
