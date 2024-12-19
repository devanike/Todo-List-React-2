interface Task {
  text: string;
  day: string;
}

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
	return (
		<div className='task'>
			<h3>
				{task.text} 
			</h3>
			<p>{ task.day }</p>
		</div>
	)
}

export default TaskItem