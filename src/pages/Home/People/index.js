import React, { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// owlcarausel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import PeopleItem from "../../../commons/components/PeopleItem";

import "./style.scss";
// className="owl-theme"
// pagination={false}
// dots={false}
// loop
// margin={20}
// nav
const options = {
   margin: 20,
   responsiveClass: true,
   nav: true,
   dots: false,
   loop: true,
   responsive: {
      0: {
         items: 1,
      },
      400: {
         items: 1,
      },
   },
};

function People() {
   useEffect(() => {
      document.querySelector(".owl-prev").innerHTML = "";
      document.querySelector(".owl-next").innerHTML = "";
   }, []);

   return (
      <>
         <div className="people">
            <div className="people-container">
               <div className="people-header">
                  <h1 className="people-header-title">
                     What people say about Team
                  </h1>
                  <div className="people-list">
                     {/* <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        // slidesPerGroup={2}
                        // centeredSlides={true}
                        cssMode
                        // loop={true}
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
                        modules={[Navigation]}
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
                     </Swiper> */}
                     <OwlCarousel
                        className="owl-theme"
                        pagination={false}
                        dots={false}
                        responsive={{
                           0: {
                              items: 1,
                              rows: 1,
                           },
                           600: {
                              items: 3,
                              rows: 1,
                           },
                           1000: {
                              items: 3,
                              rows: 1,
                           },
                        }}
                        loop={false}
                        margin={20}
                        nav
                     >
                        <div className="item">
                           <PeopleItem />
                        </div>
                        <div className="item">
                           <PeopleItem />
                        </div>{" "}
                        <div className="item">
                           <PeopleItem />
                        </div>{" "}
                        <div className="item">
                           <PeopleItem />
                        </div>{" "}
                        <div className="item">
                           <PeopleItem />
                        </div>
                     </OwlCarousel>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default People;
