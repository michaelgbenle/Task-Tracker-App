import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
  const [tasks, setTasks]=useState([
    {
        id: 1,
        text: 'Gym time',
        day: 'May 22 at 7pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Breakfast',
        day: 'May 22 at 10am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Movies',
        day: 'May 22 at 10pm',
        reminder: true,
    }
])

//DeleteTask
const deleteTask =(id)=> {
  setTasks(tasks.filter((task)=>task.id !== id))
}

//ToggleReminder
const toggleReminder =(id)=> {
  setTasks(tasks.map((task)=> task.id ===id ? {...task, reminder:!task.reminder}: task))
}



  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks Available'}
    </div>
  );
}

export default App;
