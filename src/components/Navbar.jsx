import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import auth from "../firebase.init";

const Navbar = () => {
    const provider = new GoogleAuthProvider();
     const handleButton = () =>{
          signInWithPopup(auth,provider)
          .then(result => {
               console.log(result.user);
              
          })
          .catch(error => {
              console.log('error',error.message)
          })
      }

     const {user, logOut} =useContext(AuthContext);
   const handleSignOut = () =>{
      logOut()
      .then()
      .catch()
   }

    return (
       
<div className="lg:flex justify-between items-center mx-[20px] mt-[-50px] sm:flex-col-1">
    <div className="lg:flex  items-center justify-center sm:flex-col-1">
       <div className="flex justify-around items-center">
       <img className="w-[150px] h-[240px] " src="https://i.ibb.co/bgGpjTM/final.jpg"></img>
        
        <i className="text-[#A0522D] text-[50px] font-bold ">Wisdom</i>
       </div>
      
        <nav className="text-[#513a24] text-[20px]  font-semibold ml-[100px]">
            <NavLink  className ="mr-[20px] " to="/">Home</NavLink>
            <NavLink  className ="mr-[20px]" to="/addbook">Add Book</NavLink>
            <NavLink  className ="mr-[20px]" to="/allbook">All Book</NavLink>
            <NavLink  className ="mr-[20px]" to="/mycart">Borrowed Book</NavLink>
            <NavLink  className ="mr-[20px]" to="/login">Login</NavLink>
        </nav>
    </div>
    <div>
            <div className="flex">

{
 user && <div className="flex justify-center items-center mx-[10px] ml-[200px] ">
            <div> <img className="w-[60px] h-[60px] mx-[10px]"style={{ borderRadius: "50%"}} src={user.photoURL}></img> </div>
            <div> <p className="text-[18px] text-black">{user.displayName}</p></div>
          </div>
 }

{
       user ? 
       <button onClick={handleSignOut} className="btn " style={{ border: "3px solid black" }}>Sign Out</button> :
       <Link to="/login"><button onClick={handleButton} className="btn ml-[350px] bg-[#cc915c] text-white" >Sign in with Google</button></Link>
        
}
     
</div>

</div>
    
</div>

    );
};

export default Navbar;