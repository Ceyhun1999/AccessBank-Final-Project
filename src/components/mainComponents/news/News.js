import { Swiper, SwiperSlide } from "swiper/react";
import { newsData } from "../../../data/Data";
import { useEffect, useState } from "react";
import "swiper/css";
import "./News.css";

export default function News() {
    const [width, setWidth] = useState(null);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth < 1200 && window.innerWidth > 320) {
                setWidth(500);
            } else if (window.innerWidth > 1200) {
                setWidth(null);
            } else {
                setWidth(300);
            }
        });
    }, []);

    return (
        <div className="news">
            <div className="news-inner container">
                <div className="news__top-block">
                    <h2 className="news__title">Son xəbərlər</h2>
                    <span>Hamısı</span>
                </div>
                <Swiper
                    slidesPerView={width === null ? 4 : width < 1200 && width > 320 ? 2.4 : 3}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper news-slider">
                    {newsData.data.map((item, idx) => (
                        <SwiperSlide key={idx} className="news-item">
                            <div
                                style={{
                                    background: `url('./assets/img/mainImg/newsImg/${item.img}') center/cover`,
                                }}
                                className="news-item__img"></div>
                            <span className="news-item__data">{item.data}</span>
                            <p className="news-item__text">{item.desc}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
