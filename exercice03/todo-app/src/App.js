import { useState } from 'react';
import './App.css'
import TaskList from './Components/TaskList';

function App() {
  // useState permet de définir des données (getter) et le setter le ([]) permet de définir que, de base, il revoit un tableau vide
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");


  const addTask = (event) => {
    event.preventDefault();
    setTodoList([...todoList,task])
    console.log(todoList)
    setTask("");
  }


// On insert dans le return ce que l'on veut voir affiché

  return (
    <div className="App">
      <h1>Bienvenue sur le TodoApp</h1>
      <form onSubmit={(event) => addTask(event)}>
        <input value={task} onChange={(event) => setTask(event.currentTarget.value)} type="text" placeholder='New task' />
        <button type='submit'>Add task</button>
      </form>
      
    <TaskList tasksList={todoList}/>

    </div>
  );
}

export default App;