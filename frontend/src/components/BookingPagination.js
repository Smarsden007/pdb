import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Pagination } from 'antd';

export const BookingsTable = () => {
const [bookings, setBookings] = useState([]);
const [total, setTotal] = useState(0);
const [page, setPage] = useState(1);
const [limit, setLimit] = useState(5);

useEffect(() => {
    const fetchData = async () => {
      const offset = (page - 1) * limit; // calculate the offset based on the current page and limit
      const { data } = await axios.get('http://localhost:5000/api/bookings-table', {
        params: {
          pageSize: limit, // update the page size parameter here
          page, // update the page parameter here
        },
      });
      setBookings(data.bookings);
      setTotal(data.count);
    };
    fetchData();
  }, [page, limit]);
  
// handle pagination change
const handleChange = (newPage) => {
    setPage(newPage);
  };
  

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'fulll_name', // update the column name here
      key: 'fulll_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Paid',
      dataIndex: 'paid',
      key: 'paid',
      render: (paid) => (paid ? 'Yes' : 'No'),
    },
    ];
    

return (
<div class='p-10 m-5'>
<Table
     columns={columns}
     dataSource={bookings}
     pagination={false}
     rowKey="id"
   />
<Pagination
     current={page}
     onChange={handleChange}
     total={total}
     pageSize={limit}
     showSizeChanger={false}
   />
</div>
);
};