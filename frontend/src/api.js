import axios from 'axios';

// Update the API URL to use '/vote' (singular)
const API_URL = 'http://localhost:5000/api/vote';

export const fetchVotes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;  // Return the vote data from the backend
    } catch (error) {
        console.error('Error fetching votes:', error);
        throw error;  // Rethrow the error for the caller to handle
    }
};

export const castVote = async (option) => {
    try {
        await axios.post(API_URL, { option }); // Send the vote option to the backend
    } catch (error) {
        console.error('Error casting vote:', error);
        throw error;  // Rethrow the error for the caller to handle
    }
};

