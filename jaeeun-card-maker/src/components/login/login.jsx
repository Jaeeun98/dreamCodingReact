import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';


const Login = ({ auth }) => {

    const [user, setUser] = useState();

    const history = useHistory();
    const login = (e) => {
        auth.authLogin(e.target.innerText)
        .then(data => homeMove(data)); 
    }


    const homeMove = () => {
        history.push('/home');
    }

    return (
      <section className={styles.login}>
        <Header />
        <section className={styles.section}>
          <h2>LOGIN</h2>
          <div className={styles.btn}>
            <button className={styles.google} onClick={login}>
              Google
            </button>
            <button className={styles.github} onClick={login}>
              Github
            </button>
          </div>
        </section>

        <Footer />
      </section>
    );
}

export default Login;