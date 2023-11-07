import {  useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link,  useLoaderData, useParams } from "react-router-dom";


const Dead = () => {

const loadedUsers =useLoaderData();
const {_id} = useParams();
const [cardDetails, setCardDetails] = useState(loadedUsers);

const [returnDate, setReturnDate] = useState("");

const [quantity,setQuantity] =useState(0);

const [remainingQuantity, setRemainingQuantity] = useState(0);


// useEffect(() =>{
//   if (cardDetails.quantity) {
//     setQuantity(cardDetails.quantity);
//   }
// }, [cardDetails.quantity]);

//quantity
useEffect(() => {
  
  const remaining = cardDetails.quantity - quantity;
  setRemainingQuantity(remaining);
}, [cardDetails, quantity]);


//return date
useEffect(() => {
  fetch(`/cart/${_id}`)
    .then((response) => response.json())
    .then((data) => {
      setReturnDate(data.returndate);
    });
}, []);


// const updateReturnDate = () => {
//   const updatedCart = { ...cart, returndate: returnDate };

//   fetch(`/cart/${cartId}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedCart),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       setCart(data);
//     });
// };



    useEffect(() => {
        fetch(`/book/${_id}`)
          .then((response) => response.json())
          .then((data) => setCardDetails(data));
      }, [_id]);
      

      const handleDecrement = () =>{
        if(quantity > 0){
          setQuantity(prevCount =>prevCount -1);
        }
      }

      const handleIncrement = () =>{
       if(quantity <5){
        setQuantity(prevCount =>prevCount +1);
       }
      }


  const handlecheckout = (event)=>{
      event.preventDefault();
      
      const name =cardDetails.name;
      const category_name =cardDetails.category_name;
      const image =cardDetails.image;
      const author =cardDetails.author;
      const ratings =cardDetails.ratings;
      const selectedQuantity = quantity;
      const selectedReturndate = returnDate;

      const cart = {name,category_name,image,ratings,author , returnDate:selectedReturndate ,quantity : selectedQuantity};
      console.log(cart)

      const remaining = cardDetails.quantity - selectedQuantity;
      setRemainingQuantity(remaining);

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

            })


            const modal = document.getElementById('my_modal_5');
            modal.close();
            window.location.href = '/mycart';
            }    
       

          
    return (
        <div>
        <div className="flex justify-around items-center">
        
        <div className=" justify-around items-center my-[30px]" >
                <div>
                    <img className="h-[550px] w-[400px] lg:ml-[200px] sm:ml-[50px] " style={{ border: "2px solid black" }} src={cardDetails.image}></img>
                </div>
                <div className="card shadow-xl px-[30px]  lg:w-[600px] sm:h-[800px] sm:w-[500px] ml-[100px] mt-[-120px]">
                    <div className="mt-[100px]">
                    <p className=" text-[45px] font-bold my-[10px] text-[#A0522D] text-center" >{cardDetails.name}</p>
                      <p className=" text-[25px] text-[#808080] my-[10px] text-center">{cardDetails.author}</p>
                      <p className=" text-[18px]  my-[10px] text-center">{cardDetails.description}</p>
                
                      <Rating className="ml-[220px] mt-[20px]"
                  emptySymbol={<FaStar color="gray" size={20} />}
                  fullSymbol={<FaStar color="gold" size={20} />}
                  readonly
                  initialRating={cardDetails.ratings}
                />


              <div className="input-group ml-[150px] mt-[20px] "  >
                   <button type="button" onClick={handleDecrement} className="btn input-group-text text-[25px]"  style={{ border: "2px solid black" }}>-</button>
                        <div className="form-control text-center w-[150px] text-[25px]"  style={{ border: "2px solid black" }}>{quantity}</div>
                   <button type="button" onClick={handleIncrement} className="btn input-group-text text-[25px]"  style={{ border: "2px solid black" }}>+</button>
              </div>



              <p className="text-[20px] text-[#808080] my-[10px] text-center">
              Remaining: {remainingQuantity} books
            </p>
                    <div className="lg:flex justify-between items-center mt-[10px] mx-[150px] mb-[50px]">
                   
  
                    <div>
                    <button
  className="btn bg-[#A0522D] text-white"
  onClick={() => {
    if (quantity > 0) {
      document.getElementById('my_modal_5').showModal();
    }
  }}
  disabled={quantity === 0}
>
  Borrow
</button>
            
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
   <img className="w-[250px] h-[250px] ml-[100px]" src="https://i.ibb.co/dbPg8qS/hi.png"></img>

   <form onSubmit={handlecheckout}>


   <div className="form-control m-[50px]">
      <label className="label">
          <span className="label-text text-[20px] text-white font-semibold">Return Date</span>
      </label>
      <input
  type="date"
  name="returnDate"
  className="input input-bordered "
  value={returnDate}
  onChange={(e) => setReturnDate(e.target.value)}
  placeholder="Return Date"
  style={{ border: "3px solid black" }}
  required
/>

   </div>

  <div className="modal-action">
     <Link to={`/mycart`}> 
      <input onClick={ handlecheckout} type="submit" value="Submit" className="btn"/>
    </Link> 
  </div>
</form>


  </div>
</dialog>
                    </div>
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