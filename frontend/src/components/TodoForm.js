import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = () => {
  const [description, setDescription] = useState('');
  const [postedBy, setPostedBy] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/tasks', {
        description,
        postedBy,
      });

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </label>
      <br />
      <label>
        Posted By:
        <input
          type="text"
          value={postedBy}
          onChange={event => setPostedBy(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
