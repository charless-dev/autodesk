import React from 'react';
import AnimalRow from '../AnimalRow/AnimalRow';
import styles from './AnimalsTable.module.css'

const Animals = ({ stateAnimals }) => {

    const { loading, error, animals } = stateAnimals
    
    return(
        <>
            { loading && <p>Cargando...</p> }
            { !error && <p className="alert alert-danger p2 my-2">{error}</p> } 
            { animals.length === 0 && !loading && <p>No hay animales cargados.</p> }   
            { animals.length > 0 &&
                <table className={styles.table}>
                    <thead className={styles.table_head}>
                        <tr>
                            <th className={styles.table_th}>Name</th>
                            <th className={styles.table_th}>Origin</th>
                            <th className={styles.table_th}>Temperament</th>                        
                            <th className={styles.table_th}>Breed</th>
                            <th className={styles.table_th}>Bred for...</th>
                            <th className={styles.table_th}>Life</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        animals.map((animal) => (
                        <AnimalRow 
                            key={animal.id}
                            animal={animal}
                        />
                        ))
                    }
                    </tbody>
                </table> 
            }
        </>
    );
}

export default Animals; 