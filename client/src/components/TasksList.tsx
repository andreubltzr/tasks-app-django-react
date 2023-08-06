import { useEffect, useState } from 'react';
import { getAllTasks } from '../api/tasks.api';
import { TaskCard } from './TaskCard';

export const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const res = await getAllTasks();
      setTasks(res.data);
    };
    loadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task, i) => (
        <div key={i}>
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
};
