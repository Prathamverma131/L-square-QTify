import styles from './albums.module.css';
import Section from '../section/Section';
import fetchTop ,{fetchNew,fetchSong}from '../../api/api';
import { useEffect,useState } from 'react';


function Albums(){
    const [data,setData] = useState({newAlbum:[],topAlbums:[],songs:[]});

    const generateData = async (key,source)=>{
        let data = await source();
        setData((prevState)=>{return {
            ...prevState,[key]:data
        }})
           
    };

    useEffect(()=>{
        generateData('topAlbums',fetchTop);
        generateData('newAlbum',fetchNew);
        generateData('songs',fetchSong);
    },[])

    console.log(data.newAlbum);


    return(
        <div className={styles.album}>
            <Section title="Top Albums" data= {data.topAlbums} type="album" />
            <hr/>
            <Section title="New Albums" data= {data.newAlbum} type="album" />
           
        </div>
    )
}

export default Albums;