import React from 'react'

import './App.css'
import AddDuckForm from './components/AddDuckForm'
import DuckList from './components/DuckList'

const App = () => {
  return (
    <div className="App">
      <AddDuckForm />
      <DuckList />
    </div>
  );
};

export default App;