import { useTodos } from '../../store/useTodos';
import TaskItem from '../TaskItem/TaskItem';

export default function TaskList() {
    const tasks = useTodos((state) => state.tasks);
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
                    />
                );
            })}
        </div>
    );
}
