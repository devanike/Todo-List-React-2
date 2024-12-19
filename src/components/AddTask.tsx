import { useState } from 'react'

// defines interface for AddTask function
interface AddTaskProps {
    onAdd: (task: { text: string; day: string }) => void;
}

// React.FC - React Functional Components
const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
    const [text, setText] = useState<string>('')
    const [day, setDay] = useState<string>('')

    // handles form submission
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd ({ text, day })

        // resetting
        setText('')
        setDay('')
    }

    return (
        <form className="add-from" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input 
                    type='text' 
                    placeholder="Add Task" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input 
                    type='text' 
                    placeholder="Add Day & Time" 
                    value={day} 
                    onChange={(e) => setDay(e.target.value)} />
            </div>

            <input type="submit" value="Save Task " className="btn btn-block"/>
        </form>
    )
}

export default AddTask