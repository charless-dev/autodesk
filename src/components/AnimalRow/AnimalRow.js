import React from 'react';
import styles from '../AnimalsTable/AnimalsTable.module.css'

const AnimalRow = ({animal}) => {
    const { name, origin, temperament, breed_group, bred_for, life_span  } = animal;
    return(
        <>
            <tr>
                <td className={styles.table_th}>{name}</td>
                <td className={styles.table_th}>{origin}</td>
                <td className={styles.table_th}>{temperament}</td>
                <td className={styles.table_th}>{breed_group}</td>
                <td className={styles.table_th}>{bred_for}</td>
                <td className={styles.table_th}>{life_span}</td>
            </tr>
        </>
    );
}

export default AnimalRow; 