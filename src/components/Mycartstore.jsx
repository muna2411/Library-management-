import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Mycartstore = ({user,users,setUsers}) => {
    const  {_id,name,author,category_name,image} = user;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

               console.log('confirm')
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = users.filter(p => p._id !==_id)
                            setUsers(remaining)
                          
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
                <div className="card-body mb-[-450px] hero-overlay bg-opacity-60 h-[200px] text-white">
                        <i className="card-title">Name : {name}</i>
                        <i className="card-title">Brand : {author}</i>
                        <div className="flex justify-around items-center">
                        
                        <p className="text-[#87CEEB] text-[18px]">{category_name}</p>
                        
                        </div>
                   
                </div>
                <div>
                    <Link >
                        <button  onClick={() => handleDelete(_id)} className="btn ml-[350px] mb-[550px] w-[50px] h-[50px] text-[18px]" style={{ borderRadius: "50%" , border: "1px solid black"}}>X</button>
                    </Link>
                    </div>
            </div>
        </div>
    </div>
    );
};

export default Mycartstore;