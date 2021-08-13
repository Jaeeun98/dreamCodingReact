import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './card.module.css';

const Card = ({ storage, auth, database }) => {

    const history = useHistory();
    const userId = history.location.state;

    const [card, setCard] = useState({});

    useEffect(() => {
      database.readData(userId, cards => {
        setCard(cards);
      });
      
    })

    const onAddForm = card => {
      setCard(user => {
        const update = {...user};
        update[card.id] = card;
        return update;
      });

      database.saveData(userId, card);
    }

    const onDeleteForm = cardId => {
      setCard(user => {
        const update = {...user};
        delete update[cardId];
        return update;
      })

      card[cardId].fileName && storage.imgDelete(card[cardId].fileName);

    }

    const onImgAdd = (cardId, file) => {
      setCard(user => {
        const update = {...user};
        update[cardId].fileName = file.fileName
        update[cardId].fileURL = file.fileURL
        return update
      })
    }

    return (
      <section className={styles.card}>
        <Header auth={auth}/>
        <section className={styles.section}>
          <CardMaker
            user={card}
            onAddForm={onAddForm}
            onDeleteForm={onDeleteForm}
            onImgAdd={onImgAdd}
            storage={storage}
          />
          <CardPreview user={card} />
        </section>
        <Footer />
      </section>
    );
}

export default Card;