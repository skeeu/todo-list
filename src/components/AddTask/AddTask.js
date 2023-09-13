import { useState } from 'react';
import Form from '../Form/Form';
import './AddTask.css';

export default function AddTask({ tasks, setTasks }) {
    const [inputValue, setInputValue] = useState('');

    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    const addTask = () => {
        const copy = [...tasks];
        copy.push({ id: new Date(), value: inputValue });
        setTasks(copy);
        setInputValue('');
    };
    return (
        <Form
            inputValue={inputValue}
            setInputValue={setInputValue}
            onChange={onChange}
            buttonValue="Add task"
            placeholder="What is the task today?"
            onClick={addTask}
        />
    );
}
