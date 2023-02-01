import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: ''
  });

  const { email, password, fullName } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        const newUser = { email, password, full_name: fullName };
        try {
          const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
          const body = JSON.stringify(newUser);
          const res = await axios.post('https://pdb-backend-production.up.railway.app/api/register', body, config);
          console.log(res.data);
        } catch (err) {
          console.error(err.response.data);
        }
      };
      
      

  return (
    <div>
        <div class='w-6/12 ml-64 -mb-20 mt-10'>
        <h3 class="text-6xl  p-1 font-extrabold text-transparent  py-2 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          User Registration
        </h3>
        </div>
    <div class='w-6/12 mt-44 bg-white dark:bg-gray-800 p-16 rounded-md ml-64'>
    <form onSubmit={e => onSubmit(e)} class='w-11/12'>
     

  <div class="relative z-0 mb-6 w-full group">
      <input type="email"
        name="email"
        value={email}
        onChange={e => onChange(e)}
        
        required 
        id='floating_email'class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
 
  <div class="relative z-0 mb-6 w-full group">
      <input type="password"
      autocomplete="off"
        name="password"
        value={password}
        onChange={e => onChange(e)}
        required id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div class="relative z-0 mb-6 w-full group">
      <input  type="text"
      autocomplete="off"
        name="fullName"
        value={fullName}
        onChange={e => onChange(e)}
        required id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
  </div>
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-purple-500 to-pink-500">Submit</button>
</form>

</div>
</div>


  );
};

export default Registration;
