import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './home.module.css';

const Home = ({authService}) => {

    const history = useHistory();
    const cards = [
        {
            name : 'jaeeun',
            company : 'kakao',
            team : 'Light',
            occupation : 'frontend',
            mail : 'jaeeun_98@naver.com',
            introductory : 'hello'
        },
        {
            name : 'jaeeun2',
            company : 'kakao',
            team : 'Dark',
            occupation : 'frontend',
            mail : 'jaeeun_98@naver.com',
            introductory : 'hello'
        },
        {
            name : 'jaeeun3',
            company : 'kakao',
            team : 'Colorful',
            occupation : 'frontend',
            mail : 'jaeeun_98@naver.com',
            introductory : 'hello'
        }
    ]
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/')
            }
        })
    })

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
                <section className={styles.container}>
                    <CardMaker cards={cards}/>
                    <CardPreview cards={cards}/>
                </section>
            <Footer />
        </section>            
    );
}



export default Home;