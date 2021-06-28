import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FormTasks from './components/FormTask';
import ListTasks from './components/ListTasks';

const App = () => {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'learn React',
        completed: false
      },
      {
        id: 2,
        text: 'learn Svelte',
        completed: false
      }
    ]
  );


  return (
    <div className="contenedor">
      <Header />
      <FormTasks tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks}/>
    </div>
  );
}

export default App;
