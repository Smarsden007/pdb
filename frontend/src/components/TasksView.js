import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const TaskView = () => {
  const [tasks, setTasks] = useState(null);

  const getIncompleteTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/incompleted-tasks");
      setTasks(res.data.tasks);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  useEffect(() => {
    getIncompleteTasks();
  }, []);

  const updateTask = async (taskId) => {
    try {
      await axios.patch(`http://localhost:5000/api/update-task/${taskId}`, {
        completed_at: new Date(),
      });
      // After the task is updated, fetch the updated list of tasks
      getIncompleteTasks();
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h3>Incomplete Tasks</h3>
      {tasks ? (
        tasks.map((task) => {
          if (task.completed_at) {
            return null;
          }
          return (
            <div key={task.id}>
              <p>{task.description}</p>
              <button onClick={() => updateTask(task.id)}>Mark as Completed</button>
            </div>
          );
        })
      ) : (
        <p>Loading tasks...</p>
      )}
    </div>
  );
};

