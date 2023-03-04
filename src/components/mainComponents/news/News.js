import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./News.css";
import { Pagination } from "swiper";

export default function Xeber() {
    return (
        <Swiper
            slidesPerView={2.5}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide className="new-item">Slide 1</SwiperSlide>
            <SwiperSlide className="new-item">Slide 2</SwiperSlide>
            <SwiperSlide className="new-item">Slide 3</SwiperSlide>
            <SwiperSlide className="new-item">Slide 4</SwiperSlide>
        </Swiper>
    );
}
