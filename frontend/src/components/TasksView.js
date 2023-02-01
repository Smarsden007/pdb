import React, { useState, useEffect } from "react";
import axios from "axios";

export const TaskView = () => {
  const [tasks, setTasks] = useState(null);
  const getIncompleteTasks = async () => {
    try {
      const res = await axios.get(
        "https://pdb-backend-production.up.railway.app/api/task?completed=false"
      );
      setTasks(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };
  useEffect(() => {
    getIncompleteTasks();
  }, []);
  const updateTask = async (taskId) => {
    try {
      await axios.put(`https://pdb-backend-production.up.railway.app/api/update-task/${taskId}`, {
        completed: true,
      });
      // After the task is updated, fetch the updated list of tasks
      getIncompleteTasks();
    } catch (err) {
      console.error(err.response.data);
    }
  };
  return (
    <div class="overflow-y-scroll mt-10 h-32">
      {tasks ? (
        tasks.map((task) => (
          <div class="flex flex-row justify-between p-2" key={task.task_id}>
            <p class="p-1">{task.task_description}</p>
            <button
              class="outline rounded bg-gradient-to-r from-purple-500 to-pink-500 p-2 ml-3 mb-3 text-xs text-white hover:text-black"
              onClick={() => updateTask(task.task_id)}
            >
              Mark as Completed
            </button>
          </div>
        ))
      ) : (
        <p>Loading tasks...</p>
      )}
    </div>
  );
};
