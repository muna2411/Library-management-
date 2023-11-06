import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Mycartstore from "./Mycartstore";


const MyCart = () => {

    const loadedUsers = useLoaderData();
    const [users,setUsers] = useState(loadedUsers);
    return (
        <div>
       
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:mx-[80px] mb-[200px] ">
                {
                    users.map(user => <Mycartstore key={user._id} user={user} users={users} setUsers={setUsers}></Mycartstore>)
                }
            </div>
        </div>
    );
};

export default MyCart;