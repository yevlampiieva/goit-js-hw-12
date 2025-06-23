import axios from 'axios';

const API_KEY = '36979931-b9ebd2c49fac6caefdf5e0dc3';

async function getImagesByQuery(query, page) {
  const response = await axios.get(`https://pixabay.com/api/`, {
    params: {
      key: API_KEY,
      q: query,
      page,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}

export default getImagesByQuery;
