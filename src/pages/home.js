import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnimalsTable from '../components/AnimalsTable/AnimalsTable';
import Btn from '../components/shared/Btn/Btn';

// Actions
import loadAnimalsAction from '../redux/actions/animals/loadAnimalsActions';

const Home = () => {

    const stateAnimals = useSelector( state => state.animals); 
    const dispatch = useDispatch();

    useEffect( ()=>{
        const loadAnimals = () => dispatch( loadAnimalsAction() );
        loadAnimals();
    },[]);

    const createAnimal = () => {
        
    }

    return(
        <section className='layout_section'>
            <h2>Animals list</h2>
            <Btn label="Create item"/>
            <br /><br />
            <AnimalsTable
                stateAnimals={stateAnimals}
            />
        </section>
    );
}

export default Home;