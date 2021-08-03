import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './home.module.css';

const Home = ({FileInput, authService}) => {

    const [cards, setCards] = useState({
      1: {
        id: "1",
        name: "jaeeun",
        company: "kakao",
        team: "light",
        title: "frontend",
        mail: "jaeeun_98@naver.com",
        message: "hello",
        fileName: "jaeeunFile",
        fileURL: null,
      },
      2: {
        id: "2",
        name: "jaeeun2",
        company: "kakao",
        team: "dark",
        title: "frontend",
        mail: "jaeeun_97@naver.com",
        message: "hello",
        fileName: "jaeeunFile",
        fileURL: null,
      },
      3: {
        id: "3",
        name: "jaeeun3",
        company: "kakao",
        team: "colorful",
        title: "frontend",
        mail: "jineun_98@naver.com",
        message: "hello",
        fileName: "jaeeunFile",
        fileURL: null,
      },
    });


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

    const onFormDelete = card => {
        setCards(cards => {   //가장 최신의 상태를 가져옴
            const update = {...cards};
            delete update[card.id];
            return update;
        })
    }

    const addOrFormChange = card => {
        setCards(cards => {   //가장 최신의 상태를 가져옴
            const update = {...cards};
            update[card.id] = card;
            return update;
        })
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
                <section className={styles.container}>
                    <CardMaker 
                        FileInput={FileInput}
                        cards={cards} 
                        addCard={addOrFormChange} 
                        onFormDelete={onFormDelete}
                        onFormChange={addOrFormChange}
                    />
                    <CardPreview cards={cards}/>
                </section>
            <Footer />
        </section>            
    );
}



export default Home;