import styles from './topalbum.module.css'

function Top(){

    return(
        <div className={styles.tcontainer}>
            <div className={styles.con}><span className={styles.para}>Top Albums</span>
        <button className={styles.show}>Show all</button>
        </div>  
            <div className={styles.topcon}>Ok</div>
        </div>
    )

}

export default Top