import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
        <div className='my-[30px] lg:w-[1550px] sm:w-[630px] h-[700px] lg:mx-[110px] sm:mx[0px] mt-[-20px]'>
          
    <Swiper
     spaceBetween={30}
     centeredSlides={true}
     autoplay={{
       delay: 5000,
       disableOnInteraction: false,
     }}
     pagination={{
       clickable: true,
     }}
     navigation={true}
     modules={[Autoplay, Pagination, Navigation]}
     className="mySwiper"
    >
      <SwiperSlide>
      <div>
        <div className='relative w-full'>
        <img className="w-[1550px] h-[700px]" src="https://i.ibb.co/SrHr2dG/b3.jpg"></img>
        <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
        <div className='text-white  pl-[400px] '>
           <p className='text-[60px] text-white text-center'>Your World Of Words</p>
           <div className='divider bg-[#A0522D]  h-[3px] '></div>
           <p className='text-[20px] text-center text-white font-semibold'>A library is a repository of knowledge, offering a vast collection of books,<br/>
              digital resources, and other media for public access, fostering learning and <br/>
              research. It serves as a hub for intellectual exploration and community engagement.
              </p>
              <button className='w-[280px] h-[80px] bg-[#A0522D] mx-[250px] mt-[50px] text-white text-[30px]'>Explore More</button>
        </div>
        </div>
        </div>
      </div>
     
      </SwiperSlide>
      <SwiperSlide>
      <div>
        <div className='relative w-full'>
        <img className="w-[1550px] h-[700px]" src="https://i.ibb.co/GM6yKwN/pexels-lumn-167682.jpg"></img>
        <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
        <div className=' text-white  pl-[400px]'>
           <p className='text-[40px] text-white text-center'>Read For Science</p>
           <div className='divider bg-[#A0522D]  h-[3px] '></div>
           <p className='text-[20px] text-center text-white mt-[50px] font-semibold'>
              Science books are a gateway to understanding the natural world, providing <br/> 
              insights into the principles, discoveries, & innovations that shape our <br/> 
              understanding of the universe. They bridge the gap between complex scientific<br/> 
               concepts and the curious minds eager to explore the mysteries of the cosmos.</p>
              <button className='w-[280px] h-[80px] bg-[#A0522D] mx-[250px] mt-[50px] text-white text-[30px]'>Explore More</button>
        </div>
        </div>
        </div>
      </div>
     
      </SwiperSlide>
      <SwiperSlide>
      <div>
        <div className='relative w-full'>
        <img className="w-[1550px] h-[700px]" src="https://i.ibb.co/YNgZGCS/b4.jpg"></img>
        <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
        <div className=' text-white  pl-[400px]'>
        <p className='text-[40px] text-white text-center'>Read For Knowlage</p>
        <div className='divider bg-[#A0522D]  h-[3px] '></div>
           <p className='text-[20px] text-center text-white mt-[50px] font-semibold'> Reading for knowledge is a journey of continuous learning, expanding one's <br/>
            horizons by delving into the wealth of information and ideas that books offer.<br/>
            It is the key to personal growth, critical thinking, and staying informed in an <br/>
            ever-evolving world.</p>
              <button className='w-[280px] h-[80px] bg-[#A0522D] mx-[250px] mt-[50px] text-white text-[30px]'>Explore More</button>
        </div>
        </div>
        </div>
      </div>
     
      </SwiperSlide>
      <SwiperSlide>
      <div>
        <div className='relative w-full'>
        <img className="w-[1550px] h-[700px]" src="https://i.ibb.co/nrVY2fq/b5.jpg"></img>
        <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
        <div className='text-white  pl-[400px] '>
        <p className='text-[40px] text-center'>Read For Peace</p>
        <div className='divider bg-[#A0522D]  h-[3px] '></div>
           <p className='text-[20px] text-center text-white mt-[50px] font-semibold'>
            Reading for peace encourages empathy, broadening our perspectives <br/>
            and fostering a deeper understanding of diverse cultures & viewpoints.<br/>
            It is a powerful tool for promoting tolerance, dialogue, and harmony <br/>
            in a world often marked by conflict and division.</p>
              <button className='w-[280px] h-[80px] bg-[#A0522D] mx-[250px] mt-[50px] text-white text-[30px]'>Explore More</button>
        </div>
        </div>
        </div>
      </div>
     
      </SwiperSlide>  
      
    </Swiper>

        </div>

        <div className='text-center my-[80px] mt-[150px]'>
            <p className="text-[#A0522D] dark:text-white  text-[60px] font-bold divider">The Book Collection</p>
            <p className="text-[#808080] text-[20px] mt-[50px] ">Choose your Book And Increase Your Knowladge</p>
        </div>
       
        </div>
    );
};


export default Banner;