import { useLoaderData, useParams } from "react-router-dom";
import Category from "./Category";
import Adver from "./Adver";


const Service = () => {
    const loadedUsers =useLoaderData();
   
//    const {category_name} = useParams();
//    const filter = loadedUsers.filter(p => p.category_name === category_name);
    return (
        <div >
          <Adver></Adver>
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 lg:mx-[80px] mb-[200px] ">
                {
                    loadedUsers.map(p => <Category key={p._id} p={p}></Category>)
                    
                }
            </div>
            
        </div>
    );
};

export default Service;