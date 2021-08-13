import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './card.module.css';

const Card = ({ storage, auth, database }) => {

  const history = useHistory();
  const userId = history.location.state;


  const [user, setUser] = useState({
      0: {
        id: 0,
        name: "jaeeun",
        company: "kakao",
        color: "light",
        job: "frontend",
        mail: "kju9705@gmail.com",
        mes: "Hello",
        fileName : null,
        fileURL : null
      },
      1: {
        id: 1,
        name: "jaeeun2",
        company: "kakao",
        color: "light",
        job: "frontend",
        mail: "kju9705@gmail.com",
        mes: "Hello",
        fileName : null,
        fileURL : null
      },
      2: {
        id: 2,
        name: "jaeeun3",
        company: "kakao",
        color: "light",
        job: "frontend",
        mail: "kju9705@gmail.com",
        mes: "Hello",
        fileName : null,
        fileURL : null
      },
    });

    const onAddForm = card => {
      setUser(user => {
        const update = {...user};
        update[card.id] = card;
        return update;
      });

      database.saveData(userId, card);
    }

    const onDeleteForm = cardId => {
      setUser(user => {
        const update = {...user};
        delete update[cardId];
        return update;
      })

      user[cardId].fileName && storage.imgDelete(user[cardId].fileName);

    }

    const onImgAdd = (cardId, file) => {
      setUser(user => {
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