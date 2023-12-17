import styles from './topalbum.module.css';
import { useState,useEffect } from 'react';
import Card from '../card/card';
import Carousel from '../Carousel/carousel';
import Filter from '../filters/fliters';

//

function Top({title,data,filterSource,type}){
    
    const [carouselToggle,setCarouselToggle] = useState(true);
    const [filters,setFilters] = useState([{key:'all',label:'all'}])
    const [selectedFilter,setSelectedFilter] = useState(0);
    const toggle = ()=>{
        setCarouselToggle((prevState)=> !prevState)
    }

    useEffect(()=>{ 
        if(filterSource){
            filterSource().then((res)=>{
                const {data} = res;
                
                setFilters([...data,...filters]);
            })
        }

    },[])

    const showFilters = filters.length>1;
    
    const cardsToRender = data.filter((card)=>{
       return  showFilters&&selectedFilter!==0 ? card.genre.key === filters[selectedFilter].key : card
    })

    
   
    
    

    return(
        <div className={styles.tcontainer}>
            <div className={styles.con}><h3 className={styles.para}>{title}</h3>
        <h4 className={styles.show} onClick={toggle}>{carouselToggle ? `Show all` : `Collapse`}</h4>
        </div>  

        {showFilters && <div className={styles.filterWrapper}>
            <Filter filters={filters} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
        </div> }

           {!data.length?"Loading" :(<div className={styles.topcon}>
                {!carouselToggle?(<div className={styles.wrapper}>
                    {   
                       cardsToRender.map((ele)=>{return (<Card data={ele} type={type}/>)})
                    }
                </div>):(<Carousel data={cardsToRender}  renderComponent={(data)=>(<Card data={data} type={type}/>)}/>)
                }
            </div>)}
        </div>
    )

}

export default Top