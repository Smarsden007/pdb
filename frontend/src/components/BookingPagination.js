import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Pagination, Input, Modal } from "antd";

export const BookingsTable = () => {
  const [bookings, setBookings] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const handleSubmit = async (event) => {
    try {
      // Make a PATCH request to the server to update the booking
      await axios.patch(
        `http://localhost:5000/api/bookings/${selectedBooking.id}`,
        {
          // include the updated booking data in the request body
          fulll_name: event.target.fulll_name.value,
          paid: event.target.paid.value,

          // other updated fields go here when needed
        }
      );

      // Fetch the updated bookings data from the server
      const { data } = await axios.get(
        "http://localhost:5000/api/bookings-table",
        {
          params: {
            pageSize: limit,
            page,
            searchTerm,
          },
        }
      );

      // Update the bookings
      setBookings(data.bookings);

      // Close the modal and update the search term
      setSelectedBooking(null);
      setSearchTerm(event.target.fulll_name.value);
    } catch (err) {
      console.error(err);
      alert("An error occurred while updating the booking");
    }
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setSearchTerm("");
  };
  useEffect(() => {
    const fetchData = async () => {
      const offset = (page - 1) * limit;
      const { data } = await axios.get(
        "http://localhost:5000/api/bookings-table",
        {
          params: {
            pageSize: limit,
            page,
            searchTerm,
          },
        }
      );

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
  }, [page, limit, searchTerm, selectedBooking]);

  // don't forget to include searchTerm here

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
      title: "Full Name",
      dataIndex: "fulll_name",
      key: "fulll_name",
      render: (text) => <span style={{ fontSize: "x-small" }}>{text}</span>,
      title: <span style={{ fontSize: ".65rem" }}>Full Name</span>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (phone) => <span style={{ fontSize: "x-small" }}>{phone}</span>,
      title: <span style={{ fontSize: ".65rem" }}>Phone</span>,
    },
    {
      title: "Delivery Address",
      dataIndex: "delivery_ad",
      key: "delivery_ad",
      render: (delivery_ad) => (
        <span style={{ fontSize: "x-small" }}>{delivery_ad}</span>
      ),
      title: <span style={{ fontSize: ".65rem" }}>Address</span>,
    },
    {
      title: "Bouncer",
      dataIndex: "bouncer",
      key: "bouncer",
      render: (bouncer) => (
        <span style={{ fontSize: "x-small" }}>{bouncer}</span>
      ),
      style: { fontSize: "x-small" },
      title: <span style={{ fontSize: ".65rem" }}>Bouncer</span>,
    },
    {
      title: "Rent Date",
      dataIndex: "rent_date",
      key: "rent_date",
      render: (rent_date) => (
        <span style={{ fontSize: "x-small" }}>{rent_date}</span>
      ),
      title: <span style={{ fontSize: ".65rem" }}>Date</span>,
    },
    {
      title: "Rental Time",
      dataIndex: "rental_time",
      key: "rental_time",
      render: (rental_time) => (
        <span style={{ fontSize: "x-small" }}>{rental_time}</span>
      ),
      title: (
        <span style={{ whiteSpace: "nowrap", fontSize: ".65rem" }}>
          Start Time
        </span>
      ),
    },
    {
      title: "Generator",
      dataIndex: "generator",
      key: "generator",
      render: (generator) => (
        <span style={{ fontSize: "x-small" }}>{generator}</span>
      ),
      title: <span style={{ fontSize: ".65rem" }}>Generator</span>,
    },
    {
      title: "Balloons",
      dataIndex: "balloons",
      key: "balloons",
      render: (balloons) => (
        <span style={{ fontSize: "x-small" }}>{balloons}</span>
      ),
      title: <span style={{ fontSize: ".65rem" }}>Balloons</span>,
    },
    {
      title: "Half Arch",
      dataIndex: "half_arch",
      key: "half_arch",
      render: (half_arch) => (
        <span style={{ fontSize: "x-small" }}>{half_arch}</span>
      ),
      title: <span style={{ fontSize: ".65rem" }}>Full Arch</span>,
    },
    {
      title: "Full Arch",
      dataIndex: "full_arch",
      key: "full_arch",
      render: (full_arch) => (
        <span style={{ fontSize: "x-small" }}>{full_arch}</span>
      ),
      title: <span style={{ fontSize: ".65rem" }}>Full Arch</span>,
    },

    {
      title: "Vinyl",
      dataIndex: "vinyl",
      key: "vinyl",
      render: (vinyl) =>
        vinyl ? (
          <span style={{ fontSize: "x-small" }}>Yes</span>
        ) : (
          <span style={{ fontSize: "x-small" }}>No</span>
        ),
      title: <span style={{ fontSize: ".65rem" }}>Vinyl</span>,
    },

    {
      title: "Paid",
      dataIndex: "paid",
      key: "paid",
      render: (paid) =>
        paid ? (
          <span style={{ fontSize: "x-small" }}>Yes</span>
        ) : (
          <span style={{ fontSize: "x-small" }}>No</span>
        ),
      title: <span style={{ fontSize: ".65rem" }}>Paid</span>,
    },
  ];
  const EditBookingModal = () => {
    return (
      <Modal
        visible={selectedBooking !== null}
        onCancel={() => setSelectedBooking(null)}
        footer={null}
        width={600}
        
      >
        <h2 class="text-lg m-2">Edit Booking</h2>
        <form onSubmit={handleSubmit}>
          <div class=" m-2">
            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-black" htmlFor="fulll_name" class="">
              Full Name
            </label>
            <input
              type="text"
              class="block p-4 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-black"              id="fulll_name"
              defaultValue={selectedBooking ? selectedBooking.fulll_name : ""}
            />
            <label htmlFor="paid" for="" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 t">
              Paid
            </label>
            <input
              type="text"
              class="block p-4 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-black"              id="paid"
              defaultValue={selectedBooking ? selectedBooking.paid : ""}
            />
          </div>
          {/* other form fields go here */}
          <button type="submit" class="block my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-purple-500 to-pink-500">
            Save
          </button>
        </form>
      </Modal>
    );
  };
  return (
    <div class="p-4 m-0 relative drop-shadow-xl  sm:rounded-lg">
      <div class="w-2/5 mb-5">
        <Input.Search
          placeholder="Search by full name or email"
          onChange={handleInputChange}
          onSearch={handleSearch}
          style={{ color: "red" }}
        />
      </div>
      <div class="">
        <div style={{ fontSize: "x-small" }}>
          <Table
            columns={columns}
            dataSource={bookings}
            pagination={false}
            rowKey="id"
            scroll={{ y: 340 }}
            onRow={(record) => {
              return {
                onClick: () => {
                  showModal();
                  setSelectedBooking(record);
                },
              };
            }}
          />
        </div>
        <div class="ml-96 p-4">
          <Pagination
            current={page}
            onChange={handleChange}
            total={total}
            pageSize={limit}
            showSizeChanger={false}
          />
          {selectedBooking && <EditBookingModal />}
        </div>
      </div>
    </div>
  );
};
