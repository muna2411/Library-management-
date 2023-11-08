import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Authors = () => {
    return (
        <div>
            <div className='text-center my-[200px]' >
            <div className="divider">  <h2 className="text-[#A0522D]  text-[50px] font-bold ">Authors of The Month</h2> </div>
                <p></p>

            </div>
            <div className='lg:m-[150px]'>
            <Swiper
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
     
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <img className="w-[300px] h-[300px]" style={{ borderRadius: "50%"}} src="https://i.ibb.co/tmXdvTd/au1.jpg"></img>
      <p className="text-center text-[20px] mr-[70px] mt-[20px] text-black dark:text-white">Neil Gaiman</p>
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-[300px] h-[300px]" style={{ borderRadius: "50%"}} src="https://i.ibb.co/kBTbvYF/au2.jpg"></img>
      <p className="text-center text-[20px] mr-[70px] mt-[20px] text-black dark:text-white">Zadie Smith</p>
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-[300px] h-[300px]" style={{ borderRadius: "50%"}} src="https://i.ibb.co/LvWhZQj/au3.jpg"></img>
      <p className="text-center text-[20px] mr-[70px] mt-[20px] text-black dark:text-white">Mario Smith</p>
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-[300px] h-[300px]" style={{ borderRadius: "50%"}} src="https://i.ibb.co/0YrvSQb/au4.jpg"></img>
      <p className="text-center text-[20px] mr-[70px] mt-[20px] text-black dark:text-white">Angela Carter</p>
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-[300px] h-[300px]" style={{ borderRadius: "50%"}} src="https://i.ibb.co/VMC0jcw/au5.jpg"></img>
      <p className="text-center text-[20px] mr-[70px] mt-[20px] text-black dark:text-white">Louise Erdrich</p>
      </SwiperSlide>
    
   
    </Swiper>
    </div>
        </div>
    );
};

export default Authors;