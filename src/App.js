import React from 'react';
import './App.css';
import Calculator from './component/calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
