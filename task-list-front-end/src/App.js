import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios'

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTask] = React.useState(TASKS);

  React.useEffect(()=> {
    console.log("useEffect")
    const getAllData = async () => {
      try {
      const response = await axios.get('https://agnes-task-list-api.onrender.com/tasks')
      console.log(response)
    } catch (err) {
      console.log(err.message)
    }
  }
    return getAllData
  },[])

  const toggleTask = (id) => {
    setTask(prevTask => {
      const updatedtask = prevTask.map(task => {
        return task.id === id ? {...task, isComplete: !task.isComplete} : task
      })
    return updatedtask;
    })
  };

  const removeTask = (id) => {
    setTask(prevTask => {
      const updatedtask = prevTask.filter(task => task.id !==id);
      return updatedtask;
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} toggleTask = {toggleTask} removeTask = {removeTask}/>}</div>
      </main>
    </div>
  );
};

export default App;

