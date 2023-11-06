import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { FaEye ,FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const videoEl = useRef(null);

    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
          console.error("Error attempting to play", error);
        });
    };
    useEffect(() => {
        attemptPlay();
      }, []);

  const [registerError , setRegisterError] = useState(" ");
  const [success,setSuccess]=useState(" ");
    const [showPass,setShowPass] = useState(false);
    const {createUser} = useContext(AuthContext);
    //console.log({createUser})
    const handleRegisterbtn = () =>{
        toast('Welcome in our community');
       }
       
    
        const handleRegister = e =>{
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const pass = e.target.password.value;

if(pass.length < 6){
    setRegisterError('password should be more than 6 character');
    return;
}
else if(! /[A-Z]/.test(pass)){
  setRegisterError('password should be at least one Uppercase letter');
  return;
}
else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(pass)){
  setRegisterError('password should be at least one special character');
  return;
}

        setRegisterError(" ");
        setSuccess(" ");
           
           createUser(email , pass ,name)
           .then(result =>{
            console.log(result.user);
            setSuccess("successful")
            
          //   .then(res => res.json())
          //   .then(data =>{
          //     console.log(data)
          //   })
           })
            .catch(error =>{
             console.log(error);
            setRegisterError(error.message);
            })
           
        }

        
        return (
            <div>
                <div className="divider lg:w-[1500px] sm:w-[450px] lg:mx-[180px] sm:mx-[100px] mb-[100px]">  <h2 className="text-[#A0522D] text-[60px] font-bold ">Wisdom</h2> </div>
                <div className="lg:flex justify-between items-center ">
        
                
        <div className="lg:w-[900px] h-[1000px] sm:w-[425px]  justify-between items-center " >
       
            <p className="text-center mt-[100px] text-[30px] font-bold text-black">Register</p>
            <form onSubmit={handleRegister} className="lg:w-[500px] lg:h-[600px] lg:mx-[250px] sm:w-[400px]">

            <div className="form-control sm:ml-[100px] lg:ml-[0px]">
        <label className="label ">
          <span className="label-text text-[18px]">Name</span>
        </label>
        <input 
        type="Text" 
        placeholder="name" 
        name="name" 
        className="input input-bordered " required />
      </div>

      <div className="form-control sm:ml-[100px] lg:ml-[0px]">
        <label className="label ">
          <span className="label-text text-[18px]">Email</span>
        </label>
        <input 
        type="email" 
        placeholder="email" 
        name="email" 
        className="input input-bordered " required />
      </div>
      

      <div className="form-control  sm:ml-[100px] lg:ml-[0px]">
        <label className="label">
          <span className="label-text text-[18px]">Password</span>
        </label>

      <div className="flex">
      <input  type={showPass ? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-[500px]" required />
        <span className=" top-[20px] ml-[-30px] mt-[15px]" onClick={() => setShowPass (!showPass)}>
          {
            showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
          }
        </span>
      </div>
      </div>

      <div className="form-control mt-6 lg:w-[500px] h-[80px] sm:ml-[100px] lg:ml-[0px] sm:w-[310px]">
        <button onClick={handleRegisterbtn} className="btn bg-[#A0522D] text-white ">Submit</button>
      </div>
      {
        registerError && <p className="text-red-700 text-[18px]">{registerError}</p>
      }
      {
        success && <p className="text-green-700 text-[18px]">{success}</p>
      }
      <div className="divider sm:ml-[100px] lg:ml-[0px]">OR</div>
      <p className="text-[18px] sm:ml-[100px] lg:ml-[0px]" >Already have an account ?  <Link className="text-[blue]  underline underline-offset-4 ..." to="/login">Login</Link></p>
    
    </form>
    
        </div>

        <div className="mt-[-250px]">
        <video
  style={{ maxWidth: "100%", width: "900px",height:"600px" ,margin: "0 auto" }}
  playsInline
  loop
  muted
  controls
  alt="All the devices"
  
  src="/v2.mp4"

  ref={videoEl}
  
/>

        </div>
        <ToastContainer />
    </div>
            </div>
        );
};

export default Register;