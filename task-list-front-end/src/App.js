import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios'
import TaskForm from './components/TaskForm.js';


const App = () => {
  const [tasks, setTask] = React.useState([]);

  React.useEffect(()=> {
    console.log("useEffect")
    getTasks()
  },[])

  const getTasks = async () => {
    try {
      const response = await axios.get('https://task-list-api-lnqs.onrender.com/tasks')
      setTask(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const toggleTask = (id, isComplete) => {
    const mark = isComplete ? 'mark_incomplete' : 'mark_complete'
    axios.patch(`https://task-list-api-lnqs.onrender.com/tasks/${id}/${mark}`).then(response => {
      setTask(prevTask => {
        const updateTask = prevTask.map(task => {
          return task.id === id ? response.data.task: task
        })
        return updateTask
      })
    })
  }

  const removeTask = (id) => {
    axios.delete(`https://task-list-api-lnqs.onrender.com/tasks/${id}`).then(() => {
      setTask(prevTask => {
        const updatedtask = prevTask.filter(task => task.id !==id);
        return updatedtask;
      })
    })
  }

  const addTask = (newTaskData) => {
    axios.post('https://task-list-api-lnqs.onrender.com/tasks', newTaskData)
    .then(response => {
      const allTasks = [...tasks]
      allTasks.push({
        id: response.data.task.id,
        description: response.data.task.description,
        is_complete: response.data.task.is_complete,
        title: response.data.task.title,
      })
    setTask(allTasks)
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task List</h1>
      </header>
      <main className="main-app">
        <div className="task-form">
          <TaskForm addTaskCallBack = {addTask}></TaskForm>
        </div>
        <div className="task-list-container">
          <h3 className="to-do-title">To Do's</h3>
          <TaskList tasks={tasks} toggleTask = {toggleTask} removeTask = {removeTask}/>
        </div>
      </main>
    </div>
  );
};

export default App;
;

