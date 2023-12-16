import styles from './hero.module.css';
import image from '../../assests/vibrating-headphone.png'


function Hero(){
    return(
        <div className={styles.hero}>
        <div className={styles.con}>
            <div className={styles.content}>100 Thousand Songs, ad-Free <br/>Over Thousands podcast episodes</div>
            <div className={styles.imgcon}>
            <img src={image} alt={"hero"}/>
            </div>
        </div>
        </div>
    )
}

export default Hero;