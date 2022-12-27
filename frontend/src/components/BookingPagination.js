import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Pagination, Input } from 'antd';

export const BookingsTable = () => {
  const [bookings, setBookings] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const offset = (page - 1) * limit;
      const { data } = await axios.get('http://localhost:5000/api/bookings-table', {
        params: {
          pageSize: limit,
          page,
          searchTerm,
        },
      });
    
      // Filter the bookings based on the search term
      const filteredBookings = data.bookings.filter((booking) => {
        return (
          booking.fulll_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          booking.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    
      setBookings(filteredBookings);
      setTotal(data.count);
    };
    
    fetchData();
  }, [page, limit, searchTerm]); // don't forget to include searchTerm here

  // handle pagination change
  const handleChange = (newPage) => {
    setPage(newPage);
  };

  // handle search input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // handle search button click
  const handleSearch = () => {
    // reset the page to 1 when searching
    setPage(1);
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
      render: (paid) =>
      (paid ? 'Yes' : 'No'),
    },
    ];
    
    return (
    <div class='p-10 m-5'>
    <Input.Search
    placeholder="Search by full name or email"
    onChange={handleInputChange}
    onSearch={handleSearch}
    />
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