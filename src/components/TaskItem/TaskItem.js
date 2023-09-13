import { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import Form from '../Form/Form';
import './TaskItem.css';
import { useTodos } from '../../store/useTodos';

export default function TaskItem({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(task.value);
    const editTask = useTodos((state) => state.editTask);
    const deleteTask = useTodos((state) => state.deleteTask);

    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    const onEditTask = (id) => {
        setIsEditing(false);
        editTask(id, inputValue);
    };

    const onDelete = (id) => {
        deleteTask(id);
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
