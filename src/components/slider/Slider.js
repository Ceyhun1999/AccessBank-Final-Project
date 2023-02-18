import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const slideData = {
    data: [
        {
            desc1: "40 000 AZN - dək Nağd kredit",
            desc2: "13% - dən başlayaraq",
            btnData: {
                btnText: "Sifariş et",
                btnBg: "#31A993",
                btnTxtColor: "#fff",
                borderColor: "2px solid #31A993",
            },
            bg: "#f1f5ff",
        },
        {
            desc1: "Cibiniz dollarla dolsun!",
            desc2: "Dollar depoziti yerləşdirin, illik 4%-dək qazanın!",
            btnData: {
                btnText: "Ətraflı",
                btnBg: "#fff",
                btnTxtColor: "#2673B7",
                borderColor: "#c4d4e5",
            },
            bg: "#f1f5ff",
        },
        {
            desc1: "Kredit kartınıza 50 gün istirahət",
            desc2: "10 000 AZN-dək",
            btnData: {
                btnText: "Sifariş et",
                btnBg: "#2362a9",
                btnTxtColor: "#fff",
                borderColor: "#2362a9",
            },
            bg: "#d0edfa",
        },
        {
            desc1: "Pulunuz evdə yatmasın!",
            desc2: "Əlverişli depozitlə pulunuz sizə pul gətirsin. ",
            btnData: {
                btnText: "Ətraflı",
                btnBg: "#fff",
                btnTxtColor: "#2673B7",
                borderColor: "#c4d4e5",
            },
            bg: "#c8f0ed",
        },
        {
            desc1: "myCard - la göyün yeddinci qatına",
            desc2: "Premium üstünlüklərdən yararlan!",
            btnData: {
                btnText: "Ətraflı",
                btnBg: "#31A993",
                btnTxtColor: "#fff",
                borderColor: "#c4d4e5",
            },
            bg: "#f1f5ff",
        },
    ],
};

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
            pagination={{ dynamicBullets: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}>
            {slideData.data.map((item, idx) => (
                <SwiperSlide style={{ background: item.bg }}>
                    <div style={{ background: item.bg }} className="slide-inner">
                        <div className="slide__text-content">
                            <p className="slide__desc1">{item.desc1}</p>
                            <p className="slide__desc2">{item.desc2}</p>
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
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
