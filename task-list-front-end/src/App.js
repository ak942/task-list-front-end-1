import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios'
import TaskForm from './components/TaskForm.js';

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
    getTasks()
  },[])

  const getTasks = async () => {
    try {
      const response = await axios.get('https://agnes-task-list-api.onrender.com/tasks')
      setTask(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const toggleTask = (id) => {
    setTask(prevTask => {
      const updatedtask = prevTask.map(task => {
        return task.id === id ? {...task, isComplete: !task.isComplete} : task
      })
    console.log(updatedtask, "update")
    return updatedtask;
    })
    // const updatedtask = tasks.map(task => {
    //     return task.id === id ? {...task, isComplete: !task.isComplete} : task
    //   })  
    // console.log(updatedtask)
  };

  const markComplete = (id) => {
    axios.patch(`https://agnes-task-list-api.onrender.com/tasks/${id}/mark_complete`).then(response => {
      setTask(prevTask => {
        const updateTask = prevTask.map(task => {
          return task.id === id ? response.data: task
        })
        return updateTask
      })
    })
  }

  const removeTask = (id) => {
    axios.delete(`https://agnes-task-list-api.onrender.com/tasks/${id}`).then(() => {
      setTask(prevTask => {
        const updatedtask = prevTask.filter(task => task.id !==id);
        return updatedtask;
      })
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task List</h1>
      </header>
      <main>
        <TaskForm></TaskForm>
        <div>{<TaskList tasks={tasks} toggleTask = {toggleTask} removeTask = {removeTask}/>}</div>
      </main>
    </div>
  );
};

export default App;

