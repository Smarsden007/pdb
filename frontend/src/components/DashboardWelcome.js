import React from 'react'
import { useSelector } from 'react-redux';


export const DashboardWelcome = () => {
 
  const auth = useSelector(state => state.auth);
  console.log(auth.fullName)
  if (!auth.fullName) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {auth.fullName}!</h1>
    </div>
  );
}