import { useLoaderData } from "react-router-dom";
import Allbookadd from "./Allbookadd";


const Allbook = () => {
    const loadedUsers =useLoaderData();
   
    //const {category_name} = useParams();
   //const filter = loadedUsers.filter(p => p.category_name === category_name);
    return (
        <div >
          <button className="btn ml-[800px]">Filter The Book</button>
    
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 lg:mx-[80px] mb-[200px] ">
                {
                    loadedUsers.map(p => <Allbookadd key={p._id} p={p}></Allbookadd>)
                    
                }
            </div>
            
        </div>
    );
};

export default Allbook;