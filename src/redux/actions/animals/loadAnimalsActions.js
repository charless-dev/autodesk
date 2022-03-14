import TYPES from '../../types';
import serviceAnimals from '../../../services/animals';

export default function loadAnimalsAction() {
    return async (dispatch) => {
        dispatch( loadAnimals() )
        try {
            const animalsList = await serviceAnimals.loadAnimals();
            dispatch( loadAnimalsOk(animalsList.data) )
        } catch (error) {
            dispatch( loadAnimalsError(error.response) )
        }
    }
}

const loadAnimals = () => ({
    type: TYPES.LOADING_ANIMALS,
    payload: true
})
const loadAnimalsOk = data => ({
    type: TYPES.LOADING_ANIMALS_OK,
    payload: data
})
const loadAnimalsError = error => ({
    type: TYPES.LOADING_ANIMALS_ERROR,
    payload: error
})
