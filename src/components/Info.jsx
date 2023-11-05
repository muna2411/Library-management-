import  { useEffect, useRef } from "react";

const Info = () => {

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
    return (
        
<div>

<div className="App">
      <div>
        <div className="text-center my-[150px] ">
        <div className="divider">  <h2 className="text-[#A0522D]  text-[60px] font-bold ">Wisdom</h2> </div>
        <div className="my-[20px] mt-[20px]"><h2 className="text-[20px] text-[#808080] ">The Knowledge House..</h2></div>
        <div className="mb-[200px]">
        <p className="text-[18px] text-black ">A library is a treasure trove of human knowledge, offering access to a world of information and stories.<br/>
        Libraries are quiet havens for exploration and introspection, where the pages of books whisper the wisdom of generations.</p>
        </div>
        </div>
  <div className="flex justify-around items-center mx-[100px]">
  <div className="mx-[100px] ">
<div className="mt-[20px]">
<p className="text-[#A0522D]  text-[25px] font-bold ">Knowledge & Learning</p>
<div className="divider w-[400px] h-[2px] bg-[#cc915c]"></div>
<p className="text-[16px] text-black ">Reading books is a primary source of knowledge and learning. Books cover a wide range of subjects and allow individuals to explore new ideas,
 cultures, and experiences. </p>
</div>
<div className="mt-[20px]">
<p className="text-[#A0522D]  text-[25px] font-bold ">Critical Thinking </p>
<div className="divider w-[400px] h-[2px] bg-[#cc915c]"></div>
<p className="text-[16px] text-black ">Reading encourages critical thinking and problem-solving. It stimulates the mind and helps individuals develop 
    the capacity to analyze and evaluate information.</p>
</div>
<div className="mt-[20px]">
<p className="text-[#A0522D]  text-[25px] font-bold ">Empathy & Understanding </p>
<div className="divider w-[400px] h-[2px] bg-[#cc915c]"></div>
<p className="text-[16px] text-black ">Books expose readers to diverse perspectives, characters, and situations, fostering empathy and a deeper understanding of the world. 
   </p>  
</div>
<div className="mt-[20px]">
<p className="text-[#A0522D]  text-[25px] font-bold ">Mental Stimulation</p>
<div className="divider w-[400px] h-[2px] bg-[#cc915c]"></div>
<p className="text-[16px] text-black ">Engaging with books and reading materials challenges the brain, helping to keep it active and healthy. This can be particularly 
    important as individuals age.</p>  
</div>
<div className="mt-[20px]">
<p className="text-[#A0522D]  text-[25px] font-bold ">Academic Success</p>
<div className="divider w-[400px] h-[2px] bg-[#cc915c]"></div>
<p className="text-[16px] text-black ">Regular reading is linked to improved academic performance. It helps individuals excel in various subjects, including language,
     literature, and science.</p> 
</div>
</div>
 
 <video
          style={{ maxWidth: "100%", width: "900px", margin: "0 auto" }}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          
          src="/v.mp4"
        
          ref={videoEl}
          
        />
       
 

  </div>
 <div className="flex">
 <img className="w-[200px] h-[200px] ml-[1000px] mt-[-100px]" src="a1.png"></img>
 <img className="w-[150px] h-[150px] mt-[-100px]" src="a3.png"></img>
 </div>
      </div>
    </div>
   
</div>
    );
};

export default Info;