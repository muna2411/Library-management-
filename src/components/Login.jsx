import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye ,FaEyeSlash } from 'react-icons/fa';

const Login = () => {

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
  
  const [success,setSuccess]=useState(" ");
  const [loginError, setLoginError] = useState('');

  const [showPass,setShowPass] = useState(false);
  const {signIn} = useContext(AuthContext);

  //const navigate = useNavigate();

    
        const handleSignIn = e =>{
            e.preventDefault();
            const email = e.target.email.value;
            const pass = e.target.password.value;

            signIn(email , pass)
            .then(result =>{
                console.log(result.user);
                setSuccess("successful");
            })
            // .then(res =>{
           
            //   if(res.data.success){
            //      navigate(location?.state ? location?.state : '/')
            //   }
            //  })
           
          
            .catch(error =>{
                console.error("Error signing in:", error.code, error.message);
                setLoginError('Email or password is incorrect');
            })
    
        }
        return (
         <div>
             <div className="divider lg:w-[1500px] sm:w-[450px] lg:mx-[180px] sm:mx-[100px] lg:mb-[100px] sm:mb-[300px]">  <h2 className="text-[#A0522D] text-[60px] font-bold ">Wisdom</h2> </div>
               <div className="lg:flex justify-between items-center">
                <div>
                <div className="mt-[-180px] mx-[10px]">
        <video
  style={{ maxWidth: "100%", width: "900px" ,margin: "0 auto" }}
  playsInline
  loop
  muted
  controls
  alt="All the devices"
  
  src="/v3.mp4"

  ref={videoEl}
  
/></div>

                <img className="w-[300px] h-[350px] lg:ml-[700px] mt-[-180px] sm:ml-[350px]" src="https://i.ibb.co/MhHZPK3/pexels-mark-neal-2954199.jpg"></img>
                </div>
                <div className="lg:w-[850px] h-[1000px] sm:w-[425px]  justify-between items-center" >

                    <p className="text-center mt-[100px] text-[30px] font-bold text-black">Sign In</p>
                    <form onSubmit={handleSignIn} className="lg:w-[500px] lg:h-[600px] lg:mx-[250px] sm:w-[400px]">
              <div className="form-control sm:ml-[100px] lg:ml-[0px]">
                <label className="label">
                  <span className="label-text text-[18px]">Email</span>
                </label>
                <input 
                type="email" 
                placeholder="email" 
                name="email" 
                className="input input-bordered" required />
              </div>
    
              <div className="form-control sm:ml-[100px] lg:ml-[0px]">
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
                <button className="btn bg-[#A0522D] text-white ">Login</button>
              </div>
              
              {
                success && <p className="text-green-700 text-[18px]">{success}</p>
              }
              {
                loginError && <p className="text-red-700 text-[18px]">{loginError}</p>
              }
              <div className="divider sm:ml-[100px] lg:ml-[0px]">OR</div>
              <p className="text-[18px] sm:ml-[100px] lg:ml-[0px]" >Create an Account   <Link className="text-[blue]  underline underline-offset-4 ..." to="/register">Register</Link></p>
            </form>
                </div>
                
            </div>
         </div>
        );
};
export default Login;