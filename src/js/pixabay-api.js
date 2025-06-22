import axios from 'axios';

const API_KEY = '36979931-b9ebd2c49fac6caefdf5e0dc3';

function getImagesByQuery(query) {
  return axios
    .get(`https://pixabay.com/api/`, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(resp => resp.data);
}

export default getImagesByQuery;
