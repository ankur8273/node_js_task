const axios = require('axios');

 
const fetchFromAPI = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
    throw error;
  }
};

module.exports = { fetchFromAPI };
