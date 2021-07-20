import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './home.module.css';

const Home = ({authService}) => {

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
                    <CardMaker />
                    <CardPreview />
                </section>
            <Footer />
        </section>            
    );
}



export default Home;