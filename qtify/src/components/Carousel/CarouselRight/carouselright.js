import styles from './carouselright.module.css';
import { useEffect, useState } from 'react';
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import { ReactComponent as RightArrow } from '../../../assests/Group3740.svg';
function CRightNav(){

    const swiper = useSwiper();
    const [isEnd,setIsEnd] = useState(swiper.isEnd);
    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsEnd(swiper.isBeginning);
        })
    },[])

    return (
        <div className={styles.rightnav}>
            {!isEnd && <RightArrow onClick={()=>{swiper.slideNext()}}/>}
        </div>
    )
}

export default CRightNav;