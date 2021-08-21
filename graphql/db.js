let movies = [
  {
    id: 0,
    name: 'Memento',
    score: 19,
  },
  {
    id: 1,
    name: 'Avengers - The new one',
    score: 42,
  },
  {
    id: 2,
    name: 'The Godfather I',
    score: 99,
  },
  {
    id: 3,
    name: 'Logan',
    score: 22,
  },
  {
    id: 4,
    name: 'X-man',
    score: 10,
  },
];

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  }
  return false;
};

export const getMovies = () => movies;

export const addMovie = (name, score) => {
  const newMovie = {
    id: getMovies().length,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
