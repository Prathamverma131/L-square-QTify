import styles from './albums.module.css';
import TopAlbum from '../topalbum/topalbum';
import NewAlbum from '../newalbum/newalbum';

function Albums(){

    return(
        <div className={styles.album}>
            <TopAlbum/>
            <NewAlbum/>
        </div>
    )
}

export default Albums;