import axios from 'axios';

import { useState, useEffect } from "react";
export const useFetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/api/bookings');
      setData(result.data);
    };

    fetchData();
  }, []);

  return data;
}
