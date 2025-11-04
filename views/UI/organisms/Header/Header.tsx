import Title from '../../molecules/Title/Title.tsx';
import NavBar from '../../molecules/NavBar/NavBar.tsx';
import styles from './Header.module.css';
const Header = () =>{
    return(
        <div className={styles.Header}>
            <Title  />
            <NavBar />
        </div>
    )
}

export default Header;