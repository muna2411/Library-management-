import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const Allbookadd = ({p}) => {
    const  { _id ,name,author,category_name ,ratings,image} = p;
  
    return (
    <div >
            <div className="card w-[350px] bg-base-100  my-[100px] lg:ml-[30px] sm:ml-[100px]">
            <h2 className="card-title text-[#A0522D]">{category_name} ----</h2>
               <figure><img className="w-[350px] h-[500px]" src={image} /> </figure>

                <div className="card-body">
                        <h2 className="text-[19px] text-center text-[#A0522D] font-semibold">{name}</h2>
                        <p className="text-[#808080] text-center"> {author}</p>
                        <Rating className="ml-[90px] mt-[20px]"
                  emptySymbol={<FaStar color="gray" size={20} />}
                  fullSymbol={<FaStar color="gold" size={20} />}
                  readonly
                  initialRating={ratings}
                />
                    <div className="card-actions justify-end">
                    <Link to={`/update/${_id}`}> <button className="btn">Update</button></Link>
                   
                    </div>    
                </div>
            </div>
    </div>



    );


};
export default Allbookadd;