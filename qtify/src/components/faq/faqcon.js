import styles from './faq.module.css';
import down from '../../assests/down.png';
import { useState } from 'react';
import up from '../../assests/up.png';


function Faqcon({question,ans}){
    const [option,setOption] = useState(false);
    return(
     <>   
    <div className={styles.contentcon}>
    <div className={styles.content}>
        <span>{question}</span>
       {option? <span onClick={()=>{setOption(false)}}><img src={up} alt='img'/></span> : <span onClick={()=>{setOption(true)}}><img src={down} alt='img'/></span> }
       </div>
    </div>
    {option? <div className={styles.option}>
        <span>{ans}</span></div>:null}</>
    )

}


export default Faqcon;