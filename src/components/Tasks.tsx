import TaskItem from "./TaskItem"

interface Task {
  id: number;
  text: string;
  day: string;
}

interface TasksProps {
  tasks: Task[];
}

const Tasks: React.FC<TasksProps> = ({ tasks }) => {
	return (
		<>
			{tasks.map((task) => (
				<TaskItem 
					key={ task.id } 
					task={ task }   
				/>
			))}
		</>
	)
}

export default Tasks