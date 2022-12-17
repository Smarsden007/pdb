import React from 'react'

export const dashB = () => {
const [bookings, setBookings] = useState([]);

const getAllBook = async () => {
   try {
         const response = await axios.get('/api/bookings', {
             params: {
                 status: 'confirmed'
             }
         });
         console.log(response.data);
     } catch (error) {
         console.log(error);
     }
 }


 useEffect(() => {
   getAllBook().then(data => {
     setBookings(data);
   });
 }, []); 
 
 return (
    <div>dashB</div>
  )
}