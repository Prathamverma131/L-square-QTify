import Search from "../search/search";
import Logo from "../logo/logo";
import Button from "../button/button";
import styles from './navbar.module.css'

function Navbar(){

    return(<nav className={styles.nav}>
        <a href="/"><Logo /></a>
    <Search placeholder={"Search a album of your choice"}/>
    <Button>Give Feedback</Button>
    </nav>)
}

export default Navbar;