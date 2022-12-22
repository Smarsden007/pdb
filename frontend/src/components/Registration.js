import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
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
    const newUser = { email, password, fullName };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify(newUser);
      const res = await axios.post('/api/users', body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={e => onSubmit(e)}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => onChange(e)}
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => onChange(e)}
        required
      />
      <input
        type="text"
        name="fullName"
        value={fullName}
        onChange={e => onChange(e)}
        required
      />
      <input type="submit" value="Register" />
    </form>
  );
};

export default Register;
