import axios from 'axios';

const URL = 'https://pixabay.com/api/';

const fetchImages = async (searchQuery, page = 1) => {
  const response = await axios.get(URL, {
    method: 'get',
    params: {
      q: searchQuery,
      page: page,
      key: '33644854-2628b0b3994d15cdaa93d4151',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      safesearch: true,
    },
  });
  return response.data;
};

export default fetchImages;
