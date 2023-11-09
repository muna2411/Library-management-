
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
 
    const user = useLoaderData();
    const { _id, name, author, category_name,  image ,ratings } = user;
    
    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const author = form.author.value;
       const category_name = form.category_name.value;
        const image = form.image.value;
        const ratings = form.ratings.value;

        const updated = { _id, name,category_name, author,  image, ratings }

        console.log(updated);

  
        fetch(`https://library-management-server-6mvnu6sz2-munas-projects.vercel.app/book/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Data Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
                form.reset();
            })
    }
    return (
        <div>

<div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/R32w9sV/bg.jpg)'}}>
    <div className="hero-overlay"></div>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">

    <div className="card w-96 h-[530px] bg-base-100 shadow-xl ml-[50px]">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/FJTbKq5/x4.jpg" className="rounded-xl" />
  </figure>
</div>

    </div>
    <div className="card flex-shrink-0 w-[800px]  shadow-2xl bg-base-100">
      <form onSubmit={handleUpdateProduct} className="card-body grid lg:grid-cols-2 sm:grid-cols-1 m-[50px]">

      <div className="form-control ">
                     <label className="label">
                       <span className="label-text text-[20px] text-[#A0522D] font-semibold">Book Name</span>
                     </label>
                     <input type="text" placeholder="Type name" name="name" defaultValue={name} className="input input-bordered "  required />
        </div>

        <div className="form-control ">
                     <label className="label">
                       <span className="label-text text-[20px] text-[#A0522D] font-semibold">Author Name</span>
                     </label>
                     <input type="text" placeholder="Type Brand name" name="author" defaultValue={author} className="input input-bordered"   required />
                   </div>

          <div className="form-control ">
                <label className="label">
                  <span className="label-text text-[20px] text-[#A0522D] font-semibold">Category</span>
                </label>
                <select type="text" name="category_name" defaultValue={category_name} className="select select-bordered w-full">
  <option disabled selected>Select Category</option>
  <option>History</option>
  <option>Thriller</option>
  <option>Novel</option>
  <option>Sci-fi</option>
</select>

              </div>

        <div className="form-control ">
                <label className="label">
                  <span className="label-text text-[20px] text-[#A0522D]font-semibold">Ratings</span>
                </label>
                <Rating
                  emptySymbol={<FaStar color="gray" size={30} />}
                  fullSymbol={<FaStar color="gold" size={30} />}
                  initialRating={ratings}
                 
                />
                <input type="hidden" name="ratings"  defaultValue={ratings}/>
              </div>


        <div className="form-control ">
                     <label className="label">
                       <span className="label-text text-[20px] text-[#A0522D]font-semibold">Image</span>
                     </label>
                     <input type="text" placeholder="Import Image" name="image" defaultValue={image} className="input input-bordered"  required />
        </div>

      
        <div className="form-control mt-6">
        <input type="submit" value="Submit" className="btn bg-[#A0522D] text-white form-control mt-[100px] w-[200px] h-[60px]  ml-[50px]"  />
               
        </div>
      </form>
    </div>
  </div>
</div>
             </div>
         );
     };

export default Update;