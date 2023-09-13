import { useState } from 'react';
import Form from '../Form/Form';
import './AddTask.css';
import { useTodos } from '../../store/useTodos';

export default function AddTask() {
    const addTask = useTodos((state) => state.addTask);
    const [inputValue, setInputValue] = useState('');

    const onChange = (e) => {
        setInputValue(e.target.value);
    };

    const add = () => {
        addTask(inputValue);
        setInputValue('');
    };
    return (
        <Form
            inputValue={inputValue}
            setInputValue={setInputValue}
            onChange={onChange}
            buttonValue="Add task"
            placeholder="What is the task today?"
            onClick={add}
        />
    );
}
