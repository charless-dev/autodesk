import React from 'react';
import styles from './Btn.module.css'

const Btn = ({ label, handleClick }) => {

    return(
        <>
            <button 
                onClick={handleClick}
                className={styles.btn}
            >{label}</button>
        </>
    );
}

export default Btn; 