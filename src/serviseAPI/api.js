import axios from 'axios';

const KEY = '30492786-6e7382f4f150e06b7795c36c5';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchApiGallery = async (searchWord, page) => {
  const response = await axios.get(
    `/?key=${KEY}&q=${searchWord}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  const totalHits = response.data.totalHits;
  const newData = response.data.hits.map(
    ({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    })
  );
  return { totalHits, newData };
};
