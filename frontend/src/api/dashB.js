import axios from 'axios';

import { useState, useEffect } from "react";
export const useFetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://pdb-backend-production.up.railway.app/api/bookings');
      setData(result.data);
    };

    fetchData();
  }, []);

  return data;
}
