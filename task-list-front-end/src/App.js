import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
const test=1
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
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} toggleTask = {toggleTask} removeTask = {removeTask}/>}</div>
      </main>
    </div>
  );
};

export default App;

