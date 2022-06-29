import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation,EffectFade } from "swiper";
import hero1 from "../../images/hero1.jpg";
import hero2 from "../../images/hero2.jpg";
import {
  Wrapper,
  P,
  Content,
  H1,
  Span,
  BtnDiv,
  Links,
  Img,
} from "./HeroSectionElements";
import Aos from "aos";
import "aos/dist/aos.css";


export const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Wrapper>
            <Img src={hero1} alt="" />
            <Content>
              <P>FEEL THE DIFFERENCE WITH US</P>
              <H1 color="#333" data-aos="fade-right">
                Your Heath Is <br />
                <Span>Our Priority</Span>
              </H1>
              <BtnDiv>
                <Links className="btn me-3" to="/services">
                  GET SERVICES 
                </Links>
                <Links
                  className="btn btn-outline-info"
                  to="/services"
                >
                  ABOUT US
                </Links>
              </BtnDiv>
            </Content>
          </Wrapper>
        </SwiperSlide>

        <SwiperSlide>
          <Wrapper>
            <Img src={hero2} alt="" />
            <Content>
              <P>FEEL THE DIFFERENCE WITH US</P>
              <H1 color="#fff" data-aos="fade-right">
               Happy Life<br />
                <Span style={{color:"#fff"}}>Brighter Smiles</Span>
              </H1>
              <BtnDiv>
                <Links className="btn me-3" to="/services">
                GET SERVICES  
                </Links>
                <Links
                  className="btn btn-outline-info"
                  to="/services"
                >
                 ABOUT US
                </Links>
              </BtnDiv>
            </Content>
          </Wrapper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
