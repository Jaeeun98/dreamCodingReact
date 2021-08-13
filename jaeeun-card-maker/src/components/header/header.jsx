import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './header.module.css'

const Header = ({ auth }) => {

    const history = useHistory();
    const [userId, setUserId] = useState(history.location.state);

    useEffect(() => {
        !userId && history.push('/'); 
    })
    
    const logout = async () => {
        await auth.authLogout();
        history.push({
            state : ''
        })
        setUserId('');
    }
    
    return(
        <header className={styles.header}>
            <img src="images/logo.png" alt="logo" />
            Business Card Maker
            {userId && <button className={styles.logoutBtn} onClick={logout}>Logout</button>}
        </header>
    )
}
export default Header;