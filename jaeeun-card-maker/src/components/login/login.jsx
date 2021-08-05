import React from 'react';
import styles from './login.module.css';

const Login = ({ auth }) => {

    const login = (e) => {
        e.target.innerText.includes('Google') ? auth.authLogin('Google') : auth.authLogin('Github')
    }


    return(
        <div className={styles.login}>
            <h2>LOGIN</h2>
            <div className={styles.btn}>
                <button className={styles.google} onClick={login}>Google Login</button>
                <button className={styles.github} onClick={login}>Github Login</button>
            </div>
            
        </div>
    )
}

export default Login;