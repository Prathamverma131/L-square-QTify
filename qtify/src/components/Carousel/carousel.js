import styles from './carousel.module.css';
import 'swiper/css';
import CarouselLeftNavigation from './CarouselLeft/carouselleft';
import CarouselReftNavigation from './CarouselRight/carouselright';
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import { Navigation} from 'swiper/modules';
import { useEffect } from 'react';
import Card from '../card/card';

const Controls = ({data})=>{
    const swiper = useSwiper();
    useEffect(()=>{
        swiper.slideTo(0,1);
    },[data]);
    return <></>;
}

function Carousel({data,renderComponent}){
    
    
    return(<div className={styles.wrapper}>
          <Swiper className={styles.swiper} style={{padding:"0px 20px",color: "var(--color-white)"}} initialSlide={0} modules={[Navigation]} slidesPerView={"auto"} spaceBetween={40} allowTouchMove>
    <Controls data={data}/>        
    <CarouselLeftNavigation/>
    <CarouselReftNavigation/>
    {
        data.map((ele)=>{
            return <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
})
    }
    </Swiper> 
    </div>)


}

export default Carousel;


