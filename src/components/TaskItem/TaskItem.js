import { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import Form from '../Form/Form';
import './TaskItem.css';

export default function TaskItem({ task, tasks, setTasks }) {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    const onEditTask = (id) => {
        setIsEditing(false);
        const copy = [...tasks];
        const index = copy.findIndex((task) => task.id === id);
        copy[index] = { ...copy[index], value: inputValue };
        setTasks(copy);
    };

    const onDelete = (id) => {
        const copy = [...tasks];
        const result = copy.filter((task) => task.id !== id);
        setTasks(result);
    };

    if (isEditing) {
        return (
            <Form
                buttonValue="Update task"
                placeholder="Update task"
                inputValue={inputValue}
                onChange={onChange}
                onClick={() => {
                    onEditTask(task.id);
                }}
            />
        );
    }
    return (
        <div className="taskItem">
            {task.value}
            <div className="task_item__icons">
                <AiOutlineEdit onClick={() => setIsEditing(true)} />
                <BsTrash
                    onClick={() => {
                        onDelete(task.id);
                    }}
                />
            </div>
        </div>
    );
}
