
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Mycartstore = ({booking, bookings , setBookings}) => {

    const  {_id,name,author,category_name,image ,returndate,quantity} = booking;

   
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {

               console.log('confirm')
                fetch(`https://library-management-server-j91bqh6ya-munas-projects.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Returned!',
                                'Your book has been returned.',
                                'success'
                            )
                            const remaining =  bookings.filter(p => p._id !==_id)
                            setBookings(remaining)
                          
                        }
                    })

            }
        })
    }

    return (
        <div >
        <div >
            <div className="card w-[450px] bg-base-100 shadow-xl my-[100px] lg:ml-[50px] sm:ml-[100px] hero  ">
               <figure><img className="w-[450px] h-[650px]" src={image} alt="Shoes" /></figure>
                <div className="card-body mb-[-450px] hero-overlay bg-opacity-80 h-[200px] text-white">
                        <i className="card-title">{name}</i>
                        <i className="card-title">{author}</i>
                        <div className="flex justify-around items-center">
                        
                        <p className="text-[#cc915c] text-[18px]">{category_name}</p>
                        <p className="text-white text-[20px] font-semibold">Quantity : {quantity}</p>
                        <p className="text-white text-[18px]">Return Date : {returndate}</p>
                        
                        
                        </div>
                        <div>
                      
                    <Link >
                    <button  onClick={() => handleDelete(_id)} className="btn w-[380px] h-[50px] text-[18px] bg-[#cc915c] text-white border-none" >Return Book</button>
                        
                    </Link>
                    </div>
                   
                </div>
                {/* <div>
                    <Link >
                        <button  onClick={() => handleDelete(_id)} className="btn   w-[350px] h-[50px] text-[18px]" >Return Book</button>
                    </Link>
                    </div> */}
            </div>
        </div>
    </div>
    );
};

export default Mycartstore;