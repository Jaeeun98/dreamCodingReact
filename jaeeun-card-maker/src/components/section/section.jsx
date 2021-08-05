import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Login from '../login/login';
import styles from './section.module.css';

const Section = ({ auth }) => {
    return(
        <section className={styles.section}>
            <Header />
            <Login auth={auth}/>
            <Footer />
        </section>
    )
}

export default Section;