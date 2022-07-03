import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'
import './Banner.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="width-control">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={banner4} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;