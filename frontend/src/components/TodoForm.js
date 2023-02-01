import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = () => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('pdb-backend-production.up.railway.app/api/create-task', {
        description,
      });

      console.log('Task created successfully!');

      // Clear the input field and reset the state
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

<label for="description" type="text"
        name="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe the task:</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Clean the bouncer..."
type="text"
name="description"
value={description}
onChange={(event) => setDescription(event.target.value)}></textarea>

      <button class="outline rounded bg-gradient-to-r from-purple-500 to-pink-500 p-2 mt-6 text-xs text-white hover:text-black" type="submit">Create Task</button>
    </form>
  );
};

export default TodoForm;
