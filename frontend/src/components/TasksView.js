import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const TaskView = () => {
  const [tasks, setTasks] = useState(null);

  const getIncompleteTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/task?completed=false");
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
      await axios.put(`http://localhost:5000/api/update-task/${taskId}`, {
        completed: true
      });
      
      // After the task is updated, fetch the updated list of tasks
      getIncompleteTasks();
    } catch (err) {
      console.error(err.response.data);
    }
  };
  
  return (
    <div>
      {tasks ? (
        tasks.map((task) => (
          
          <div class='flex flex-row' key={task.task_id}>
            <p class='p-1'>{task.task_description}</p>
            <button class='outline rounded p-2 ml-3 mb-3' onClick={() => updateTask(task.task_id)}>Mark as Completed</button>
          </div>
         
        ))
      ) : (
        <p>Loading tasks...</p>
      )}
    </div>
  );
      }  




