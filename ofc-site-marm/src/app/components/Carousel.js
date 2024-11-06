import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Carousel.module.css';

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className={styles.carousel}
    >
      <SwiperSlide>
        <img src="/home/sebastian/Imagens/wallpapersden.com_lio-messi-in-barcelona-paint-art_2912x1632.jpg." alt="Imagem 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/home/sebastian/Imagens/kaka_wallpaper_milan_by_mhosein10_ddvgxog-fullview.jpg" alt="Imagem 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/home/sebastian/Imagens/fc-barcelona-logo-football-7181.webp" alt="Imagem 3" />
      </SwiperSlide>  
    </Swiper>
  );
};

export default Carousel;
