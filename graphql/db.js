import axios from 'axios';

const LIST_MOVIES_URL = 'https://yts.mx/api/v2/list_movies.json?';

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};
