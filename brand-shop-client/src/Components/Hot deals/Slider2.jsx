// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Styles/Styles2.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Slider2 = () => {
  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://i.ibb.co/WxXzZk7/DSC05013-min.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="subtitle" data-swiper-parallax="-200">
            Lamborghini{' '}
            <span className="text-red-600 font-extrabold">SIAN</span>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="text-4xl">
              Get The <span className="text-red-600 font-extrabold">Beast</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="subtitle" data-swiper-parallax="-200">
            {' '}
            Model <span className="text-red-600 font-extrabold">2021</span>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="text-4xl">
              FKP - <span className="text-red-700 font-extrabold ">37</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="subtitle" data-swiper-parallax="-200">
            {' '}
            Dare to <span className="text-red-600 font-extrabold">SKIP</span>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="text-4xl font-bold text-rose-700">LAMBORGHINI.COM</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider2;
