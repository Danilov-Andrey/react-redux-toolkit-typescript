import React, {useEffect} from 'react';
import './App.css';
import {Todos} from "./components/todos";
import {Users} from "./components/users";

function App() {

  return (
    <div className="App">
     <Todos/>
     <Users/>
    </div>
  );
}

export default App;
