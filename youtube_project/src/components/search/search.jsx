import React, { memo } from 'react';
import styles from './search.module.css'

const Search = memo(({onSearchList}) => {
    const searchList = e => {
        e.preventDefault(); 
        onSearchList(e.target[0].value); 
        e.target[0].value = '';
    }

    return (
        <header>
            <div className={styles.logo}>
                <img src="/images/logo.png" alt="logo" />
                <span>YOUTUBE</span>
            </div>
            <form className={styles.form} onSubmit={searchList}>
                <input type="search" placeholder="search.." className={styles.search} />
                <button type="submit" className={styles.searchBtn} >
                    <img className={styles.searchIcon} src="/images/search.png" alt="searchIcon" />
                </button>
            </form>
        </header>
    )
})

export default Search;