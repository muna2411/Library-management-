import { Link } from "react-router-dom";
import Rating from 'react-rating'; 
import { FaStar } from "react-icons/fa";

const Category = ({p}) => {

//     const  {_id,name,author,category_name ,ratings,image} = p;
  
//     return (
//     <div >
//             <div className="card w-[350px] bg-base-100  my-[100px] lg:ml-[30px] sm:ml-[100px]">

//                <figure><img className="w-[350px] h-[500px]" src={image} /> </figure>

//                 <div className="card-body">
//                         <h2 className="text-[19px] text-center text-[#A0522D] font-semibold">{name}</h2>
//                         <h2 className="card-title text-[#A0522D]">{category_name} ----</h2>
//                         <p className="text-[#808080] text-center"> {author}</p>
//                         <Rating className="ml-[90px] mt-[20px]"
//                   emptySymbol={<FaStar color="gray" size={20} />}
//                   fullSymbol={<FaStar color="gold" size={20} />}
//                   readonly
//                   initialRating={ratings}
//                 />
//                     <div className="card-actions justify-end">
//                     <Link to={`/book/${_id}`}>Detail</Link>
                   
//                     </div>    
                    
                 

//                 </div>
//             </div>
//     </div>
//     );


// };


const  {_id,name,author,category_name ,ratings,image} = p;
    return (
    <div >
        <div >
            <div className="card w-[450px] bg-base-100 shadow-xl my-[100px] lg:ml-[30px] sm:ml-[100px]">
               <figure><img className="w-[450px] h-[650px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                        <h2 className="card-title">Name : {name}</h2>
                        <h2 className="card-title">Brand : {author}</h2>
                        <div className="flex justify-around items-center">
                        <p> Types :{category_name}</p>
                       
                        <p>Rating :{ratings}</p>
                        </div>
                    <div className="card-actions flex justify-around items-center">
                    <Link to={`/book/${_id}`}>
                        <button className="btn ">Details</button>
                    </Link>
                    <Link to={`/update/${_id}`}>
                        <button className="btn ">Update</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Category;