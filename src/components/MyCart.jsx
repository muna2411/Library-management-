import { useContext, useEffect, useState } from "react";
import { useLoaderData} from "react-router-dom";
import Mycartstore from "./Mycartstore";
import { AuthContext } from "./AuthProvider";


const MyCart = () => {

  

    const loadedUsers = useLoaderData();
    const [users,setUsers] = useState(loadedUsers);
    const { user } = useContext(AuthContext);
    //const [bookings, setBookings] = useState([]);



  


    const url = `http://localhost:5000/cart?email=${user?.email}`;
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    })

    return (
        <div>
  
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:mx-[80px] mb-[200px] ">
                {
                      
                    users.map(user => <Mycartstore key={user._id} user={user} users={users} setUsers={setUsers}  ></Mycartstore>)
                }
                
            </div>
        </div>
    );
};

export default MyCart;