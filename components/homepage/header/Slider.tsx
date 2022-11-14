import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../../public/slide1.jpg'
import slide2 from '../../../public/slide2.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from './Slider.module.scss'
import Slide from './Slide';
import FindTechnologies from "./FindTechnologies";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import type {NextPage} from "next";


const Slider: NextPage = () => {
    return(
        <header className={styles.header}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className={styles.swiper}
            >
                <SwiperSlide>
                    <Slide text="Ucz się i poznawaj nowe technologie IT!" imageSrc={slide1.src} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide text="Szeroki wybór kursów i zajęć indywidualnych" imageSrc={slide2.src} />
                </SwiperSlide>
                {/*<SwiperSlide>Slide 3</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 4</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 5</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 6</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 7</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 8</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 9</SwiperSlide>*/}
            </Swiper>
            <FindTechnologies />
        </header>
    )
}

export default Slider;