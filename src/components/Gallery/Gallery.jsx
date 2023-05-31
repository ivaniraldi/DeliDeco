
import NavBar from "./../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "../../assets/1.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Hoja1 from "./Hoja1";
import Hoja2 from "./Hoja2";
import Hoja3 from "./Hoja3";
import Hoja4 from "./Hoja4";
import Hoja5 from "./Hoja5";

function Gallery() {
  return (
    <div >
      <NavBar></NavBar>
      <div className="w-full flex justify-center items-center">
        <p>Desliza para ver mas!    </p>

      </div>

      <Swiper
          id='swiper'
          spaceBetween={0}
          slidesPerView={1}
          className="mt-2"
          loop={true} >
          <SwiperSlide key="1">
            <Hoja1></Hoja1>
          </SwiperSlide>
          <SwiperSlide>
           <Hoja2></Hoja2>
          </SwiperSlide>
          <SwiperSlide>
           <Hoja3></Hoja3>
          </SwiperSlide>
          <SwiperSlide>
           <Hoja4></Hoja4>
          </SwiperSlide>
          <SwiperSlide>
           <Hoja5></Hoja5>
          </SwiperSlide>
        </Swiper>


      <Footer></Footer>
    </div>
  );
}

export default Gallery;
