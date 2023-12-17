import Chip from "@mui/material/Chip";
import Tooltip from '@mui/material/Tooltip';

import styles from './card.module.css';

function Card({data,type}){
    
    if(type==='album'){
        const {image,follows,title,slug,songs} = data;
        return(
        <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <a href={`/album/${slug}`}>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <img src={image} alt="album" loading="lazy"/>
                        <div className={styles.banner}><Chip className={styles.chip} size="small" label={`${follows} Follows`}/></div>
                    </div>
                    <div className={styles.titleWrapper}>
                        <p>{title}</p>
                    </div>
                </div>
            </a>
        </Tooltip>)}
        else if(type==='songs'){
const {image,follows,title,likes} = data;
return(

    
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src={image} alt="song" loading="lazy"/>
                <div className={styles.banner}><div className={styles.pill} >
                    <p>{likes} Likes</p>
                    </div>
                    </div>
            </div>
            <div className={styles.titleWrapper}>
                <p>{title}</p>
            </div>
        </div>
    
)
        }
else{
    return(<>Not rendered</>)
}


}
export default Card;