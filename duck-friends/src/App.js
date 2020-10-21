import React from 'react'

import './App.css'
import AddDuckForm from './components/AddDuckForm'
import DuckList from './components/DuckList'
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <div className="App">
      <LoginForm />
      <AddDuckForm />
      <DuckList />
    </div>
  );
};

export default App;