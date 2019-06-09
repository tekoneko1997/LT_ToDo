import React from 'react';
import './App.css';
import OATMButton from '../Atoms/OpenAddTodoModalButton/OATMButton';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <OATMButton />
        </header>
      </div>
    )
  }
}

export default App;
