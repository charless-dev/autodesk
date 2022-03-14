/* eslint-disable import/no-anonymous-default-export */
import TYPES from '../types';

const initialState = {
    animals: [
        {
          "bred_for": "Badger, otter hunting",
          "breed_group": "Terrier",
          "id": 4,
          "life_span": "10 - 13 years",
          "name": "Airedale Terrier",
          "origin": "United Kingdom, England",
          "reference_image_id": "1-7cgoZSh",
          "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous"
        },
        {
          "bred_for": "Fighting",
          "breed_group": "Terrier",
          "country_code": "US",
          "id": 15,
          "life_span": "10 - 15 years",
          "name": "American Pit Bull Terrier",
          "reference_image_id": "HkC31gcNm",
          "temperament": "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous"
        },
        {
          "bred_for": "",
          "breed_group": "Terrier",
          "country_code": "US",
          "id": 16,
          "life_span": "12 - 15 years",
          "name": "American Staffordshire Terrier",
          "reference_image_id": "rJIakgc4m",
          "temperament": "Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous"
        },
        {
          "bred_for": "Cattle herdering, hunting snakes and rodents",
          "breed_group": "Terrier",
          "country_code": "AU",
          "id": 24,
          "life_span": "15 years",
          "name": "Australian Terrier",
          "reference_image_id": "r1Ylge5Vm",
          "temperament": "Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous"
        },
        {
          "bred_for": "Killing rat, badger, other vermin",
          "breed_group": "Terrier",
          "id": 34,
          "life_span": "14 - 16 years",
          "name": "Bedlington Terrier",
          "reference_image_id": "ByK8gx947",
          "temperament": "Affectionate, Spirited, Intelligent, Good-tempered"
        },
        {
          "bred_for": "Military/working dogs in the USSR.",
          "breed_group": "Working",
          "id": 44,
          "life_span": "10 - 11 years",
          "name": "Black Russian Terrier",
          "temperament": "Hardy, Energetic, Lively, Confident, Stable, Brave"
        },
        {
          "bred_for": "Fox bolting, ratting",
          "breed_group": "Terrier",
          "id": 51,
          "life_span": "12 - 14 years",
          "name": "Border Terrier",
          "reference_image_id": "HJOpge9Em",
          "temperament": "Fearless, Affectionate, Alert, Obedient, Intelligent, Even Tempered"
        },
        {
          "bred_for": "Ratting, Companionship",
          "breed_group": "Non-Sporting",
          "id": 53,
          "life_span": "11 - 13 years",
          "name": "Boston Terrier",
          "reference_image_id": "rkZRggqVX",
          "temperament": "Friendly, Lively, Intelligent"
        },
        {
          "bred_for": "Bull baiting, Fighting",
          "breed_group": "Terrier",
          "id": 61,
          "life_span": "10 - 12 years",
          "name": "Bull Terrier",
          "reference_image_id": "VSraIEQGd",
          "temperament": "Trainable, Protective, Sweet-Tempered, Keen, Active"
        }
      ],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        
        case TYPES.CREATE_ANIMAL:
        case TYPES.LOADING_ANIMALS:
            return {
                ...state,
                loading: action.payload
            }

        case TYPES.CREATE_ANIMAL_OK:
            return {
                ...state,
                loading: false,
                error: null,
                animals: [...state.animals, action.payload]
            }   
            
        case TYPES.CREATE_ANIMAL_ERROR:
        case TYPES.LOADING_ANIMALS_ERROR:            
            return {
                ...state,
                loading: false,
                error: action.payload
            }               

        case TYPES.LOADING_ANIMALS_OK:
            return {
                ...state,
                loading: false,
                animals: action.payload
            }   

        default:
            return state;
        
    }
}