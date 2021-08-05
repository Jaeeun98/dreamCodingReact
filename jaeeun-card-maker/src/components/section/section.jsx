import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Login from '../login/login';
import styles from './section.module.css';

const Section = (props) => {
    return(
        <section className={styles.section}>
            <Header />
            <Login />
            <Footer />
        </section>
    )
}

export default Section;