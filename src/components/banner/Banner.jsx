import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner5 from '../../assets/banner5.jpg';
import banner6 from '../../assets/banner6.jpg';

import banner4 from '../../assets/banner4.avif';
const Banner = () => {
  return (

      <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className='w-full h-96' src={banner1} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-96' src={banner2} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-96' src={banner5} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-96' src={banner4} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-96' src={banner3} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-96' src={banner6} alt="" /></SwiperSlide>
     
    </Swiper>
   
  );
};

export default Banner;
