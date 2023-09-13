import TaskItem from '../TaskItem/TaskItem';

export default function TaskList({ tasks, setTasks }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBlock: '22px',
            }}
        >
            {tasks.map((task) => {
                return (
                    <TaskItem
                        key={task.id}
                        task={task}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                );
            })}
        </div>
    );
}
