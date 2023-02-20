import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "../../data/Data";

import "./Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
    return (
        <Swiper
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ dynamicBullets: true }}>
            {sliderData.data.map((item, idx) => (
                <SwiperSlide key={idx} style={{ background: item.bg }}>
                    <div className="container">
                        <div style={{ background: item.bg }} className="slide-inner">
                            <div className="slide__text-content">
                                <h2 className="slide__title">{item.title}</h2>
                                <p className="slide__desc">{item.desc}</p>
                                <button
                                    style={{
                                        background: item.btnData.btnBg,
                                        border: `2px solid ${item.btnData.borderColor}`,
                                        color: item.btnData.btnTxtColor,
                                    }}
                                    className="slide__btn">
                                    {item.btnData.btnText}
                                </button>
                            </div>
                            <div
                                style={{
                                    background: `url(./assets/img/sliderImg/slide${
                                        idx + 1
                                    }.png) center no-repeat`,
                                    backgroundSize: "420px",
                                }}
                                className="slide__img"></div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
