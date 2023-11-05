import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination } from 'swiper/modules';

const Adver = () => {
    return (
        <div >
        <div className="ml-[100px]">
            <img src="https://i.ibb.co/th40m2r/ab-removebg-preview.png"></img>
        </div>
    <div className="mx-[300px] mt-[-300px]" >
        <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img src="https://i.ibb.co/jD0V0dj/add1.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/VwnbS5d/add2.jpg" ></img></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/tq0m5MP/add3.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/rm7LyWL/add4.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/KXSww2m/add5.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/cb1mZzq/add6.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/tDpLNhg/add7.jpg"></img></SwiperSlide>
            
          </Swiper>
      
          </div>
    </div>
    );
};

export default Adver;