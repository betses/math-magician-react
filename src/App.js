import React from 'react';
import './App.css';
import Calculator from './component/calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
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
