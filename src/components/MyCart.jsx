import {   useContext, useEffect, useState } from "react";

import Mycartstore from "./Mycartstore";
import { AuthContext } from "./AuthProvider";




const MyCart = () => {


    const [bookings , setBookings] = useState([]);
    const { user } = useContext(AuthContext);
        
    const url = `https://library-management-server-gdm2ylebz-munas-projects.vercel.app/cart?email=${user?.email}`;
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    })
    

    return (
        <div>

             <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:mx-[80px] mb-[200px] ">
             {/* <p className="text-center"> {bookings.length}</p> */}
                {

                    bookings.map(booking => <Mycartstore key={booking._id} booking={booking} bookings={bookings} setBookings={setBookings}></Mycartstore>)
                }
                
            </div>
        </div>
    );
};

export default MyCart;