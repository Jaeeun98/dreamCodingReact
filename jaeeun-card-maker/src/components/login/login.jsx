import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';


const Login = ({ auth }) => {

    const history = useHistory();
    const login = (e) => {
        auth.authLogin(e.target.innerText)
        .then(data => homeMove(data)); 
    }

    const homeMove = (data) => {
        history.push({
          pathname : '/home',
          state : data.user.uid
        });
        //uid = 특정 컴퓨터 사용자에게 부여되는 숫자 또는 이름이다.
    }

    return (
      <section className={styles.login}>
        <Header/>
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