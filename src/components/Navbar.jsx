import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
       
<div className="flex justify-between items-center mx-[20px] mt-[-50px]">
    <div className="flex  items-center justify-center">
        <img className="w-[150px] h-[240px] " src="https://i.ibb.co/bgGpjTM/final.jpg"></img>
        
        <i className="text-[#A0522D] text-[50px] font-bold ">Wisdom</i>
      
        <nav className="text-[#513a24] text-[20px]  font-semibold ml-[100px]">
            <NavLink  className ="mr-[20px] " to="/">Home</NavLink>
            <NavLink  className ="mr-[20px]" to="/addbook">Add Book</NavLink>
            <NavLink  className ="mr-[20px]" to="/allbook">All Book</NavLink>
            <NavLink  className ="mr-[20px]" to="/borrowedbook">Borrowed Book</NavLink>
            <NavLink  className ="mr-[20px]" to="/login">Login</NavLink>
        </nav>
    </div>
    <div>
    <Link to="/login"><button  className="btn ml-[350px] bg-[#cc915c] text-white " >Sign in with Google</button></Link>
    </div>
    
</div>

    );
};

export default Navbar;