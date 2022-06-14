import React, { useRef, useState } from "react";
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
                        {...params}
                        slidesPerView={1}
                        spaceBetween={20}
                        // freeMode={true}
                        navigation
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
                        // modules={[FreeMode, Pagination]}

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
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="people-actions">
               <button className="people-action">
                  <img src={icons.vt.default} />
               </button>
               <button className="people-action">
                  <img src={icons.vt.default} />
               </button>
            </div>
         </div>
      </>
   );
}

export default People;
