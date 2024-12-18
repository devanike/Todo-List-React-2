import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  // const [tasks, setTasks] = useState([])
  const [tasks, setTasks] = useState([ 
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    }
  ])


  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task}  // a new object with the id and whatever's in task, which is text, day and reminder
    setTasks([...tasks, newTask])  //copies the current task already there and adds the new task
  }

  return (
    <>
      <div className="container">
        <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask} />
          {showAddTask && <AddTask onAdd={addTask}/>}   {/*if showaddtask is true, show add task*/}
          {tasks.length > 0 ? (
            <Tasks 
              tasks={ tasks } 
            />
          ) : (
            'No Tasks To Show'
          )}
      </div>
    </>
  );
}

export default App;

// TODO: use local storage to store the tasks