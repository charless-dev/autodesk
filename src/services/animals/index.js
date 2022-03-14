import API from '../config';

const ENDPOINTS = {
    ANIMALS: 'dogs'
}

const serviceAnimals = {
    loadAnimals: async () => {
        const data = await API.get(ENDPOINTS.ANIMALS)
        return data;
    },
    createAnimal: async (animal) => {
        await API.post(ENDPOINTS.ANIMALS, animal)
    }    
}

export default serviceAnimals;