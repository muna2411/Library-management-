import { useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import Mycartstore from "./Mycartstore";


const MyCart = () => {

    const loadedUsers = useLoaderData();
    const [users,setUsers] = useState(loadedUsers);


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const returndate = searchParams.get("returndate");

    return (
        <div>
     
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:mx-[80px] mb-[200px] ">
                {
                    users.map(user => <Mycartstore key={user._id} user={user} users={users} setUsers={setUsers}  returndate={returndate}></Mycartstore>)
                }
            </div>
        </div>
    );
};

export default MyCart;