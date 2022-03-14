import TYPES from '../../types';
import serviceAnimals from '../../../services/animals';
//import Swall from 'sweetalert2';

export default function createAnimalAction(animal) {
    return async (dispatch) => {
        dispatch( createAnimal() )
        try {
            await serviceAnimals.createAnimal(animal);
            dispatch( createAnimalOk(animal) )
           /* Swall.fire({
                icon: 'success',
                text: 'Cita asignada correctamente'
            })*/
        } catch (error) {
            dispatch( createAnimalError(error.response.data.message) )
        }
    }
}

const createAnimal = () => ({
    type: TYPES.CREATE_ANIMAL,
    payload: true
})
const createAnimalOk = animal => ({
    type: TYPES.CREATE_ANIMAL_OK,
    payload: animal
})
const createAnimalError = error => ({
    type: TYPES.CREATE_ANIMAL_ERROR,
    payload: error
})
