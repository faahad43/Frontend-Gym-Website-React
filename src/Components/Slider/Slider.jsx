
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import tick from "../../assets/white-tickmark.svg";
import arrow from "../../assets/right-arrow.svg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Slider.css';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';



export default function Sider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides ={true}
        slidesPerView={"auto"}
        loop={true}
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true}}
        pagination={true}
        spaceBetween={50}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       
          <SwiperSlide className='package'>
          <div>
            <svg className="logo-img" fill="#000000" height="800px" width="800px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 471.701 471.701" xmlSpace="preserve">
              <g>
                <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                  c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                  l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                  C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                  s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                  c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                  C444.801,187.101,434.001,213.101,414.401,232.701z"/>
              </g>
            </svg>
          </div>
          
          <div className="package-name">
          Baisc Plan
          </div>
          <span className="price">$ 25</span>
          <div className="points">
            <span><img className='ticks' src={tick} alt="" />2 hours of exercise</span>
            <span><img className='ticks' src={tick} alt="" />Free consultaion to coaches
            </span>
            <span><img className='ticks' src={tick} alt="" />Access to Community
           </span>
          </div>
            <span className="benefits">
                <span>
                See more benefits 
                </span>
                <img className='arrow' src={arrow}/></span>
            <div className="join-btn">
                <button >Join Now</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='package'>
          <div>
          <svg className="logo-img" width="2.3em" height="2.3em" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="M213.333333 682.666667L128 213.333333l234.666667 298.666667L512 213.333333l149.333333 298.666667L896 213.333333l-85.333333 469.333334H213.333333m597.333334 128a42.666667 42.666667 0 0 1-42.666667 42.666666H256a42.666667 42.666667 0 0 1-42.666667-42.666666v-42.666667h597.333334v42.666667z" />
