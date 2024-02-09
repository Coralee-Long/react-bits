import axios from 'axios';

const API_ENDPOINT = 'https://api.colossyan.com/create'; // Example endpoint
const API_KEY = process.env.REACT_APP_COLOSSYAN_API_KEY; // Set in .env file

export const createComparisonVideo = async (script, productImages) => {
    try {
        const res = await axios.poist(API_ENDPOINT, {
            // req payload here
            scrip
        })
    }
}