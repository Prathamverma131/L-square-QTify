import { useEffect, useState } from 'react';
import styles from './carouselleft.module.css';
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import { ReactComponent as LeftArrow } from '../../../assests/Group3741.svg';


function CLeftNav(){

    const swiper = useSwiper();
    const [isBegining,setIsBegining] = useState(swiper.isBeginning);
    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsBegining(swiper.isBeginning);
        })
    },[])

    return (
        <div className={styles.leftnav}>
             <LeftArrow onClick={()=>{swiper.slidePrev()}}/>
        </div>
    )

}

export default CLeftNav;