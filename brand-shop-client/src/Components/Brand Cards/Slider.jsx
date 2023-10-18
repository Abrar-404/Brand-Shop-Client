import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Styles/Styles.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="h-[440px] mt-20">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/WkSQgc7/6d4d62aa70e5476a065ba09830dac2a1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/Jy8yc1d/BMA-AI-art-car-05.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full border-x-4 border-y-4 border-pink-600"
            src="https://i.ibb.co/wpcqDq1/d5hahtn-59f51493-4b34-42b9-ba1a-c64118dd09ef.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
