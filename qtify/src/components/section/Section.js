import styles from './topalbum.module.css';
import { useState,useEffect } from 'react';
import Card from '../card/card';
import Carousel from '../Carousel/carousel';

//

function Top({title,data,type}){
    
    const [carouselToggle,setCarouselToggle] = useState(true);
    const toggle = ()=>{
        setCarouselToggle((prevState)=> !prevState)
    }

    
   
    
    

    return(
        <div className={styles.tcontainer}>
            <div className={styles.con}><h3 className={styles.para}>{title}</h3>
        <h4 className={styles.show} onClick={toggle}>{carouselToggle ? `Show all` : `Collapse`}</h4>
        </div>  
           {!data.length?"Loading" :(<div className={styles.topcon}>
                {!carouselToggle?(<div className={styles.wrapper}>
                    {   
                       data.map((ele)=>{return (<Card data={ele} type={type}/>)})
                    }
                </div>):(<Carousel data={data}  renderComponent={(data)=>(<Card data={data} type={type}/>)}/>)
                }
            </div>)}
        </div>
    )

}

export default Top