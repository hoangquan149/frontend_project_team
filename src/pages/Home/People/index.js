import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Navigation } from "swiper";

import PeopleItem from "../../../commons/components/PeopleItem";
import icons from "../../../assets/icons";
import "./style.scss";

function People() {
   useEffect(() => {
      const prev = document.querySelector(".swiper-button-prev");
      const next = document.querySelector(".swiper-button-next");
      const box = document.querySelector(".people-action-container");
      box.append(prev, next);
   }, []);

   const params = {
      lazy: true,
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   };
   return (
      <>
         <div className="people">
            <div className="people-container">
               <div className="people-header">
                  <h1 className="people-header-title">
                     What people say about Team
                  </h1>
                  <div className="people-list">
                     <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        slidesPerGroup={1}
                        centeredSlides={true}
                        loop={true}
                        breakpoints={{
                           576: {
                              width: 576,
                              slidesPerView: 2,
                           },
                           768: {
                              width: 768,
                              slidesPerView: 1,
                           },
                        }}
                        navigation={true}
                        modules={[Navigation, FreeMode]}
                        className="mySwiper"
                     >
                        <SwiperSlide>
                           <PeopleItem />
                        </SwiperSlide>
                        <SwiperSlide>
                           <PeopleItem />
                        </SwiperSlide>
                        <SwiperSlide>
                           <PeopleItem />
                        </SwiperSlide>
                        <SwiperSlide>
                           <PeopleItem />
                        </SwiperSlide>
                        <SwiperSlide>
                           <PeopleItem />
                        </SwiperSlide>
                        <SwiperSlide>
                           <PeopleItem />
                        </SwiperSlide>
                        <SwiperSlide>
                           <PeopleItem />
                        </SwiperSlide>
                        <div className="people-action-container"></div>
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default People;
