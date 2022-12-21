import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoForm = () => {
  const [description, setDescription] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    async function fetchEmployeeData() {
      const res = await axios.get("http://localhost:5000/api/employees");
      console.log(res.data)
      setEmployeeData(res.data);
    }
    fetchEmployeeData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/tasks", {
        description,
        postedBy,
      });
      console.log(res)
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setPostedBy(event.target.value);
  };

  return (
    <form className='p-5' onSubmit={handleSubmit}>
      <label className='text-white'>
        Description:
        <input
          type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br />
      <label className='text-white'>
        Posted By:
        {employeeData && (
          <select
          type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={postedBy}
            onChange={handleChange}
          >
            {employeeData.map((employee) => (
              <option key={employee.id} value={employee.id}>{employee.name}</option>
            ))}
          </select>
        )}
      </label>
      <br />
      <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-purple-500 to-pink-500" type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
