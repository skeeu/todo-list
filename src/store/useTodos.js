import { create } from 'zustand';

export const useTodos = create((set) => ({
    tasks: [],
    addTask: (value) =>
        set((state) => {
            const newTask = { id: new Date(), value: value };
            return { tasks: [...state.tasks, newTask] };
        }),
    deleteTask: (id) =>
        set((state) => {
            return { tasks: state.tasks.filter((task) => task.id !== id) };
        }),
    editTask: (id, newValue) =>
        set((state) => {
            return {
                tasks: state.tasks.map((task) => {
                    if (task.id === id) {
                        task.value = newValue;
                    }
                    return task;
                }),
            };
        }),
}));
