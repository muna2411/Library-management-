
const About = () => {
    return (
        <div>
            <div className="lg:flex justify-between items-center sm:flex-col-1">
            <div>
               <div className="hero lg:w-[700px] h-[900px] sm:w-[500px]" style={{backgroundImage: 'url(https://i.ibb.co/mBmDmNn/a7-removebg-preview.png)'}}>
                   <div className=" bg-opacity-60 "></div>
                      <div className="hero-content text-center">
                      <div className="lg:w-[700px] sm:w-[500px]">
                      <img className="lg:ml-[300px] w-[450px] h-[550px] sm:ml-[20px]" src="https://i.ibb.co/9W31qmT/a5.jpg"></img>
                      <img className="lg:ml-[520px] w-[280px] h-[230px] mt-[-150px] sm:ml-[250px]" src="a6.jpg" ></img>
                      </div>
                      </div>
                </div>
           </div>
           <div className="text-black  lg:mr-[100px] sm:mr-[0px] lg:ml-[140px] sm:ml-[0px]">
                <h2 className="text-[40px] text-center text-[#A0522D] font-bold">Wisdom</h2>
                <h2 className="text-[25px] text-center text-black dark:text-white">About our Library </h2>
                <div className="divider h-[2px]" style={{ backgroundColor: 'white' }}></div>
                <p className="text-black dark:text-white text-[18px] text-center">
                My book library is a cherished sanctuary of the written word. It stands as a testament to my
                passion for literature, with its shelves brimming with books of all genres and eras. These 
                shelves are more than mere storage; they are portals to countless worlds, each book a key to 
                a different adventure. From the classics that have stood test of time to the latest bestsellers,
                my library is a carefully curated collection that tells the story of my literary journey.It is a
                place where I can escape the noise of the world, nestled in a comfortable chair,losing myself in
                the pages of a good book, and emerging enriched with knowledge, empathy,and wonder. My book library
                is not just a room;it is a repository of imagination, a gateway to learning, and a refuge for the soul.</p>
                <img className="w-[300px] h-[300px] lg:ml-[500px] lg:mb-[-200px] sm:ml-[100px] sm:mb-[50px]" src="https://i.ibb.co/zZJ6YCz/a2-removebg-preview.png"></img>
            </div>
           
        </div>

        </div>
    );
};

export default About;
