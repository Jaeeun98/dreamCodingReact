import React from 'react';
import styles from './login.module.css';

const Login = (props) => {
    return(
        <div className={styles.login}>
            <h2>LOGIN</h2>
            <div className={styles.btn}>
                <button className={styles.google}>Google Login</button>
                <button className={styles.github}>Github Login</button>
            </div>
            
        </div>
    )
}

export default Login;