import axios from 'axios';

const CORE_API_URL = 'https://mock-core-system.com/api';

export const fetchCoreData = async () => {
    try {
        const response = await axios.get(`${CORE_API_URL}/data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from core system:', error);
        throw error;
    }
};
