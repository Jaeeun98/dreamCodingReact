import React from 'react';
import styles from './header.module.css'

const Header = (props) => {
    return(
        <header className={styles.header}>
            <img src="images/logo.png" alt="logo" />
            Business Card Maker
        </header>
    )
}
export default Header;