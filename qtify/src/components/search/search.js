import {ReactComponent as Logo} from '../../assests/icon.svg';
import styles from './search.module.css';

function Search({placeholder}){

    const onsubmit = (e)=>{
        e.preventDefault();
        //Make some logic here
    }

    return(
        <form className={styles.wrapper} onSubmit={onsubmit}>
            <input type="text" required className={styles.search} placeholder={placeholder}/>
            <button  className={styles.searchBtn}><Logo/></button>
        </form>
    )

}

export default Search;