import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, unstable_HistoryRouter, useLoaderData, useParams } from "react-router-dom";


const Dead = () => {

const loadedUsers =useLoaderData();
const {_id} = useParams();
const [cardDetails, setCardDetails] = useState(loadedUsers);
const [returndate, setReturnDate] = useState(""); 
//const history = unstable_HistoryRouter();


    useEffect(() => {
        fetch(`/book/${_id}`)
          .then((response) => response.json())
          .then((data) => setCardDetails(data));
      }, [_id]);
      

      const handlecheckout = (event)=>{
        event.preventDefault();
      const name =cardDetails.name;
      const category_name =cardDetails.category_name;
      const image =cardDetails.image;
      const author =cardDetails.author;
      const ratings =cardDetails.ratings;
      const returndate = cardDetails.returndate;
        
      const cart = {name,category_name,image,ratings,author,returndate};
        
      //console.log(cart)
   

      fetch('http://localhost:5000/cart' ,{
              method: 'POST',
              headers:{
                'content-type' : 'application/json'
              },
              body:JSON.stringify(cart)
            })
            .then(res => res.json())
            .then(data =>{
              console.log(data)
             // history.push("/mycart");
            })
            }    


          //   const handleFormSubmit = event =>{
          //     event.preventDefault();
          //     const form = event.target;
          //     const returndate = form.returndate.value;
          
          //     const user = {returndate};
          //     console.log(user);
          //     window.location.href = `/mycart?returndate=${returndate}`;
            
          //     fetch('http://localhost:5000/cart',{
          //       method: 'POST',
          //       headers:{
          //         'content-type' : 'application/json'
          //       },
          //       body:JSON.stringify(user)
          //     })
          //     .then(res => res.json())
          //     .then(data => {
          //       console.log(data);
                
          //       form.reset();
          //     });
          // }


          
    return (
        <div>
        <div className="flex justify-around items-center">
        
        <div className=" justify-around items-center my-[30px]" >
                <div>
                    <img className="h-[550px] w-[400px] lg:ml-[200px] sm:ml-[50px] mt-[30px]" style={{ border: "2px solid black" }} src={cardDetails.image}></img>
                </div>
                <div className="card shadow-xl px-[30px]  lg:w-[600px] sm:h-[800px] sm:w-[500px] ml-[100px] mt-[-120px]">
                    <div className="mt-[100px]">
                    <p className=" text-[45px] font-bold my-[10px] text-[#A0522D] text-center" >{cardDetails.name}</p>
                      <p className=" text-[25px] text-[#808080] my-[10px] text-center">{cardDetails.author}</p>
                      <p className=" text-[18px]  my-[10px] text-center">{cardDetails.description}</p>
                      <p className="text-[18px] my-[10px] text-center">{cardDetails.returndate}</p>

                      <Rating className="ml-[220px] mt-[20px]"
                  emptySymbol={<FaStar color="gray" size={20} />}
                  fullSymbol={<FaStar color="gold" size={20} />}
                  readonly
                  initialRating={cardDetails.ratings}
                />
                    <div className="lg:flex justify-between items-center mt-[50px] mx-[150px] mb-[50px]">
                   
  
                    <button className="btn bg-[#A0522D] text-white" onClick={() => { 
  console.log("Button clicked");
 //handlecheckout(); 
  document.getElementById('my_modal_5').showModal();
}}>Borrow</button>



<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
   <img className="w-[250px] h-[250px] ml-[100px]" src="https://i.ibb.co/dbPg8qS/hi.png"></img>

   <form >
  <div className="form-control m-[50px]">
    <label className="label">
      <span className="label-text text-[20px] text-[#A0522D] font-semibold">Return Date</span>
    </label>
    <input
            type="date"
            name="returndate"
            className="input input-bordered"
            style={{ border: "3px solid black" }}
            required
            value={returndate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
  </div>

  <div className="modal-action">
    <Link to="/mycart">
  <button onClick={handlecheckout} type="submit" className="btn">Submit</button>
</Link>
  </div>
</form>


    
  </div>
</dialog>
                <button  className="btn" style={{ border: "3px solid black" }}>Read</button>
                    </div>
                </div>
                </div>
        
        
              </div>
              <div>
                <img className="h-[1200px] w-[500px]" src="https://i.ibb.co/Hzmd1Nj/x3.jpg" ></img>
              </div>
                </div>
                </div>
    );
};

export default Dead;