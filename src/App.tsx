import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

interface Task {
  id: number;
  text: string;
  day: string;
}

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  // const [tasks, setTasks] = useState([])
  const [tasks, setTasks] = useState<Task[]>([ 
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
    }
  ])


  // Add task
  // omit - ensures the function accepts a task obj without an id since it generates id internally
  const addTask = (task :Omit<Task, 'id'>): void => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task}  // a new object with the id and whatever's in task, which is text and day
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