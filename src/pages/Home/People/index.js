import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
// import {FreeMode, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import PeopleItem from "../../../commons/components/PeopleItem";
import "./style.scss";

function People() {
   return (
      <div className="people">
         <div className="people-container">
            <div className="people-header">
               <h1 className="people-header-title">
                  What people say about Team
               </h1>
               <div className="people-list">
                  <Swiper
                     slidesPerView={4}
                     spaceBetween={30}
                     freeMode={true}
                     breakpoints={{
                        740: {
                           width: 740,
                           slidesPerView: 1,
                        },
                        768: {
                           width: 768,
                           slidesPerView: 2,
                        },
                     }}
                     // pagination={{
                     //    clickable: true,
                     //    renderBullet: (index, className) => {
                     //       return `<span className='${className}'>${
                     //          index + 1
                     //       }</span>`;
                     //    },
                     // }}
                     modules={[FreeMode, Pagination]}
                     // modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
   );
}

export default People;
