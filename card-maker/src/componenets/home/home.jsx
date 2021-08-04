import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './home.module.css';

const Home = ({FileInput, authService, database}) => {

    const history = useHistory();
    const historyState = history?.location?.state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);
    
    const onLogout = useCallback(() => {
        authService.logout();
    }, [authService]);

    useEffect(() => {
        if(!userId){
            return;
        }
        const stopSync = database.syncCards(userId, cards => {
            setCards(cards);
        })  //stopSync에 할당만 함, 실행되지 않음
        return () => stopSync(); //unmount 되었을 때 return이 실행됨
    }, [userId, database])

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user) {
                setUserId(user.uid);
            } else {
                history.push('/')
            }
        })
    }, [history, authService])

    const onFormDelete = card => {
        setCards(cards => {   //가장 최신의 상태를 가져옴
            const update = {...cards};
            delete update[card.id];
            return update;
        });
        database.removeCard(userId, card)
        
    }

    const addOrFormChange = card => {
        setCards(cards => {   //가장 최신의 상태를 가져옴
            const update = {...cards};
            update[card.id] = card;
            return update;
        });
        database.saveCard(userId, card);

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