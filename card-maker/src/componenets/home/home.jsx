import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './home.module.css';

const Home = ({authService}) => {

    const [cards, setCards] = useState([
        {   
            id : '1',    
            name : 'jaeeun',
            company : 'kakao',
            team : 'light',
            title : 'frontend',
            mail : 'jaeeun_98@naver.com',
            message : 'hello',
            fileName : 'jaeeunFile',
            fileURL : null
        },
        {   
            id : '2',
            name : 'jaeeun2',
            company : 'kakao',
            team : 'dark',
            title : 'frontend',
            mail : 'jaeeun_98@naver.com',
            message : 'hello',
            fileName : 'jaeeunFile',
            fileURL : null
        },
        {   
            id : '3',
            name : 'jaeeun3',
            company : 'kakao',
            team : 'colorful',
            title : 'frontend',
            mail : 'jaeeun_98@naver.com',
            message : 'hello',
            fileName : 'jaeeunFile',
            fileURL : null
        }
    ])

    const history = useHistory();
    
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