
import Swal from 'sweetalert2'

import { FaStar } from "react-icons/fa"
import Rating from 'react-rating';
import { useState } from 'react';

const AddBook = () => {
  const [ratings, setRatings] = useState(0);
  
  const handleAddBook = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const author = form.author.value;
    const quantity= form.quantity.value;
    const category_name = form.category_name.value;
    const description = form.description.value;
    const ratings = form.ratings.value;
    const image = form.image.value;

    const user = {name,author,quantity,category_name ,description,ratings,image};
    console.log(user);
  
    fetch('https://library-management-server-6mvnu6sz2-munas-projects.vercel.app/book',{
      method: 'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Done!',
          text: 'Information added successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
      form.reset();
    });
}

    return (
        <div>
   <div className="hero min-h-screen lg:w-full sm:w-[630px] " style={{backgroundImage: 'url(https://i.ibb.co/WWwmK4M/add.jpg)'}}>
  <div className="hero-overlay bg-opacity-30 "></div>
  <div >
    <div >
    <form onSubmit={handleAddBook} className="grid lg:grid-cols-3 sm:grid-cols-1 lg:m-[50px] sm:m-[10px]">
              <div className="form-control m-[50px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-white font-semibold">Name</span>
                </label>
                <input type="text" placeholder="Type name" name="name" className="input input-bordered " style={{ border: "3px solid black" }} required />
              </div>

              <div className="form-control m-[50px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-white font-semibold">Author Name</span>
                </label>
                <input type="text" placeholder="Type Author name" name="author" className="input input-bordered"  style={{ border: "3px solid black" }} required />
              </div>

              <div className="form-control m-[50px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-white font-semibold">Quantity of the Book</span>
                </label>
                <input type="text" placeholder="Type quantity" name="quantity" className="input input-bordered" style={{ border: "3px solid black" }} required />
              </div> 

              <div className="form-control m-[50px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-white font-semibold">Category</span>
                </label>
              <select type="text" name="category_name" className="select select-bordered w-full ">
                       <option disabled selected>Select Category</option>
                       <option>History</option>
                       <option>Thriller</option>
                       <option>Novel</option>
                       <option>Sci-fi</option>
              </select>
              </div>

              <div className="form-control m-[50px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-white font-semibold">Short Description</span>
                </label>
                <input type="text" placeholder="Type description" name="description" className="input input-bordered" style={{ border: "3px solid black" }} required />
              </div>

              <div className="form-control m-[50px]">
                <label className="label">
                  <span className="label-text text-[20px] text-white font-semibold">Ratings</span>
                </label>
                <Rating
                  emptySymbol={<FaStar color="gray" size={30} />}
                  fullSymbol={<FaStar color="gold" size={30} />}
                  initialRating={ratings}
                  onChange={(value) => setRatings(value)} 
                />
                <input type="hidden" name="ratings" value={ratings} />
              </div>

              <div className="form-control m-[50px] lg:w-[1000px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-white font-semibold">Image</span>
                </label>
                <input type="text" placeholder="Import Image" name="image" className="input input-bordered" style={{ border: "3px solid black" }} required />
              </div>

              <input type="submit" value="Add Book" className="btn bg-[#A0522D] text-white form-control lg:mt-[300px] sm:mt-[50px] w-[150px] h-[60px]  ml-[200px]"  style={{ border: "3px solid white" }}/>
             
        </form> 
        <img className='lg:ml-[1200px] lg:mt-[-450px] sm:ml-[200px] sm:mt-[-100px]' src='https://i.ibb.co/rG3KrNm/1.png'></img>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddBook;