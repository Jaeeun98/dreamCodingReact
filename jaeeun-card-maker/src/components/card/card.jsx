import React from 'react';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './card.module.css';

const Card = ({ user, onAddForm, onDeleteForm, onImgAdd, storage, auth }) => {

    return (
      <section className={styles.card}>
        <Header auth={auth}/>
        <section className={styles.section}>
          <CardMaker
            user={user}
            onAddForm={onAddForm}
            onDeleteForm={onDeleteForm}
            onImgAdd={onImgAdd}
            storage={storage}
          />
          <CardPreview user={user} />
        </section>
        <Footer />
      </section>
    );
}

export default Card;