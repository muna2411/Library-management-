
const About = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
            <div>
               <div className="hero w-[700px] h-[900px]" style={{backgroundImage: 'url(a7.png)'}}>
                   <div className="hero-overlay bg-opacity-60 bg-white"></div>
                      <div className="hero-content text-center">
                      <div >
                      <img className="ml-[300px] w-[450px] h-[550px]" src="https://i.ibb.co/9W31qmT/a5.jpg"></img>
                      <img className="ml-[520px] w-[280px] h-[230px] mt-[-150px] " src="a6.jpg" ></img>
                      </div>
                      </div>
                </div>
           </div>
           <div className="text-black  lg:mr-[100px] sm:mr-[0px] ml-[140px] ">
                <h2 className="text-[40px] text-center text-[#A0522D] font-bold">Wisdom</h2>
                <h2 className="text-[25px] text-center text-black">About our Library </h2>
                <div className="divider h-[2px]" style={{ backgroundColor: 'white' }}></div>
                <p className="text-black text-[18px] text-center">
                My book library is a cherished sanctuary of the written word. It stands as a testament to my
                passion for literature, with its shelves brimming with books of all genres and eras. These 
                shelves are more than mere storage; they are portals to countless worlds, each book a key to 
                a different adventure. From the classics that have stood test of time to the latest bestsellers,
                my library is a carefully curated collection that tells the story of my literary journey.It is a
                place where I can escape the noise of the world, nestled in a comfortable chair,losing myself in
                the pages of a good book, and emerging enriched with knowledge, empathy,and wonder. My book library
                is not just a room;it is a repository of imagination, a gateway to learning, and a refuge for the soul.</p>
                <img className="w-[300px] h-[300px] ml-[500px] mb-[-200px]" src="a2.png"></img>
            </div>
           
        </div>

        </div>
    );
};

export default About;