</svg>
          </div>
          
          <div className="package-name">
          Premium plan
          </div>
          <span className="price">$ 30</span>
          <div className="points">
            <span><img className='ticks' src={tick} alt="" />5 hour of exercises</span>
            <span><img className='ticks' src={tick} alt="" />Free consultation of Coaches
            </span>
            <span><img className='ticks' src={tick} alt="" />Access to minibar
           </span>
          </div>
            <span className="benefits">
                <span>
                See more benefits 
                </span>
                <img className='arrow' src={arrow}/></span>
            <div className="join-btn">
                <button >Join Now</button>
            </div>
          </SwiperSlide>

          <SwiperSlide className='package pro-plan'>
          <div>
          <svg
            className="logo-img"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 122.87 122.88"
            style={{ enableBackground: 'new 0 0 122.87 122.88' }}
            xmlSpace="preserve"
          ><g><path d="M1.61,97.18l5.38-5.38c0.14-0.14,0.29-0.27,0.44-0.4l-3.86-3.86v0c-0.06-0.06-0.11-0.12-0.16-0.18 c-0.96-1.05-1.44-2.38-1.44-3.7c0-1.4,0.54-2.8,1.61-3.87l0,0l0,0l0,0l5.38-5.38l0,0c0.14-0.14,0.29-0.27,0.44-0.4l-3.86-3.86h0 c-1.07-1.07-1.6-2.48-1.6-3.88c0-1.4,0.54-2.8,1.6-3.87l0,0l0,0l0,0l5.38-5.38c1.07-1.07,2.48-1.6,3.88-1.6 c1.41,0,2.81,0.53,3.88,1.6l47.21,47.21c1.07,1.07,1.6,2.48,1.6,3.88c0,1.41-0.53,2.81-1.6,3.88l-5.38,5.38v0 c-0.06,0.06-0.12,0.11-0.18,0.16c-1.05,0.96-2.38,1.44-3.7,1.44c-1.4,0-2.8-0.54-3.87-1.6l0,0l0,0l0,0l-3.27-3.27 c-0.12,0.15-0.25,0.3-0.39,0.44l0,0l0,0l-5.38,5.38h0c-0.06,0.06-0.12,0.11-0.18,0.16c-1.04,0.95-2.37,1.43-3.7,1.43 c-1.41,0-2.81-0.53-3.87-1.6l0,0l0,0l0,0l-4.46-4.46c-0.12,0.15-0.25,0.3-0.4,0.44l-5.38,5.38c-1.07,1.07-2.48,1.6-3.88,1.6 c-1.4,0-2.81-0.53-3.88-1.6L1.61,104.95C0.54,103.88,0,102.47,0,101.07C0,99.66,0.54,98.26,1.61,97.18L1.61,97.18z M65.85,8.98 l-5.38,5.38h0l-0.05,0.05c-0.08,0.11-0.12,0.24-0.12,0.37c0,0.15,0.06,0.31,0.17,0.42h0l47.21,47.21c0.11,0.11,0.26,0.17,0.42,0.17 c0.15,0,0.31-0.06,0.42-0.17l5.38-5.38l0,0l0.05-0.05c0.08-0.1,0.12-0.24,0.12-0.37c0-0.16-0.05-0.31-0.16-0.42l0,0l0,0l-7.13-7.13 v0L74.41,16.71l-7.72-7.72v0c-0.11-0.11-0.26-0.17-0.42-0.17C66.11,8.81,65.96,8.87,65.85,8.98L65.85,8.98L65.85,8.98L65.85,8.98z M71.47,47.31c1.34-1.34,3.52-1.34,4.87,0c1.34,1.34,1.34,3.52,0,4.87L52.74,75.76c-1.34,1.34-3.52,1.34-4.87,0 c-1.34-1.34-1.34-3.52,0-4.87L71.47,47.31L71.47,47.31z M100.65,5.07l-5.38,5.38l0,0c-0.12,0.12-0.18,0.27-0.18,0.42 c0,0.13,0.04,0.25,0.12,0.36l0.06,0.06l0,0h0l16.32,16.32l0,0l0.05,0.05c0.1,0.08,0.23,0.11,0.36,0.11c0.15,0,0.31-0.06,0.42-0.17 l5.38-5.38v0c0.12-0.12,0.18-0.27,0.18-0.42c0-0.15-0.06-0.31-0.17-0.42l0,0v0L101.49,5.07l0,0c-0.11-0.11-0.26-0.17-0.42-0.17 S100.76,4.96,100.65,5.07L100.65,5.07L100.65,5.07z M91.81,6.98l5.38-5.38l0,0c1.07-1.07,2.48-1.6,3.88-1.6s2.81,0.53,3.88,1.6l0,0 l16.32,16.32h0l0,0l0,0c1.06,1.06,1.6,2.47,1.59,3.87c0,1.41-0.53,2.82-1.59,3.88h0l-5.38,5.38c-0.14,0.14-0.29,0.27-0.44,0.4 l4.46,4.46c1.07,1.07,1.6,2.48,1.6,3.88c0,1.41-0.54,2.81-1.6,3.88l-5.38,5.38l0,0l0,0l0,0c-0.14,0.14-0.29,0.27-0.44,0.39 l3.27,3.27l0,0l0,0l0,0c1.07,1.07,1.6,2.47,1.6,3.87c0,1.33-0.48,2.66-1.44,3.7c-0.05,0.06-0.1,0.12-0.16,0.18l0,0l-5.38,5.38 c-1.07,1.07-2.48,1.6-3.88,1.6c-1.41,0-2.81-0.54-3.88-1.6L57.01,18.66v0c-1.07-1.07-1.61-2.48-1.61-3.88 c0-1.33,0.48-2.66,1.44-3.7c0.05-0.06,0.1-0.12,0.16-0.18l0,0l5.38-5.38l0,0l0,0l0,0c1.07-1.07,2.47-1.6,3.87-1.6 c1.41,0,2.81,0.54,3.88,1.6l0,0l3.86,3.86c0.12-0.15,0.25-0.3,0.4-0.44l5.38-5.38c1.07-1.07,2.48-1.61,3.88-1.61 c1.41,0,2.81,0.54,3.88,1.61l3.86,3.86C91.54,7.27,91.67,7.12,91.81,6.98L91.81,6.98L91.81,6.98z M83.25,7.03l-5.38,5.38 c-0.11,0.11-0.17,0.26-0.17,0.42c0,0.15,0.05,0.3,0.16,0.41l0.01,0.01l32.36,32.36h0c0.11,0.11,0.26,0.17,0.42,0.17 c0.16,0,0.31-0.05,0.42-0.16l0,0h0l5.38-5.38c0.11-0.11,0.17-0.26,0.17-0.42c0-0.15-0.06-0.31-0.17-0.42l-8.31-8.31l0,0l0,0l0,0 l0,0L84.09,7.03c-0.11-0.11-0.27-0.17-0.42-0.17C83.51,6.86,83.36,6.91,83.25,7.03L83.25,7.03z M16.71,74.41L16.71,74.41 l32.36,32.36l0,0l0,0l0,0l0,0l0,0l0,0l0,0l7.11,7.11l0,0l0,0c0.11,0.11,0.27,0.16,0.42,0.16c0.13,0,0.26-0.04,0.37-0.12l0.05-0.05 v0l5.38-5.38c0.11-0.11,0.17-0.26,0.17-0.42c0-0.15-0.06-0.31-0.17-0.42L15.2,60.47c-0.11-0.11-0.26-0.17-0.42-0.17 c-0.15,0-0.31,0.06-0.42,0.17l-5.38,5.38v0l0,0c-0.11,0.11-0.16,0.27-0.16,0.42c0,0.15,0.06,0.31,0.17,0.42v0L16.71,74.41 L16.71,74.41z M45.66,110.29l-0.05-0.05L13.24,77.87h0l-0.06-0.06c-0.11-0.08-0.23-0.12-0.36-0.12c-0.15,0-0.3,0.06-0.42,0.18h0 l-5.38,5.38v0l0,0c-0.11,0.11-0.16,0.27-0.16,0.42c0,0.13,0.04,0.26,0.12,0.37l0.05,0.05v0l7.72,7.72l16.32,16.32l8.32,8.32h0l0,0 c0.12,0.12,0.27,0.17,0.42,0.17c0.13,0,0.26-0.04,0.37-0.12l0.05-0.05h0l5.38-5.38l0,0c0.11-0.11,0.16-0.27,0.16-0.42 C45.77,110.52,45.73,110.39,45.66,110.29L45.66,110.29z M10.45,95.27l-5.38,5.38c-0.11,0.11-0.17,0.26-0.17,0.42 s0.06,0.31,0.17,0.42l16.32,16.32c0.11,0.11,0.26,0.17,0.42,0.17c0.15,0,0.31-0.06,0.42-0.17l5.38-5.38 c0.11-0.11,0.17-0.26,0.17-0.42c0-0.16-0.06-0.31-0.17-0.42L11.28,95.27l-0.01-0.01c-0.11-0.11-0.26-0.16-0.41-0.16 C10.71,95.1,10.56,95.16,10.45,95.27L10.45,95.27z"/></g></svg>
          </div>
          
          <div className="package-name">
          Pro plan
          </div>
          <span className="price">$ 45</span>
          <div className="points">
            <span><img className='ticks' src={tick} alt="" />8 hours of exercises</span>
            <span><img className='ticks' src={tick} alt="" />Consultaion of Private Coaches
            </span>
            <span><img className='ticks' src={tick} alt="" />Free Fitness Merchandises
           </span>
          </div>
            <span className="benefits">
                <span>
                See more benefits 
                </span>
                <img className='arrow' src={arrow}/></span>
            <div className="join-btn">
                <button >Join Now</button>
            </div>
          </SwiperSlide>
                    
      </Swiper>
      
    </>
  );
}
