import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import Home from '../home/home';

const Login = ({authService}) => {

    const history = useHistory();
    const onLogin = (e) => {
        authService
        .login(e.currentTarget.textContent)
        .then(value => value && history.push('/home'))



    };

 return (
     <section className={styles.login}>
        <Header />
        <section>
            <h1>Login</h1>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button className={styles.button} onClick={onLogin}>
                        Google
                    </button>
                </li>
                <li className={styles.item}>
                    <button className={styles.button} onClick={onLogin}>
                        Github
                    </button>
                </li>
            </ul>
        </section>
        <Footer />
     </section>
    
);

}
export default Login;