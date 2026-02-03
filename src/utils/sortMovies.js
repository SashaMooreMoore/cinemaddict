const sortMoviesByRating = (arr) => [...arr].sort((a,b) => b['film_info']['total_rating'] - a['film_info']['total_rating']);

const sortMoviesByComments = (arr) => [...arr].sort((a,b) => b['comments'].length - a['comments'].length);

export{ sortMoviesByRating, sortMoviesByComments};
