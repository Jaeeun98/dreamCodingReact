import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './home.module.css';

const Home = (props) => (

    <section>
        <Header />
            <section className={styles.section}>
                <div>home</div>
            </section>
        <Footer />
    </section>            
);

export default Home;