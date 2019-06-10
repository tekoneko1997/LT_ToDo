import React from 'react';
import './App.css';
import OATMButton from '../Atoms/OpenAddTodoModalButton/OATMButton';
import TodoItemList from '../../Containers/Organisms/TodoItemList/TodoItemList';
import Header from '../../Containers/Organisms/Header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      </div>
    )
  }
}

export default App;
