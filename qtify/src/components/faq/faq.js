import styles from './faq.module.css';
import down from '../../assests/down.png';
import { useState } from 'react';
import up from '../../assests/up.png';
import Faqcon from './faqcon';


function Faq(){

    
    return(<div className={styles.faqcon}>
    
    <span className={styles.faqheading}>
        FAQs
    </span>
    <Faqcon question="Is Qtify free to use?" ans = "Yes! It is 100% free, and has 0% ads!"/>
    <Faqcon question="Can I download and listen to songs offline" ans="Sorry, unfortunately we don't provide the service to download any songs."/>
    
    </div>
    
    );


}

export default Faq;